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

When you type in `git status` at a shell, how is this interpreted?

## Quoting



## Command lookup and PATH



## Variables and the environment



## Common shells
