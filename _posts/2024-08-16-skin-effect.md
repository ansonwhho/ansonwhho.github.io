---
layout: post
title:  Microprocessors and the skin effect
date:   2024-08-16
published: true
excerpt_separator: <!--more-->
tags: physics research
author: Anson Ho
---
> Why isn't the skin effect a really big deal in CMOS microprocessors?
<!--more-->

About a year ago, I spent some time thinking about the [energy efficiency limits of modern computing hardware](https://epochai.org/blog/limits-to-the-energy-efficiency-of-cmos-microprocessors). Modern CMOS microprocessors perform irreversible operations, and so these processors fundamentally are fundamentally doomed to release energy when performing computations. But what exactly is the limit? Namely, what is the maximum number of oeprations we can perform on a CMOS microprocessor for every unit of energy?

The approach I ended up taking was to first identify the main sources of heat dissipation, and then estimate how far these could be reduced for each floating point operation using standard microelectronics theory. Doing this suggests that you can do at most around $3 \times 10^{14}$ FLOP at 16-bit precision, the details of which I'll leave to the blog post I've linked above. 

However, in the process of thinking about this question we came across a small puzzle. In particular, why don't we have to worry about the skin effect? If you have really high frequency alternating current in a wire, the current density tends to concentrate around the wire's surface, in some sense reducing the cross-sectional area for current flow and increasing the resistance. Although integrated circuits tend to be based on direct current, transistor switching frequencies can be on the order of 1 GHz to 10 GHz depending on the activity factor (e.g. see the [2022 IRDS executive summary](https://irds.ieee.org/images/files/pdf/2022/2022IRDS_ES.pdf)). With such high switching frequencies, one might therefore worry that this is an important source of heat dissipation that could undermine our estimate.

So how worried do we need to be about this? The thing we want to check is the skin "depth", which roughly measures how close the current ends up concentrating towards the surface of the wire. The greater the skin depth, the smaller the skin effect, and if the skin depth is larger than the wire at the frequencies of interest we really don't need to worry. 

To estimate the skin depth $\delta$, we use the following approximation[^1]: 

$$\delta = \sqrt{\frac{2}{\omega \mu \sigma}},$$

where $\omega = 2\pi f$ is the angular frequency in terms of frequency $f$, $\mu$ is the permeability of the conducting wire, and $\sigma$ is the conductivity of the wire ([Wheeler 1942](https://ieeexplore.ieee.org/document/1694542)). This approximation is valid when the switching frequencies are well below the plasma frequency of the material and far from the inverse of the mean free time of the material charge carriers. Since the plasma frequency is $10^{15}$ Hz ([Potter and Simmons 2021](https://www.sciencedirect.com/science/article/abs/pii/B9780128186428000041?via%3Dihub)) and the inverse of the mean free time is roughly $10^{13}$ for copper ([Gall 2016](https://pubs.aip.org/aip/jap/article/119/8/085101/143910/Electron-mean-free-path-in-elemental-metals)), we should be safe using this approximation at transistor switching frequencies. 

Now let's plug in some numbers. For copper interconnects, plausible values for the parameters are $f = 10^9$ Hz, $\mu = 4 \pi \times 10^{-7} \text{ Tm/A}$ ([Chung 2000](https://www.acsu.buffalo.edu/~ddlchung/Materials%20for%20electromagnetic%20interference%20shielding.pdf)), and $\sigma = 5.8 \times 10^7 \text{ S/m}$ ([Pan et al. 2022](https://pubs.aip.org/aip/adv/article/12/1/015310/2819395/Enhanced-electrical-conductivity-in-graphene)). This works out to a skin depth of around 2 $\mu$m, whereas interconnect widths are typically 1-2 OOM smaller than this length (e.g. see [Deschacht et al. 2010](https://ieeexplore.ieee.org/document/5746734), [Li et al. 2005](https://ieeexplore.ieee.org/document/1510919), [Agashiwala et al. 2021](https://ieeexplore.ieee.org/document/9385832), and [Manipatruni, Nikonov and Young 2018](https://www.nature.com/articles/s41567-018-0101-4)). Furthermore, since clock frequencies historically have been limited to below 10 GHz due to a "power wall" ([IRDS 2022](https://irds.ieee.org/images/files/pdf/2022/2022IRDS_ES.pdf)), the skin depth appears relatively unlikely to become substantially smaller in the future. 

If all this is right, it seems unlikely that the skin effect is that relevant of a concern in both modern and (near) future wire interconnects.

[^1]: You can derive this formula by applying Maxwell's equations to a conductor, and consider the boundary between the regions inside and outside the conductor (e.g. you can assume that half of 3D space (given by $z < 0$) is outside the conductor, and that the other half ($z > 0$) is inside).