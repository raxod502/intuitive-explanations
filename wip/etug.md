---
title: "Emacs: The Technical User Guide"
---

[GNU Emacs](https://www.gnu.org/software/emacs/) is an excellent piece
of software. The purpose of this article is not to convince you of
that. Rather, if you have already drunk the Kool-Aid, you may be
wondering, "Okay, so I tried getting started, but as soon as I needed
to customize something, I got confused". This is because Emacs is a
large, complex system. Some parts of its complexity are justified;
other parts could be greatly improved. Nevertheless, what matters to
*you* is learning how to get done whatever you need to get done.

The approach I take in this article is not to give you a laundry list
of things you can customize. I think this approach is doomed to
failure, because there is no way to catalogue all the things you might
want to customize. Instead, I will try to explain how to *learn* to
customize Emacs. I will cover:

* the surprising features of Emacs Lisp as they contrast with other
  programming languages
* common patterns you need to know for writing an Emacs configuration
* how to translate "make Emacs do X" into code
* how to debug an Emacs configuration
* suggestions for scaling an Emacs configuration, based on my
  three-year experience maintaining the cutting-edge
  [Radian](https://github.com/raxod502/radian) configuration
* suggestions on specific (internal and) external packages to use, and
  comparisons between the available alternatives

## Emacs Lisp: the language



### Emacs Lisp: the highlights



### How to accomplish common tasks in Emacs Lisp



## Patterns for your Emacs configuration



### Variables and user options



### Modes and hooks



### The advice system



### Patching internal functions



### Directory-local variables



### use-package



## Finding out what code you need to write



## Debugging your Emacs configuration



## Scaling your Emacs configuration



### Source layout



### Avoiding code repetition



### Package management



### Performance optimization



#### Byte-compilation



## Package suggestions
