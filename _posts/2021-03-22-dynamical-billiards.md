---
layout: post
title:  Billiards on an elliptical table
date:   2021-03-22
published: true
excerpt_separator: <!--more-->
---
<!--more-->

**Epistemic status**: moderate confidence, exploratory.

*This was a project that I worked on in my final year of high school. Back then I knew next to nothing about dynamical systems theory, and I don't claim to know a lot about it now either, but one hopes that I've learnt something about it since starting university. The focus is on investigating the dynamics of idealised billiards on an elliptical table, starting from a circle and increasing the eccentricity.*

<br />

One way of defining an ellipse is in terms of two points, each of which is called a *focus* point. The ellipse is then the locus of all points such that the sum of the distances from these two foci is always a constant. You can visualise it like this: put a loop of string around pins located at the foci, then pull the string taut at one point using a pencil. If you then slide the pencil while keeping the string tight, then the shape that you get is an ellipse. 

![drawing-ellipses](https://images.squarespace-cdn.com/content/v1/553cf0fbe4b080029b4970d7/1430315032812-AU54XBN1OLL63JQU81EN/ke17ZwdGBToddI8pDm48kNOna8qFQZjTtF51_AT4fPh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmnhdptcuU1alwky_sWs380orDl0W6eyIWC7ENBy2Bpz1aUhVsZmvWoH3YOzDr0hB2/image-asset.jpeg)
*Image source: [Alex Through the Looking Glass](http://www.loop-the-game.com/snoop)*

# The reflective property of ellipses
What's so cool about this definition? One thing that I think it brings to the table is that it allows us to intuitively understand a curious property of ellipses. Suppose you want to play a game of billiards (or pool, or snooker, or whatever takes your fancy), but instead of playing on a rectangular table, you play it on an elliptical table. What happens if when you hit the billiard ball, it passes through one of the focus points of the elliptical table?

Regardless of the initial direction, after passing through one focus, the billiard ball reflects off the ellipse and passes through the other focus. 

![initial-path](/images/2021/billiards1_Initial.png)
*Suppose you hit a billiard ball at $$P_0$$, sending it through the focus point $$F_2$$ to $$P_1$$. What happens next?*

But why stop there? What happens after the ball bounces off the elliptical table a second time?

![second-time](/images/2021/billiards2_Reflect.png)

And again...

![third-time](/images/2021/billiards3_ReflectTwice.png)

Each time the ball passes through one of the foci, it reflects off the elliptical table and passes through the other focus. Let's take this further - what happens if we keep doing this?

![converge-to-horizontal](/images/2021/billiards4_ConvergeToAxis.png)

We can see that after many bounces, the trajectory of the ball converges to the horizontal. 

This poses the question: *why does this happen?* There are many ways to attack this problem, some of which are heftier than others (coordinate geometry!). If you're familiar with Fermat's principle of least time, then you can directly apply it here but with a billiard ball instead of light rays. In this case, we're trying to get from the focus $$F_2$$ to $$F_1$$, and we're subject to the constraint that the ball must also touch the elliptical table. But we know from the aforementioned definition of the ellipse that any such path must have exactly the same length! So this means that no matter the direction with which the billiard ball passes through $$F_2$$, any path that it takes to $$F_1$$ is a reflection, and so we get the reflective property of ellipses. 

# Caustic curves
Interestingly, what we get is an elliptical caustic curve that shares the same foci as the elliptical table, and so these are *confocal* ellipses. 

![confocal-ellipse](/images/2021/billiards5_ConfocalEllipse.png)

What if we change things slightly and have the ball initially pass between the two foci? In this case we get a confocal hyperbola, which is really interesting. 

![confocal-hyperbola](/images/2021/billiards6_Hyperbola.png)

Another interesting thing to note is that the caustic ellipse can be obtained via a *conformal* map (locally angle preserving). If the elliptical table has the equation

\begin{equation}
	\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1, 
\end{equation}
where $$a$$ and $$b$$ are the semi-major and semi-minor axes respectively. The the conformal caustic has equation

\begin{equation}
	\frac{x^2}{a^2 + \lambda} + \frac{y^2}{b^2 + \lambda} = 1,
\end{equation}
where $$\lambda$$ is a constant. When the denominator of the first term satisfies $$a^2 + \lambda > 0$$, then the caustic is an ellipse. If instead $$-b^2 < \lambda < -a^2$$, then it is a confocal hyperbola. 

If we play around with the eccentricity of the ellipse (by changing the positions of the foci), then we get the special case of the circle. In this case, we get a concentric circle as a caustic, as you might expect. 

![concentric-circle](/images/2021/billiards7_ConcentricCircle.png)

# Simulation and Resources
I've made a GeoGebra applet that shows this for 50 reflections in the ellipse, which you can play around with. You can find more information on my [GeoGebra page](https://www.geogebra.org/m/euzqtn5p) or in my [GitHub repository](https://github.com/spectroscopycafe/geogebra-scripts).

## GeoGebra
<iframe scrolling="no" title="Dynamical Billiards in an Ellipse" src="https://www.geogebra.org/material/iframe/id/zfbv39nj/width/750/height/550/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/true/sdz/false/ctl/false" width="800px" height="550px" style="border:0px;"> </iframe>

You can change the eccentricity of the ellipse, and also hide or show the caustic curve (in blue) to see how things change. The initial trajectory of the billiard ball is uniquely determined by the positions of $$P_0$$ and $$P_1$$. 

## Resources
There are also other situations that could be investigated, such as the high-symmetry case where the eccentricity becomes zero, and analysing periodic orbits using a group/number theoretic approach. If you're interested in finding out more, I recommend: 
- [Elliptical Pool Table](https://www.youtube.com/watch?v=4KHCuXN2F3I) (Numberphile video)
- The Birkhoff billiards page at [dynamical-systems.org](https://www.dynamical-systems.org/billiard/info.html)
- [Math 188r Dynamical systems](http://people.math.harvard.edu/~knill/teaching/math118/118_dynamicalsystems.pdf) lecture notes by Oliver Knill

---

