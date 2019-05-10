---
title: "Limits"
---

The idea of a *limit* is key to understanding the fundamental concepts
of calculus. There is a precise definition that formalizes this idea,
and that is also sometimes useful (although the idea is more
important).

# What does it mean to increase without bound?

Here are two functions:

![Graph of two functions](/assets/limits-graphs.png)

Do they increase forever, or eventually reach a maximum? In fact, the
red curve is $$ y = \log x \n,$$ which increases forever, while the
purple curve is $$ y = 3 \arctan 0.2x \n,$$ which has a maximum of $$
y = 1.5\pi \approx 4.7 \n.$$ There is really no way to know just from
the graph, as both curves look very similar! So if you want to
determine when a function has a maximum value, you have to look at the
actual definition of the function. But how can you convince someone
that a function increases forever, if you can't just point to the
graph and claim it's obvious?

Let's examine the idea of *has no maximum*. That means that, given
some supposed maximum, the function exceeds that value at some point.
So we might say

> The function $$ f $$ increases forever if for every number $$ M
> \n,$$ there is some value $$ x $$ such that $$ f(x) > M \n.$$

Consider the function $$ f(x) = x + 2 \sin x \n,$$ whose graph is
shown below:

![Graph of increasing sine wave](/assets/limits-increasing-sine.png)

That would satisfy our definition, since the graph will eventually
rise high enough to cross any given horizontal line. But it wouldn't
be quite right to say it *increases forever*, since it also decreases
sometimes. Perhaps a better term would be *becomes arbitrarily large*.
The reason we use the word *arbitrary* is that someone can pick any
value they would like, completely arbitrarily, and that number will
not be a maximum for the function, no matter how large it was.
