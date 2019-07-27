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

## Table of contents

<!-- toc -->

- [Emacs Lisp: the language](#emacs-lisp-the-language)
  * [Emacs Lisp: the highlights](#emacs-lisp-the-highlights)
    + [Syntax and evaluation](#syntax-and-evaluation)
    + [Data types](#data-types)
    + [Comparison](#comparison)
    + [Variable binding](#variable-binding)
    + [Function and variable namespaces](#function-and-variable-namespaces)
    + [Errors](#errors)
    + [Macros](#macros)
  * [How to accomplish common tasks in Emacs Lisp](#how-to-accomplish-common-tasks-in-emacs-lisp)
- [Patterns for your Emacs configuration](#patterns-for-your-emacs-configuration)
  * [Variables and user options](#variables-and-user-options)
  * [Modes and hooks](#modes-and-hooks)
  * [The advice system](#the-advice-system)
  * [Patching internal functions](#patching-internal-functions)
  * [Directory-local variables](#directory-local-variables)
  * [Features](#features)
  * [use-package](#use-package)
- [Finding out what code you need to write](#finding-out-what-code-you-need-to-write)
- [Debugging your Emacs configuration](#debugging-your-emacs-configuration)
- [Scaling your Emacs configuration](#scaling-your-emacs-configuration)
  * [Source layout](#source-layout)
  * [Avoiding code repetition](#avoiding-code-repetition)
  * [Package management](#package-management)
  * [Performance optimization](#performance-optimization)
    + [Byte-compilation](#byte-compilation)
- [Package suggestions](#package-suggestions)

<!-- tocstop -->

## Emacs Lisp: the language

Emacs Lisp:

* is a [dynamic programming
  language](https://en.wikipedia.org/wiki/Dynamic_programming_language),
  with no [type system](https://en.wikipedia.org/wiki/Type_system).
* is
  [interpreted](https://en.wikipedia.org/wiki/Interpreted_language),
  but can be optionally compiled into
  [bytecode](https://en.wikipedia.org/wiki/Bytecode) for improved
  performance.
* is a
  [Lisp](https://en.wikipedia.org/wiki/Lisp_(programming_language)),
  and specifically a
  [Lisp-2](https://stackoverflow.com/q/4578574/3538165).
* uses both [lexical and dynamic
  scope](https://en.wikipedia.org/wiki/Scope_(computer_science)).
* has [first-class
  functions](https://en.wikipedia.org/wiki/First-class_function), but
  poor native syntactic support for [functional
  programming](https://en.wikipedia.org/wiki/Functional_programming).
* has a powerful [macro
  system](https://en.wikipedia.org/wiki/Macro_(computer_science)),
  although with the creation of [hygienic
  macros](https://en.wikipedia.org/wiki/Hygienic_macro) requiring
  specific attention from the programmer.
* is
  [asynchronous](https://en.wikipedia.org/wiki/Asynchrony_(computer_programming))
  and supports [cooperative
  multithreading](https://en.wikipedia.org/wiki/Multithreading_(computer_architecture)),
  featuring asynchronous process and network IO primitives but only
  synchronous filesystem IO primitives.
* is highly mutable, with [access
  modifiers](https://en.wikipedia.org/wiki/Access_modifiers),
  [namespacing](https://en.wikipedia.org/wiki/Namespace) being
  implemented purely by convention and with any function or variable
  being able to be changed at any time.
* has an eclectic [standard
  library](https://en.wikipedia.org/wiki/Standard_library) which is
  highly optimized for performing text-editing tasks.
* features a built-in [package
  manager](https://en.wikipedia.org/wiki/Package_manager) and several
  external competitors.

### Emacs Lisp: the highlights

The next few sections cover the very basics of how Emacs Lisp works as
a language. After that, we'll go into common idioms that you will
probably use in your Emacs configuration.

#### Syntax and evaluation

(If you've worked with a Lisp before, you probably already know
everything in this sub-section.)

Emacs Lisp is a Lisp, so all source code is composed of lists. Here is
some example code [from
Radian](https://github.com/raxod502/radian/blob/b20c1dd697aa804413626c045af6df8883bc5404/emacs/radian.el#L2598-L2602):

``` elisp
(not (memq (lsp--workspace-client (lsp--client-server-id w))
           '(jsts-ls mspyls bash-ls texlab)))
```

In this code:

* the `not` function is called with one argument, in which:
  * the `memq` function is called with two arguments, in which:
    * the `lsp--workspace-client` function is called with one
      argument, in which:
      * the `lsp--client-server-id` function is called with one
        argument, namely the variable `w`
    * the quote `'` indicates that the next form should not be
      evaluated, so:
      * instead of the `jsts-ls` function being called with three
        arguments, namely the variables `mspyls`, `bash-ls`, and
        `texlab`, we get just a list of four elements, namely the
        *symbols* `jsts-ls`, `mspyls`, `bash-ls`, and `texlab`.

The evaluation goes from inside to out, so first
`lsp--client-server-id` is called, and then `lsp--workspace-client` is
given its return value, and then `memq` is given its return value
along with the list `(jsts-ls mspyls bash-ls texlab)`, and then the
return value of `memq` is passed to `not`.

Emacs Lisp makes extensive use of *macros* (user-definable) and
*special forms* (built in to the interpreter), both of which can
change the way that evaluation works. The quote character used above
is a special form which prevents evaluation entirely. As another
example, consider some more example code [from
Radian](https://github.com/raxod502/radian/blob/b20c1dd697aa804413626c045af6df8883bc5404/emacs/radian.el#L2740-L2742):

``` elisp
(if (= (safe-length collection) 1)
    (car collection)
  (apply orig-completing-read prompt collection args))
```

The `if` special form doesn't let all of its arguments be evaluated.
In the code above, `(= (safe-length collection) 1)` is evaluated, and
if it is true, then `(car collection)` is evaluated and returned;
otherwise, `(apply orig-completing-read prompt collection args)` is
evaluated and returned. Under no circumstances are *all* of the
arguments of `if` ever evaluated in the same call.

As a final example, consider the following code [from
Radian](https://github.com/raxod502/radian/blob/b20c1dd697aa804413626c045af6df8883bc5404/emacs/radian.el#L2598-L2602):

``` elisp
(thread-first w
  (lsp--workspace-client)
  (lsp--client-server-id)
  (memq '(jsts-ls mspyls bash-ls texlab))
  (not))
```

If you think it seems similar to the first example, that's because I
lied about the first example: it actually appears as this in Radian.
`thread-first` is a *macro*, which means it receives its arguments
unevaluated (i.e. as a bunch of lists and symbols) and then returns
the code that should actually be evaluated (i.e. a bunch of different
lists and symbols). `thread-first` takes its first argument and puts
it into its second argument, then takes its second argument and puts
it into its third argument, and so on. What we end up with is exactly
the code in the first example. In conclusion, when a macro is
involved, evaluation can do basically anything. The
[`macrostep`](https://github.com/joddie/macrostep) package is helpful
for viewing the expansions of Emacs Lisp macros directly inline.

#### Data types

Emacs Lisp has a number of primitive data types:

* Strings (immutable)
  * Syntax: `"hello"`
  * Convert a symbol to a string:
    ``` elisp
    (symbol-name 'hello)
    ;; => "hello"
    ```
  * Convert any object to a string:
    ``` elisp
    (format "%S" '(list of symbols))
    ;; => "(list of symbols)"
    ```
  * Functions:
    ``` elisp
    (concat "string1" ", string2" ", string3")
    ;; => "string1, string2, string3"

    (string-join '("string1" "string2" "string3") ", ")
    ;; => "string1, string2, string3"

    (string-trim "  **foo bar**  ")
    ;; => "**foo bar**"

    (format "C-style printf with %s, %d, 0x%x, etc." "strings" 42 42)
    ;; => "C-style printf with strings, 42, 0x2a, etc."
    ```
* Symbols
  * Symbols are like strings, except every symbol with the same
    content is actually the same object in memory.
  * Syntax: `hello` (but you have to make sure the symbol is not
    *evaluated* because then it would be treated as a variable -- so
    usually it will look like `'hello`, or a list of symbols would
    look like `'(list of symbols)`)
  * Convert a string to a symbol:
    ``` elisp
    (intern "hello")
    ;; => hello
    ```
  * You can also create a symbol that *doesn't* share memory with
    other symbols that have the same content (so it won't compare
    equal to them):
    ``` elisp
    (eq (intern "hello") (intern "hello"))
    ;; => t  (i.e. they are the same)

    (eq (make-symbol "hello") (make-symbol "hello"))
    ;; => nil  (i.e. they are not the same)
    ```
    This feature can be useful when writing macros.
* Keywords
  * Keywords are just symbols that start with a colon `:`. They have a
    special property where you can write them without quoting them:
    ``` elisp
    foo
    ;; => unbound variable error

    'foo
    ;; => the symbol foo

    :foo
    ;; => the symbol/keyword :foo

    ':foo
    ;; => also the symbol/keyword :foo
    ```
* Integers
  * Syntax: `42` or `-17`
  * Limited range (determined by the variables `most-negative-fixnum`
    and `most-positive-fixnum` -- these are `-2305843009213693952` and
    `2305843009213693951` on my computer), with silent wraparound
  * Convert a floating-point number to an integer:
    ``` elisp
    (round 2.7)
    ;; => 3
    ```
  * Functions:
    ``` elisp
    (+ 2 3)
    ;; => 5

    (- 2 3)
    ;; => -1

    (- 2)
    ;; => -2  (i.e. - with one argument does negation)

    (* 2 3)
    ;; => 6

    (/ 2 3)
    ;; => 0  (i.e. integer division rounds toward zero)

    (1+ 3)
    ;; => 4

    (1- 3)
    ;; => 2  (i.e. 1- is "one less than", not "one minus")
    ```
* Floating-point numbers
  * Syntax: `3.14` or `-6.022e+23`
  * Convert an integer to a floating-point number:
    ``` elisp
    (float 3)
    ;; => 3.0
    ```
  * All the same integer arithmetic functions work with floating-point
    numbers as well. Integers are converted to floating-point numbers
    as necessary:
    ``` elisp
    (/ 2.0 3)
    ;; => 0.6666666666666666
    ```
* Lists (mutable)
  * Syntax: `(foo bar baz)` (but you have to make sure the list is not
    *evaluated* because then it would be treated as a function call --
    so usually it will look like `'(foo bar baz)`, or a list of lists
    would look like `'((foo bar) (baz quux))`)
  * Usually instead of writing lists directly, you'll use the `list`
    function, which evaluates its arguments before putting them in the
    list:
    ``` elisp
    '(2 3 (+ 2 3))
    ;; => (2 3 (+ 2 3))

    (list 2 3 (+ 2 3))
    ;; => (2 3 5)

    '(the sum of 2 and 3 is (+ 2 3))
    ;; => (the sum of 2 and 3 is (+ 2 3))

    (list 'the 'sum 'of 2 'and 3 'is (+ 2 3))
    ;; => (the sum of 2 and 3 is 5)
    ```
  * The symbol `nil` (which is like a keyword; you don't need to quote
    it) is the empty list. You can use it just like any other list.
    ``` elisp
    nil
    ;; => nil

    'nil
    ;; => nil

    ()
    ;; => nil

    '()
    ;; => nil

    (list)
    ;; => nil
    ```
  * Functions:
    ``` elisp
    (cons 'foo '(bar baz))
    ;; => (foo bar baz)

    (car '(foo bar baz))
    ;; => foo

    (cdr '(foo bar baz))
    ;; => (bar baz)

    (car (last '(foo bar baz)))
    ;; => baz

    (length '(foo bar baz))
    ;; => baz

    (append '(foo bar) '(baz quux))
    => (foo bar baz quux)

    (reverse '(foo bar baz))
    ;; => (baz bar foo)

    (let ((my-list '(foo bar baz)))
      (setcar my-list 'quux)
      my-list)
    ;; => (quux bar baz)

    (let ((my-list '(foo bar baz)))
      (setcdr my-list '(quux baz bar))
      my-list)
    ;; => (foo quux baz bar)
    ```
  * Lists in Emacs Lisp are actually built out of objects called
    *conses*. A cons has a *car* and a *cdr*. Any list is either
    `nil` or a cons. If it's a cons, then the car is the first element
    and the cdr is the rest of the list (either `nil` or another
    cons). So:
    ``` elisp
    (list 1 2 3)
    ;; => (1 2 3)

    (cons 1 (cons 2 (cons 3 nil)))
    ;; => (1 2 3)
    ```
    You can, however, put whatever you want in the cdr, not just
    another list:
    ``` elisp
    (cons 1 2)
    ;; => (1 . 2)

    (cons 1 (cons 2 (cons 3 4)))
    ;; => (1 2 3 . 4)

    '(1 2 3 . 4)
    ;; => (1 2 3 . 4)

    (list (cons 'lhs 5) (cons 'rhs 7) (cons 'sum 12))
    ;; => ((lhs . 5) (rhs . 7) (sum . 12))
    ```
* Vectors (mutable) -- aka arrays
  * Not very important. All you need to know is they use square
    brackets, just in case you see that somewhere.
* Hash tables (mutable) -- aka dictionaries or maps
  * Syntax: none; use the `make-hash-table` function to create one
  * When using only symbols as hash table keys, use `(make-hash-table
    :test #'eq)`. Otherwise, use `(make-hash-table :test #'equal)`.
    See the Comparison section below. (You can use arbitrary objects
    as hash table keys, as long as they can be compared using the test
    function -- i.e. `eq` or `equal`, as appropriate.)
  * Because hash tables are clunky in Emacs Lisp, frequently alists or
    plists (see below) are used instead, unless you need really fast
    lookup and there are many keys.
  * Functions:
    ``` elisp
    (let ((table (make-hash-table :test #'eq)))
      (puthash 'foo 'bar table)
      (gethash 'foo table))
    => bar

    (let ((table (make-hash-table :test #'eq)))
      (gethash 'foo table))
    => nil  (i.e. gethash returns nil if the key is missing)

    (let ((table (make-hash-table :test #'eq)))
      (gethash 'foo table 'default))
    => default

    (let ((table (make-hash-table :test #'eq)))
      (puthash 'foo 'bar table)
      (remhash 'foo table)
      (gethash 'foo table))
    => nil
    ```
  * There's no way to check if a key is present in a hash table. Just
    don't use nil as a value, and you'll be fine. If you really need
    to check, you can use `make-symbol` to generate a symbol that
    nobody else has a reference to, and use that as the default value
    for `gethash`. Then if you get that symbol back, you'll know the
    key wasn't there.

It also has some more complex data types built from the simpler ones:

* Booleans
  * Emacs Lisp doesn't really have a boolean data type. The symbol
    `nil` (or equivalently the empty list) is false, and everything
    else is true. The "canonical" true value is the symbol `t`, which
    (like `nil` and keywords) doesn't need to be quoted. It's
    idiomatic to talk about "nil" and "non-nil" values instead of
    "false" and "true" or "falsy" and "truthy" values.
  * Functions: `and`, `or`, `not`, `xor`
* Alists
  * Alists ("association lists") are like a poor man's hash table.
    They are a list of conses, like `((foo . bar) (baz . quux))`. The
    cars of the conses are the keys, and the cdrs are the values.
    Usually, the keys of an alist are symbols, since that makes them
    easier to manipulate. You have to use different functions
    otherwise.
  * Functions:
    ``` elisp
    (alist-get 'baz '((foo . bar) (baz . quux)))
    ;; => quux

    (alist-get "baz" '(("foo" . bar) ("baz" . quux)) nil nil #'equal)
    ;; => quux  (i.e., you have to specify #'equal to use strings as keys)

    (let ((my-alist '((foo . bar) (baz . quux))))
      (setf (alist-get 'baz my-alist) 'QUUX)
      my-alist)
    ;; => ((foo . bar) (baz . QUUX))

    (let ((my-alist '(("foo" . bar) ("baz" . quux))))
      (setf (alist-get "baz" my-alist) 'QUUX)
      my-alist)
    ;; => (("foo" . bar) ("baz" . QUUX))

    (let ((my-alist '((foo . bar) (baz . quux))))
      (setf (alist-get 'baz my-alist nil 'remove) nil)
      my-alist)
    ;; => ((foo . bar))
    ```
* Plists
  * Plists ("property lists") are another way of using lists as a
    key-value store. They are less common than alists, except that
    many functions take keyword arguments as a plist. A plist is just
    a regular list which alternates between keys and values. Plist
    keys are basically always symbols; otherwise, there aren't good
    functions in the standard library for manipulating them. In fact,
    by convention, the keys are generally keywords rather than any old
    symbols. Unfortunately, there currently isn't any good function in
    the standard library for *removing* a key from a plist.
  * Functions:
    ``` elisp
    (plist-get '(:foo bar :baz quux) :baz)
    ;; => quux

    (let ((my-plist '(:foo bar :baz quux)))
      (setq my-plist (plist-put my-plist :baz 'QUUX))
      my-plist)
    ;; => (:foo bar :baz QUUX)
    ```

#### Comparison



#### Variable binding



#### Function and variable namespaces



#### Errors



#### Macros



### How to accomplish common tasks in Emacs Lisp



## Patterns for your Emacs configuration



### Variables and user options



### Modes and hooks



### The advice system



### Patching internal functions



### Directory-local variables



### Features



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
