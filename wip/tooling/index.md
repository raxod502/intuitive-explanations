---
title: "Big Dictionary of Developer Tooling"
---

There is a lot more to being an effective programmer than knowing how
to write code.

Coding is an *abstraction*: it omits many details about what is
actually going on. For your keystrokes to be transformed into code,
you need to be using a text editor. How do you configure that editor?
Your code has to be saved somewhere, which entails the existence of
files, directories, filesystems, permissions, and disk partitions.
When you run your code, your desktop environment passes your
keystrokes to a terminal emulator which is running a shell which is
translating a command line into an executable program located on the
filesystem which is loaded into memory and dynamically linked and so
on and so forth. The amount of work that is going on behind the scenes
is staggering. This work is performed by **developer tooling**.

Many programmers know very little about all of this machinery. That is
fine most of the time, but what about when things go wrong? Then it
becomes quite useful to know a bit about how they are *supposed* to
work.

Resources exist, of course, for learning about these things. But all
too often, either they tell you "just do this" without explaining why
(see: most Google results when debugging an error message), or they
assume large swathes of background knowledge that nobody could be
reasonably be expected to have when learning (see:
[ArchWiki](https://wiki.archlinux.org/)).

The goal of this post series is to provide a better way to learn about
developer tooling so that you can debug more effectively. It's
currently a work in progress, so this page is more like a "declaration
of intent" than any actual content :)

## Table of contents

* Partition tables
* Boot process
* [Shells](shells/)
* Package managers
* ...
