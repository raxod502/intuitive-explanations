---
title: "Integration"
redirect_from:
  - /fundamental-theorem-of-calculus/
  - /integration/
---

{% raw %}

Integration is one of the two most important operations in calculus
(the other being, of course, differentiation). It is important both
because it has countless applications both inside and outside of
mathematics, and also because it is extraordinarily versatile.

Some applications of integration include:

* deriving formulas for calculating the area of a circle, volume of a
  sphere, or in general any measure (weight, density, center of mass,
  rotational inertia) of a real object of any geometric shape
* using information about forces to derive the path of motion of an
  object, or calculating an object's position at any time given its
  velocity
* running the mathematical machinery responsible for Laplace
  transforms, which allow complex circuitry and mechanical systems to
  be modeled easily, and Lagrangian mechanics, which allow computing
  the behavior of physical systems for which a direct approach is
  intractable

As you might guess from its many applications, integration can be used
in many different situations, so each use can at first seem quite
different. However, every application of integration follows the same
general outline.

# Introduction to integration with pizza

One might say that integration is a general form of *rescaling*. Let
me demonstrate what I mean by that using an analogy. Say we have a
pizza:

![Pizza](/assets/integration-pizza.png)

We can cut up that pizza in many different ways. For example, into
four pieces like so:

![Pizza cut into four pieces](/assets/integration-pizza-partition.png)

The exact way doesn't matter. Now suppose we measure how large each of
these pieces is. For example, maybe in square inches the sizes are:

![Pizza with piece sizes](/assets/integration-pizza-partition-sizes.png)

Of course, you can get the size of the whole pizza by adding together
the sizes of all the slices. In this case,

$$
\color{red}{\text{40 in$^2$}} + \color{green}{\text{50 in$^2$}} +
\color{blue}{\text{70 in$^2$}} + \color{purple}{\text{60 in$^2$}} =
\text{220 in$^2$} \n.
$$

But let's say instead of the size, we want to know how many pepperonis
are on the pizza. (Bear with me, we'll get to integration eventually.)
We can still take the same approach, namely to find out how many
pepperonis are on each slice individually, and add them all together.

But we don't want to count the pepperonis by hand. Instead, we can use
our knowledge of how common pepperonis are on different types of
pizza.

* The <span style="color:red">red</span> piece is cheese, so there are
  no pepperonis. In other words, *zero* pepperonis per square inch.
* The <span style="color:green">green</span> and <span
  style="color:blue">blue</span> pieces are pepperoni, so they have an
  average of 0.15 pepperonis per square inch.
* The <span style="color:purple">purple</span> piece is mixed, so it
  has an average of 0.05 pepperonis per square inch.

We can then calculate the total number of pepperonis (p):

$$
\begin{align}
&\phantom{{}={}}\color{red}{(\text{40 in$^2$})(\text{0 p/in$^2$})} +
\color{green}{(\text{50 in$^2$})(\text{0.15 p/in$^2$})} +
\color{blue}{(\text{70 in$^2$})(\text{0.15 p/in$^2$})} +
\color{purple}{(\text{60 in$^2$})(\text{0.05 p/in$^2$})} \\
&= \color{red}{\text{0 p}} + \color{green}{\text{7.5 p}} +
\color{blue}{\text{10.5 p}} + \color{purple}{\text{3 p}} \\
&= \text{21 p} \n.
\end{align}
$$

What we have done here is essentially *rescaled* each slice of pizza.
Now instead of a size for each slice, we have a number of pepperonis.
The <span style="color:red">red</span> piece has been scaled to zero,
since its *scaling factor*, <span style="color:red">0
p/in^2^</span>, is zero. Both the <span
style="color:green">green</span> and <span
style="color:blue">blue</span> pieces have been scaled by a factor of
0.15 p/in^2^, which is three times greater than the
scaling factor for the <span style="color:purple">purple</span> piece
(<span style="color:purple">0.05 p/in^2^</span>). Note that this
particular scaling operation also changes the units, from area to
pepperoni count.

How can we describe the scaling operation? One way is to just use
English, like I did in the bullet-point list above. However, for
examples with more complex mathematics than pepperoni counting, it is
useful to use a *function*. Sort of like this, but more mathy:

![Pizza slice function](/assets/integration-pizza-function.png)

# Generalizing the integration idea

With our pizza example in mind, here is the outline for every form of
integration:

* We have some object, either concrete or abstract *(e.g. the pizza)*.
  Usually this object is called the *domain of integration*, because
  we define a function whose domain is the object *(e.g. the pepperoni
  density function)*.
* We have some way to split up the object into pieces *(e.g. the four
  slices for the pizza)*. This is called a *partition*.
* We have some way to calculate a *size* for each piece in the
  partition *(e.g. the area of each pizza slice)*.
* We have some way of assigning a *scaling factor* to each point in
  the domain of integration *(e.g. the aforementioned pepperoni
  density function)*.

Then the procedure is simple:

* split the object (domain) into different pieces, according to the
  partition
* figure out what the scaling factor is for each piece
* multiply the size of each piece by its corresponding scaling factor
* add up the results.

In the pizza example, we couldn't calculate the number of pepperonis
directly. Splitting the pizza into different slices, where each slice
had a single pepperoni density, was a crucial step. This is true in
general, and it is why integration is so useful.

The reason this is a useful technique is that if the scaling factor is
different for different parts of the object, you may not be able to
calculate the answer directly. But by splitting the object apart, the
calculation for each piece individually is quite easy: just
multiplication.

You may ask why it would ever *actually* useful to find out what
number you get when you scale a bunch of different parts of the same
object in different ways. Let's see why.

# Application: using integration to calculate area

![Area under curve colored red](/assets/integration-graph-area.png)

We all learn in geometry class how to calculate the areas of some
simple shapes: squares, rectangles, triangles, circles, trapezoids,
and so on. But in the real world, shapes are much more complicated.
Think of your pen, your car's engine, the wing of an airplane, and so
on. But calculating the areas of irregular shapes is important if we
want to know things like the stress experienced by your pen, the heat
transfer through your car engine, and the lift on the airplane's wing.
Often all we have to go on is either a mathematical function
describing the shape of the object or just numerical measurements of
its outline. But with integration, we can still find its area.

It goes like this. Let's say we want to find the area of the red
region shaded in the figure above. Then to integrate, we will split
the red region into many small regions, calculate the area of such
small region, and add together all the answers.

![Area approximated with rectangles](/assets/integration-graph-area-rectangles.png)

"But wait," you object, "you haven't split the area at all! There are
little bits that aren't covered by the rectangles, and the rectangles
stick out in other places."

My answer to that problem? *Use more rectangles.* You can see that the
difference in area between the rectangles and the curve is not that
large, because the rectangles are pretty narrow. If we used more
rectangles, the approximation would be even better. If we want a
numerical approximation of the area under the curve, we can just use
"enough" rectangles -- where "enough" means the approximation is good
enough for whatever we're trying to do. We'll see later how,
paradoxically, we can use this approximation technique and some
additional cleverness to get an *exact* answer, with no error at all.

So now let's see how this technique fits into the general outline of
integration discussed earlier:

* The object (domain) being integrated is not actually the region
  we're trying to calculate the area of. Instead, it's *the line
  segment below the region, on the x-axis,* from $$ x = a $$ to $$ x =
  b \n.$$ We'll see why momentarily.
* The *partition* is how we have split up the domain of integration.
  Since the domain is a line segment on the *x*-axis, our partition
  splits that segment into smaller line segments. Each small line
  segment is the base of one of our rectangles.
* The *size* of each small line segment is its length.
* The *scaling factor* is given by the function $$ f \n.$$

Let's see why this setup works.

From our outline of integration above, our first step is to figure out
what the scaling factor is for each piece (small line segment). Since
the scaling factor is given by the function $$ f \n,$$ we can
calculate it by taking the *x*-coordinate of the segment and then
finding $$ f(x) \n.$$ Now you may object that a line segment doesn't
just have one *x*-coordinate, because it's a segment rather than a
point. But since these are small line segments, the different
*x*-coordinates aren't *that* different, and you can pick any one.
Remember, this is an approximation, so there will be a bit of error.

![A single rectangle](/assets/integration-graph-area-rectangle-single.png)

So our scaling factor is $$ f(x) \n.$$ What does this mean, physically?
It is actually a length: the height of one of our rectangles! Pictured
above is a single rectangle from the previous figure. Since it goes
from the *x*-axis up to the curve, its height is the difference of the
*y*-coordinates, $$ f(x) - 0 = f(x). $$

The next step in our outline is to multiply the size of each piece in
our partition by its scaling factor. In the figure above, the piece in
our partition is the line segment on the *x*-axis which forms the base
of the rectangle. Let's call its length $$ \Delta x, $$ because it is
a change in *x*-coordinate (a horizontal distance).

Now we can see that the multiplication of our partition piece size by
its scaling factor is actually a multiplication of a horizontal length
by a vertical length: we are just calculating the area of our
rectangle.

The final step in integration is add all the products of sizes and
scaling factors, which in this case means combining the areas of all
the rectangles to get an approximation of the area under the curve.

Symbolically, we can write this calculation as:

$$
\sum_{x=a}^{x=b} f(x) \,\Delta x,
$$

which means that we take all the rectangles from $$ x = a $$ to $$ x =
b, $$ for each one we multiply the height $$ f(x) $$ by the width $$
\Delta x, $$ and then we take all the resultant areas and add them
together (indicated by the symbol $$ \sum \n{).}$$ In calculus, we
would call this operation *integrating the function $$ f(x) $$ over
the domain $$ x = a $$ to $$ x = b $$*.

So this gives us a way to calculate areas, if we are so inclined. This
technique is used numerically all the time. However, what is more
interesting is calculating the area *exactly*. We will come back to
calculating areas after we know how to integrate exactly.

# Application: integrating slope

Let's consider another example of integration. Here we have a generic
function:

![Graph of function](/assets/integration-slope-graph.png)

In the previous example, we integrated the function $$ f(x) $$ over
the the domain $$ x = a $$ to $$ x = b \n,$$ and this gave us the
*area under the curve* (or at least an approximation). It is possible
to guess this result, like so: in integration, we are multiplying a
size by a scaling factor (the function being integrated). The size of
the domain is a horizontal length, from $$ x = a $$ to $$ x = b \n,$$
and the scaling factor is a vertical height, from the *x*-axis to the
curve. We would then expect that the resulting product will be an
area, and it is.

Now, we will integrate not the function $$ f(x) $$ itself but its
*derivative* $$ f'(x) \n,$$ over the same domain $$ x = a $$ to $$ x =
b \n.$$ And this is what we get:

![Graph with tangent lines](/assets/integration-slope-graph-tangents.png)

Let me explain. Our domain is still the portion of the *x*-axis
between $$ x = a $$ and $$ x = b \n,$$ so our partition is composed of
small horizontal line segments. These are the horizontal lines in
green. Now, the function we are integrating is the derivative $$ f'(x)
\n,$$ which is the slope of the curve. The slope of a curve is
basically its vertical displacement divided by its horizontal
displacement,

$$
m = \frac{\Delta y}{\Delta x} \n,
$$

so if we take the horizontal displacement and multiply it by the
slope, we will then get the vertical displacement,

$$
m \cdot \Delta x = \Delta y \n.
$$

In this case, $$ m $$ is the slope of the red line segments drawn
tangent to the curve, $$ \Delta x $$ is the length of the horizontal
green segments, and $$ \Delta y $$ is the length of the vertical green
segments.

For each horizontal line segment, then, multiplying by the scaling
factor (the slope of the curve) gives us the corresponding vertical
segment. The last step in integration is to add all of these results
together, and this gives (approximately) the difference $$ f(b) - f(a)
\n.$$ Why is this?

Let's call the *y*-coordinate of the left-hand side of the first red
segment $$ y_1 \n.$$ Then the left-hand side of the second red segment
is $$ y_2 \n,$$ the third one is $$ y_3 \n,$$ and so on up to $$ y_6
\n,$$ which is the *right*-hand side of the last line segment.

The vertical displacement for the first red line segment is $$ y_2 -
y_1 \n,$$ the displacement for the second is $$ y_3 - y_2 \n,$$ and so
on up to $$ y_6 - y_5 $$ for the last. Adding all these displacements
together, the intermediate values cancel and we just get $$ y_6 - y_1
\n.$$ Because the red line segments approximately follow the curve, $$
y_1 $$ is approximately $$ f(a) $$ and $$ y_6 $$ is approximately $$
f(b) \n.$$ That means our total displacement is an approximation of $$
f(b) - f(a) \n.$$

Now, this is only an approximation. Depending on the exact points we
choose within each interval of *x*-coordinates in order to measure the
slope of the curve (and thus determine the slope of the line
segments), the red segments may overshoot or undershoot the curve by a
little. But nevertheless, we can write:

$$
\sum_{x=a}^{x=b} f'(x) \Delta x \approx f(b) - f(a) \n,
$$

where $$ \Delta x $$ means the width of the appropriate horizontal
line segment in the figure.

Let's pause again to consider why this makes sense. We are integrating
the function $$ f'(x) $$ over the domain $$ x = a $$ to $$ x = b \n.$$
As in the previous example, the size of the domain is a horizontal
length. However, now the scaling factor (the function being
integrated) is a slope: the derivative of $$ f \n.$$ We know that
multiplying a slope by a horizontal displacement gives a vertical
displacement, so it is not surprising that we get a vertical
displacement, $$ f(b) - f(a) \n,$$ from the integration.

# Integration as a limiting process

So far, it may look like integration is only useful if you have a
computer, since you need to split your domain into many, many pieces
to get a good approximation of the answer. But this is far from true.

Consider the result we obtained in the previous section by seeing what
happens when we integrate the derivative of a function $$ f(x) \n:$$

$$
\sum_{x=a}^{x=b} f'(x) \Delta x \approx f(b) - f(a) \n.
$$

This is an approximation, and it gets better when we split the domain
(from $$ x = a $$ to $$ x = b \n)$$ into more pieces. (Why? If you
look at the figure, adding more line segments will allow the slope of
the segments to match the slope of the curve more closely, and so the
segments will follow the curve better, leading to less error.) What
happens if we just keep letting the approximation get better and
better?

The result is called a *limit*. There is no such thing as splitting
our domain into an infinite number of infinitely short line segments,
but we can imagine doing that as a conceptual aid. What we are really
doing is investigating how integration responds to the *limiting
process* of increasing the number of segments in our partition without
bound.

We can express the fact that the error in our approximation gets
smaller and smaller with the following equation:

$$
\int_{x=a}^{x=b} f'(x) \,dx = f(b) - f(a) \n.
$$

The $$ \sum $$ symbol has been replaced with $$ \int $$ to indicate
that we are now talking about a limiting process (or, if you will
accept some hand-waving, a sum of an "infinite" number of products).
And the $$ \approx $$ sign has been replaced with an $$ = $$ sign to
indicate that the limiting value of the summation as we add more and
more segments is *exactly* $$ f(b) - f(a) \n.$$ We may never get the
exact right answer when doing a real computation, but we can still say
exactly what our numbers are getting closer and closer to. Finally, $$
\Delta x $$ has been replaced with $$ dx $$ as a matter of convention.
A quantity starting with $$ d \n,$$ in integration, is called a
*differential*, and the $$ d $$ indicates that it is "infinitely
small" (or, more realistically, it is part of a limiting process that
makes it smaller and smaller without bound).

# Integrating exactly: the trick

The equation that we derived in the previous section,

$$
\int_{x=a}^{x=b} f'(x) \,dx = f(b) - f(a) \n,
$$

is called the *fundamental theorem of calculus*. Why is it
fundamental? Because instead of an approximation, we have an equality
-- and this allows us to find the exact value of any integral (more or
less).

Let's return to the problem of finding the area under a curve. We
previously said you could get an approximation of the area under the
curve $$ y = f(x) $$ by splitting it into tall, thin rectangles and
then evaluating the sum

$$
A \approx \sum_{x=a}^{x=b} f(x) \,\Delta x \n.
$$

As a reminder, it looks like this:

![Area approximated with rectangles](/assets/integration-graph-area-rectangles.png)

Let's now consider applying the same limiting process as we did in the
previous example (relating slope and displacement). If we split the
area under the curve into more (thinner) rectangles, we'll get a
better approximation. And the value of this approximation will get
closer and closer to the true area under the curve (we call that its
*limiting value*). So, using the same notation as before, we can say
that the exact area under the curve is given by

$$
A = \int_{x=a}^{x=b} f(x) \,dx \n,
$$

where $$ f(x) $$ is the height of each rectangle and $$ dx $$ is the
differential corresponding to the width of each rectangle.

But wait: this looks very similar to what we have above. In fact, it's
exactly the same as the left-hand side of the fundamental theorem of
calculus, except that we have $$ f(x) $$ instead of $$ f'(x) \n.$$

The trick is to rewrite the expression for the area under the curve so
that it looks like the fundamental theorem of calculus. In particular,
let's say that we can find some new function $$ F(x) $$ whose
*derivative* is $$ f(x) $$ -- in other words, $$ F'(x) = f(x) \n.$$
This would mean that

$$
A = \int_{x=a}^{x=b} F'(x) \,dx \n,
$$

and then the fundamental theorem of calculus would tell us that

$$
\int_{x=a}^{x=b} F'(x) \,dx = F(b) - F(a) \n.
$$

The function $$ F(x) $$ is called an *antiderivative* of $$ f(x) \n,$$
because it's the opposite of a derivative. (The derivative of an
antiderivative is just the function you started with.)

Because this is a pretty abstract bit of trickery (and because it is a
very *important* bit of trickery), we'll now spend some time looking
at examples and discussing the intuitive meaning of our results.

# Example: calculating the area of a triangle

Let's start simple. Shown below is a triangle, with base and height
equal to 1:

![Triangle](/assets/integration-triangle.png)

I've claimed that we can calculate the area under any curve using
integration and the fundamental theorem of calculus, so let's apply
that to the curve $$ y = x \n.$$ If you look at the area under $$ y =
x $$ from $$ x = 0 $$ to $$ x = 1 \n,$$ shaded in red on the figure
above, it forms a triangle with area

$$
\frac{1}{2} \cdot 1 \cdot 1 = \frac{1}{2} \n.
$$

Now in this case, we have $$ f(x) = x \n,$$ $$ a = 0 \n,$$ and $$ b =
1 \n,$$ so our area integral looks like:

$$
A = \int_{x=a}^{x=b} f(x) \,dx = \int_0^1 x \,dx \n.
$$

The interpretation is that we are splitting the area shaded in red
into many thin rectangles, and then considering the limiting process
as those rectangles become thinner and thinner.

![Triangle with rectangle identified](/assets/integration-triangle-rectangle.png)

As shown in the figure above, the quantity $$ x \,dx $$ which appears
inside the integral corresponds in a very direct way to the *area of a
rectangle*. The height is $$ x $$ and the width is $$ dx \n.$$ The
symbol $$ \int_0^1 $$ indicates that we should add up the areas of all
these rectangles (from $$ x = 0 $$ to $$x = 1 \n{).}$$

Now we can find a function whose derivative is equal to $$ f(x) \n,$$
i.e. some function $$ F(x) $$ such that $$ F'(x) = f(x) \n.$$ It just
so happens that we can use $$ F(x) = \frac{1}{2} x^2 $$ in this case,
since

$$
\frac{d}{dx} \left( \frac{1}{2} x^2 \right) = x \n.
$$

According to the fundamental theorem of calculus, we then have

$$
\int_0^1 x \,dx = F(1) - F(0) = \frac{1}{2} (1)^2 - \frac{1}{2} (0)^2
= \frac{1}{2} - 0 = \frac{1}{2} \n.
$$

So our result from integration agrees with basic geometry, which is
good. Let's discuss the intuition of our calculation. You might notice
that the expression $$ \frac{1}{2}x^2 $$ actually gives the area of
the red shaded triangle in the figure below:

![Triangle with accumulated area](/assets/integration-triangle-accumulation.png)

When $$ x = 1 \n,$$ we get the total area of $$ \frac{1}{2} \n.$$ But
we can view that final answer as the *accumulation* of the areas of
all the individual rectangles, starting at the left and moving to the
right. If we interrupt that accumulation at some point in between, we
get a picture like the one above. Imagine drawing rectangles over the
shaded area: we've added the areas of all the rectangles on the
left-hand side, but haven't included any on the right-hand side yet.

So we can view the antiderivative $$ \frac{1}{2}x^2 $$ as a function
that describes how the areas of rectangles with individual areas $$ x
\,dx $$ add up from left to right. Why is it an antiderivative? Let's
look at what happens when we take the derivative. Intuitively, the
derivative of this area accumulation function will reflect the rate at
which new area is added as we increase $$ x \n.$$ So, we can calculate
the derivative as:

$$
\frac{\text{change in area}}{\text{change in $x$}}
$$

As usual, we denote the change in $$ x $$ by the differential $$ dx
\n.$$ In the figure below, you can see that increasing $$ x $$ by some
amount $$ dx $$ will cause the area to increase by approximately a
small rectangle (the error in this approximation can be disregarded
since differentiation is a limiting process, and the approximation may
be made as precise as desired):

![Triangle area accumulation difference](/assets/integration-triangle-difference.png)

As we've already discussed, the area of such a rectangle is the
product of its height and width, $$ x \,dx \n.$$ Thus, the derivative
is

$$
\frac{x \,dx}{dx} = x = f(x) \n.
$$

So this tells us that when we take the derivative of our accumulation
function, we get back the function we started with. Given that the
accumulation function is the value of our integral, we have found that
differentiating "cancels out" integration in some sense. The formal
statement, which is a second form of the fundamental theorem of
calculus, is written like this:

$$
\frac{d}{dx} \int_{t=a}^{t=x} f(t) \,dt = f(x) \n.
$$

You may ask where all the $$ t \n{'s}$$ came from. It is because we
want to make a distinction between the *x*-coordinate of any arbitrary
rectangle (since we are dealing with *all* the rectangles that make up
the triangles above) and the *x*-coordinate of the specific rectangle
at the right-hand side. We use the variable *t* for the former, and
*x* for the latter. The use of $$ t $$ specifically isn't important.
It's just that we'd like to pick two different letters, to avoid
confusion.

... to be continued

{% endraw %}
