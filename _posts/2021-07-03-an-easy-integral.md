---
layout: post
title:  An easy integral?
date:   2021-07-08
published: true
excerpt_separator: <!--more-->
---

*How physical understanding is invaluable in solving equations.*

<!--more-->

## Leveraging physical understanding
One thing that I've been interested in for some time is trying to understand solutions to complicated equations at an intuitive level. This is particularly relevant in physics because the equations that we encounter pertain to things in the natural world, and a good "understanding" of the equation necessitates a good grasp of the physical concepts. This is what [Paul Dirac](https://en.wikipedia.org/wiki/Paul_Dirac), one of the greatest physicists of the 20th century, had to say about understanding equations: 

> "I consider that I understand an equation when I can predict the properties of its solutions, without actually solving it."  
> [*Paul Dirac*](https://mathshistory.st-andrews.ac.uk/Biographies/Dirac/quotations/)

What could this mean? How is it possible to understand the properties of an equation's solutions without actually solving it? As a basic example of this, suppose I asked you to solve the following integral: 

<center>$I:= \int\limits_{0}^{\infty} \left( \frac{m}{2 \pi k_B T} \right)^{\frac{3}{2}} 4\pi v^2 e^{-\frac{mv^2}{2 k_B T}} \text{d}v$  </center>

If you don't recognise this integrand, a reasonable approach would be to just go ahead with some algebra. In fact, if you know a bit about [Gaussian integrals](https://en.wikipedia.org/wiki/Gaussian_integral), this isn't a particularly challenging problem. But before you demonstrate your finely-tuned integration skills, let's pause for a moment - with a bit of extra information about the system, we can use our physical intuition to determine the answer to this integral *without any calculation*. 

What this integrand is describing is a probability distribution of the speeds of particles in an ideal gas called the [Maxwell-Boltzmann distribution](https://en.wikipedia.org/wiki/Maxwell%E2%80%93Boltzmann_distribution) - $m$ describes the mass of the particles, $k_B$ is the [Boltzmann constant](https://en.wikipedia.org/wiki/Boltzmann_constant), $T$ is the temperature of the gas, and $v$ is the speed of each particle. Now the answer is obvious! The integral tells us the probability that each particle in the gas has *any* speed from 0 to $\infty$, [which is clearly 1](https://en.wikipedia.org/wiki/Probability_axioms#Second_axiom). Just to be sure, let's verify this - by setting $a = \sqrt{\frac{k_B T}{m}}$, the integral becomes

<center>$\int\limits_{0}^{\infty} \frac{1}{(2 \pi)^{3/2} \alpha^3} 4\pi v^2 e^{-\frac{v^2}{2 \alpha^2}} \text{d}v = -\frac{1}{\sqrt{2\pi} \alpha} \int\limits_{0}^{\infty} v \left( -\frac{v}{\alpha^2} e^{-\frac{v^2}{2\alpha^2}} \right) \text{d}v$.</center>

Now we can integrate by parts to get  

<center>$I = -\frac{1}{\sqrt{2\pi} \alpha}\left( v e^{-\frac{v^2}{2\alpha^2}} \bigr\rvert_{0}^{\infty} - \int\limits_{0}^{\infty} e^{-\frac{v^2}{2\alpha^2}} \text{d}v \right) = \frac{1}{\sqrt{2\pi} \alpha} \left(0 - \sqrt{2\pi \alpha^2} \right) = 1$,</center>

which is as we expected. With a touch of physical understanding we were able to get to the solution without actually solving it! The benefits of understanding what the equation describes don't just stop there - it also allows us to check whether or not the integrand itself makes sense in the first place. Essentially, the question is this: we've solved the integral and gotten a reasonable answer, but why should the probability distribution take this form? To answer this, let's break down the integrand $p(v)$:

<center>$ p(v) = \int\limits_{0}^{\infty} \left( \frac{m}{2 \pi k_B T} \right)^{\frac{3}{2}} 4\pi v^2 e^{-\frac{mv^2}{2 k_B T}} \text{d}v$.  </center>

The probability that a gas particle has a speed that lies within a particular range is found (as we saw) by integrating over the speeds. This depends on two key variables: 
- Particle mass $m$: intuitively we would expect that heavier particles should move slower than lighter particles.
- Temperature $T$: roughly this is an average measure of the speeds of the gas particles. If we increase the temperature, we'd expect that on average the each particle is more likely to move faster. 

If you try and compare your physical intuition with what the equation is showing, it can be quite difficult to tell exactly what the behaviour will be like. Even if you recognise that the exponential term dominates the function's behaviour at large speeds, *when* exactly it becomes the dominant contributor can be hard to discern. To try and get a better feel for this, let's take a look at the graph of this.

<iframe scrolling="no" title="Maxwell-Boltzmann Distribution" src="https://www.geogebra.org/material/iframe/id/vahaq49d/width/800/height/485/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/false/rc/false/ld/false/sdz/false/ctl/false" width="750px" height="485px" style="border:0px;"> </iframe>

If you increase the temperature then the peak of the distribution shifts to the right, meaning that the particles on average have a higher speed. You can try having a fiddle around with the controls in the GeoGebra applet and see if you can justify to yourself why this behaviour makes sense - for example, what happens if you increase the mass? Does this agree with what you expect?

From this simple example we can see that just a bit of extra knowledge can allow us to pull off neat "tricks", where we can solve integrals without actually solving them! More importantly, having a grasp of the physics gives an understanding of the situation that would allow us to make predictions about how the system should behave. We know that the particles on average should move faster, and seeing our intuitions confirmed using mathematics gives at least some idea that we're headed down the right track. 

## What's next?
Of course, even when we're armed with information about the system, knowing the properties of the solutions isn't always an easy thing to do! In general though, there are a few physics tricks that we can use to try and get an intuition for what the equations are telling us. In the next few posts in this series we'll explore what some of these tricks are, and how they can come in handy in when trying to get a better understanding of physics equations. 

Here are some of the things that we'll look at
- What lengths and dimensions can tell us about the colour of the sky
- How to check that your equations actually hold water
- Seeing through partial differential equations using symmetry arguments

Stay tuned!

---

