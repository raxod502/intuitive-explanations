---
title: "Shells"
---

> A **shell** is a program that allows you to run other programs by
> typing in text. Without a shell, you would need to communicate with
> the operating system directly in binary.

Anything involving the "command line" or "terminal" generally also
involves a shell. The situation is a bit confusing because using the
command line actually requires several different programs. Let's say
that you type in `git status` at the command line, and press enter.
What happens?

1. You are probably running a **terminal emulator**. This is what
   displays a window on your screen that has text in it. Commonly seen
   terminal emulators include:
   * [Terminal](https://support.apple.com/guide/terminal/welcome/mac)
     (macOS)
   * [iTerm2](https://www.iterm2.com/) (macOS)
   * [GNOME
     Terminal](https://help.gnome.org/users/gnome-terminal/stable/)
     (Linux, GNOME)
   * [Konsole](https://konsole.kde.org/) (Linux, KDE)

   The terminal emulator is also responsible for listening to your
   keystrokes and passing them as input to whatever program is running
   in the terminal.

   The name "terminal emulator" comes from the fact that at first,
   people didn't have personal computers. Instead, they would sit down
   at one of several **terminal** machines which were connected to a
   shared mainframe. All the terminal did was receive keyboard input
   and forward it on to the computer, and then display the output from
   the computer on the terminal screen. Nowadays, nobody does that
   anymore, but the idea of having a dedicated piece of technology to
   deal with sending keyboard input and displaying program output has
   stuck around. Hence, we have software that emulates it: the
   terminal emulator.

2. Typically the program that the terminal emulator is running is a
   shell. More on that later. The shell receives `git status` and a
   newline as input. It looks up the location of the `git` program,
   and calls it with `status` as an argument. More on this later as
   well.

3. Finally, the program you typed in (`git`) is run. It's separate
   from the shell.

## Anatomy of a command line

When you type in `git status` at a shell, how is this interpreted? To
answer this question, we need to know something about how programs can
be started.

A program is a file somewhere on your filesystem which is marked with
the **executable permission** (see [Filesystems](../filesystems/)).
When you run a program, its data is loaded from that file into memory,
and the operating system arranges for it to be executed as code (see
[Processes](../processes/)).

When you start a program, you can pass some pieces of information to
it in order to control its behavior. For example, you can pass
environment variables (more on that later). You can also pass
**command-line arguments**. The command-line arguments are a *list of
strings*.

The shell takes what you type in, and turns it into a list of strings
that can be used as the command-line arguments. For example, when you
type in `git status`, the shell splits that into a list of two
strings. The first string is `git` and the second string is `status`.

All of the command-line arguments are passed to the program that is
started, but the first one has special meaning to the shell. It is
used to locate the program that should be run (in this case `git`).

The command-line arguments are sometimes called **argv**, because this
is conventionally the name of the variable used to refer to them in
the [C programming
language](https://en.wikipedia.org/wiki/C_(programming_language)). In
C, the syntax for accessing the first string in the command-line
arguments is `argv[0]`, so that first string is also sometimes called
**argv[0]**.

You might ask why the string `git` is part of the command-line
arguments that are passed to `git`. Why would that information be
useful? To understand why, recall that a program is just a file on the
filesystem. It can have any name, or indeed more than one name because
it has been copied, hard-linked, or symbolically linked (see
[Filesystems](../filesystems/)). By looking at argv[0], a program can
see *which name was used to call it*. One use for this functionality
is to bundle together more than one program in a single file, as in
[BusyBox](https://busybox.net/), which can emulate a number of common
Linux utilities depending on how it is called.

Using some features we will learn about later, you can use a shell to
run a program with your own argv[0], without needing to modify the
filesystem. For example, to call the program `busybox` with the
command-line arguments `ls` and `/` (i.e. `busybox` is called using
the name `ls`, so it will behave like the `ls` program usually does):

```sh
( exec -a ls busybox / )
```

## Quoting

How *exactly* does what you type at the command line turn into a list
of command-line arguments?

To answer this question, we have to understand exactly what is meant
by the word *string*. A string is an arbitrary sequence of characters.
Characters can be letters, numbers, punctuation, symbols, emoji,
whitespace, or even special values that say something about how the
text should be displayed (for example, the [Unicode RTL override
character](https://en.wikipedia.org/wiki/Right-to-left_mark)). For
example, <code>&nbsp;foo &nbsp;bar&nbsp;&nbsp;</code> is a string that
consists of eleven characters:

* a space
* the letter `f`
* the letter `o`
* the letter `o`
* a space
* a space
* the letter `b`
* the letter `a`
* the letter `r`
* a space
* a space

You can see the individual characters if you highlight the text
<code>&nbsp;foo &nbsp;bar&nbsp;&nbsp;</code> with your mouse. What's
important to understand is that you can't necessarily communicate the
content of a string without listing the characters explicitly. If you
just said "foo bar", there wouldn't be any way to tell the difference
between <code>&nbsp;foo &nbsp;bar&nbsp;&nbsp;</code> and just `foo
bar`. Sometimes this is important, and it's particularly important
when using shells because of how the transformation from command line
to command-line arguments works.

*Typically*, the transformation goes like this:

1. Remove leading whitespace. That transforms <code>&nbsp;foo
   &nbsp;bar&nbsp;&nbsp;</code> to <code>foo
   &nbsp;bar&nbsp;&nbsp;</code>.
2. Remove trailing whitespace. That transforms <code>foo
   &nbsp;bar&nbsp;&nbsp;</code> to `foo  bar`.
3. Condense all of the other whitespace sequences to just one space
   each. That transforms `foo  bar` to `foo bar`.
4. Split the remaining text apart at each space. That transforms `foo
   bar` to the two separate strings `foo` and `bar`, which are then
   used as the command-line arguments. (Program `foo` is invoked with
   the arguments `foo` and `bar`, with `foo` as argv[0].)

It's worth noting that this isn't necessarily how the algorithm is
actually implemented, but it's not a bad way of understanding what's
going on.

## Command-line conventions



## Command lookup and PATH



## Variables and the environment



## Common shells



## Tips and tricks for shell programming



## sh
