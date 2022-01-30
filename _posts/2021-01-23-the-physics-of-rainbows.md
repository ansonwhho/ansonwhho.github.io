---
layout: post
title:  The Physics of Rainbows
date:   2021-01-23
published: true
excerpt_separator: <!--more-->
usemathjax: true
tags: physics st-andrews simulations
author: Anson Ho
---

> A deep dive into three theories about the physics of rainbows, and illustrating the development of scientific theories over time. 

<!--more-->

**Epistemic status**: Confident, but probably with some mistakes. 

**Warning**: *This post is subject to major updates, and is not currently in its latest version.*

<br />

# Description
This simulation shows how a rainbow is formed from the perspective of geometric optics. Due to the wavelength dependence of refractive index, white light from the Sun disperses into a spectrum of colours. A single internal reflection forms what is known as the primary bow, whereas two internal reflections forms the secondary bow. Note that these are not total internal reflections, since this would imply that the light gets trapped in the drop forever!

The option is provided to show refraction out of the droplet at the 1st internal reflection point. This highlights the question of why the rainbow needs internal reflections to be formed, and can be understood in terms of maximum/minimum points. Specifically, one aims to find the stationary point of:

$$ D_k(i) = k(\pi - 2r) + 2(i - r) $$

Where $$D_k$$ is the angular deviation the an exiting ray after the $$k^{th}$$ internal reflection, $$i$$ is the angle of incidence, and $$r$$ is the angle of refraction. At such a stationary point, the change in angular deviation is small, leading to a higher concentration of rays exiting the drop at the angle in question and forming the rainbow. An analogous stationary point does not exist for light exiting the drop without any internal reflections, so there is no angular region of increased ray concentration due to these rays, i.e. no rainbow.

# The Simulation
## Assumptions
There are two key physical assumptions made:
1. **Raindrops are spherical**: This is a good assumption when raindrops are small since surface tension effects dominate over other deforming forces. It’s also quite helpful, because it makes the geometry and calculations a lot simpler! As the drops get larger, like closer to the bottom of a rainbow (since the drops have fallen further and are more likely to coalesce), they become more susceptible to air resistance. This causes the drops to flatten, with roughly circular horizontal cross sections but noncircular vertical ones, and is a key reason why the bottom of the rainbow is brighter than the top.
2. **Droplet size is irrelevant**: This is based on thinking of light as rays and builds on the previous assumption, given the symmetry of the drop. This means that we can apply simple rules of geometric optics (reflection and refraction) and makes the problem a lot more computationally manageable.

Given these assumptions, we can take advantage of the problem symmetry by saying that incident light is horizontal, and changing the vertical displacement (impact parameter) of the ray. An alternative formulation would be to define two parameters: the angle of incidence and angle of refraction, as in the equation above.

## Simulation
<iframe scrolling="no" title="Rainbows and Rays" src="https://www.geogebra.org/material/iframe/id/ywzfbqvp/width/742/height/646/border/888888/sfsb/true/smb/false/stb/false/stbh/false/ai/false/asb/false/sri/true/rc/false/ld/false/sdz/false/ctl/false" width="742px" height="646px" style="border:0px;"> </iframe>

## Controls
- **Horizontal axis** (*Not shown by default*): Horizontal line drawn through the centre of the drop.
- **Impact parameter** (*Set to 0.68 by default*): The vertical displacement of the incident ray from the horizontal axis, expressed as a decimal fraction of the drop radius (from 0 to 1 in magnitude). Negative values represent impingement on the bottom half of the drop.
- **Refractive index ($$n$$)** (*$$n = 1.33$$ by default*): The refractive index of the raindrop. For simplicity, the refractive index of air is taken to be 1.
- **Spread**: Used to help visualise the dispersion of light in the drop – in reality this effect is fairly small.
- **Secondary bow** (*Not shown by default*): Shows the rainbow that is formed after two internal reflections.
- **Refraction at 1st internal reflection point** (*Not shown by default*): Shows light that exits the drop without internal reflections – this is typically left out of diagrams because it doesn’t contribute to forming the rainbow, but I thought it would be instructive to see why this is the case.

It should be noted that this amount of spread may not necessarily be representative of a real rainbow, but is nevertheless useful as a visual aid. Note also that when the refractive index $$n$$ is set to 1, the simulation shows not white light (as it should) but still some dispersion.
