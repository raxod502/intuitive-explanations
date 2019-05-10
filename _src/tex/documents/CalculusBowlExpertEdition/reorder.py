#!/usr/bin/env python3

from itertools import groupby
import os
import random
import re


def partition_by(l, elt):
    return [
        list(group) for k, group in groupby(l, lambda x: x == elt) if not k
    ]


def brace_difference(lines):
    left_count = 0
    right_count = 0
    for line in lines:
        line = re.sub(r'(?<!\\)%.*$', '', line)
        left_count += len(re.findall(r'(?<!\\)\{', line))
        right_count += len(re.findall(r'(?<!\\)\}', line))
    return left_count - right_count


script_file = os.path.abspath(__file__)
folder = os.path.split(script_file)[0]
tex_file = os.path.join(folder, 'CalcBowl.tex')
backup_file = os.path.join(folder, 'CalcBowl-Backup.tex')
with open(tex_file, 'r+') as tf, open(backup_file, 'w') as bf:
    lines = [line.rstrip('\n') for line in tf.readlines()]
    begin_index = lines.index('%CB:BEGIN')
    end_index = lines.index('%CB:END')
    preamble_lines = lines[:begin_index-1]
    preamble = '\n'.join(preamble_lines)
    postamble_lines = lines[end_index+2:]
    postamble = '\n'.join(postamble_lines)
    body_lines = lines[begin_index+2:end_index-1]
    questions = partition_by(body_lines, '')
    i = 0
    while i < len(questions):
        if brace_difference(questions[i]) == 0:
            if '%CB:IGNORE' not in questions[i]:
                choices = questions[i][-5:]
                random.shuffle(choices)
                questions[i][-5:] = choices
            i += 1
        else:
            questions[i].extend(questions[i+1])
            questions.pop(i+1)
    groups = []
    for question in questions:
        if '%CB:GROUP' not in question:
            groups.append([question])
        else:
            groups[-1].append(question)
    random.shuffle(groups)
    questions = [question for group in groups for question in group]
    body = '\n\n'.join('\n'.join(question) for question in questions)
    contents = '\n\n'.join([preamble, '%CB:BEGIN', body, '%CB:END', postamble])
    tf.seek(0)
    bf.write(tf.read())
    tf.seek(0)
    tf.truncate()
    tf.write(contents)
