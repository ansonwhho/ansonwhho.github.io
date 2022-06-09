---
layout: post
title: "What role should evolutionary analogies play in understanding takeoff speeds?"
date:   2021-12-12
author: Anson Ho
published: True
excerpt_separator: <!--more-->
tags: AI-safety AI forecasting
---
> A deep dive into how evolutionary analogies are being used in arguments about takeoff speeds, and whether or not doing this is a good idea. 

<!--more-->

This post is also on [LessWrong](https://www.lesswrong.com/posts/teD4xjwoeWc4LyRAD/what-role-should-evolutionary-analogies-play-in) and the [EA Forum](https://forum.effectivealtruism.org/posts/aSDnzAm85a3Pi87rm/what-role-should-evolutionary-analogies-play-in).

*This is based on a research project that I’ve been working on under the supervision of Dr. Vael Gates. This work is funded by the Long-Term Future Fund. I would like to thank Vael Gates for their support and supervision, and Tilman Räuker for their valuable feedback.*

***Epistemic status**: exploratory, fairly high uncertainty. My background is in experimental physics, and I only have limited experience with biology or AI.*

*The motivation for this project was a question from* [*Technical AGI Safety Research Outside AI*](https://forum.effectivealtruism.org/posts/2e9NDGiXt8PjjbTMC/technical-agi-safety-research-outside-ai) *by Richard Ngo.*

> *What are the most compelling arguments for and against discontinuous versus continuous takeoffs? In particular, how should we think about the analogy from human evolution, and the scalability of intelligence with compute?*

*In short, it seems that many people are quite confused about the use of evolution as an analogy in forecasting AI takeoff speeds (if not, then I certainly am!) and I hope to clarify things through this post. In particular, I’m focusing mostly on “how should we think about the analogy from human evolution”, although I think this itself is a big enough question that I haven’t given a complete answer to it. I’ve made an effort to accurately represent existing arguments and stay up to date with new ones, but at the end of the day these are still my interpretations of them. Comments and feedback are very welcome, and all mistakes are my own.*

# Table of Contents

*   [**0 Overview**](#0-overview)
    *   [0.0 TL;DR](#00-tldr)
    *   [0.1 Introduction](#01-introduction)
    *   [0.2 Motivation](#02-motivation)
    *   [0.3 Definitions](#03-definitions)
        *   [0.3.1 Takeoff of what?](#031-takeoff-of-what)
        *   [0.3.2 Takeoff speeds](#032-takeoff-speeds)
        *   [0.3.3 Proxies](#033-proxies)
    *   [0.4 Some assumptions about evolution](#04-some-assumptions-about-evolution)
*   [**1 Evolutionary arguments for takeoff speeds**](#1-evolutionary-arguments-for-takeoff-speeds)
    *   [1.1 Hominid variation](#11-hominid-variation)
    *   [1.2 Changing selection pressures](#12-changing-selection-pressures)
    *   [1.3 Cumulative cultural evolution](#13-cumulative-cultural-evolution)
        *   [1.3.1 My opinions on this debate](#131-my-opinions-on-this-debate)
    *   [1.4 Brains and compute](#14-brains-and-compute)
        *   [1.4.1 Side note: Dog-level AI](#141-side-note-dog-level-ai)
    *   [1.5 Biological anchors](#15-biological-anchors)
    *   [1.6 One algorithm and Whole Brain Emulation](#16-one-algorithm-and-whole-brain-emulation)
    *   [1.7 Anthropic effects](#17-anthropic-effects)
    *   [1.8 Drivers of intelligence explosions](#18-drivers-of-intelligence-explosions)
    *   [1.9 Summary](#19-summary)
*   [**2 Evaluating analogies and disanalogies**](#2-evaluating-analogies-and-disanalogies)
    *   [2.1 A non-exhaustive list of analogies and disanalogies](#21-a-non-exhaustive-list-of-analogies-and-disanalogies)
        *   [Analogy: Timescales](#analogy-timescales)
        *   [Analogy: Necessary compute](#analogy-necessary-compute)
        *   [Analogy: Cumulative cultural evolution](#analogy-cumulative-cultural-evolution)
        *   [Analogy: Intelligence is non-hard](#analogy-intelligence-is-non-hard)
        *   [Analogy: Thresholds](#analogy-thresholds)
        *   [Analogy: Number of neurons](#analogy-number-of-neurons)
        *   [Analogy: Structure of the learning system](#analogy-structure-of-the-learning-system)
        *   [Disanalogy: Training environments](#disanalogy-training-environments)
        *   [Disanalogy: Optimisation objectives](#disanalogy-optimisation-objectives)
        *   [Disanalogy: Changing selection pressures](#disanalogy-changing-selection-pressures)
        *   [Disanalogy: Data constraints](#disanalogy-data-constraints)
        *   [Disanalogy: Energy costs](#disanalogy-energy-costs)
        *   [Disanalogy: Drivers of intelligence explosions](#disanalogy-drivers-of-intelligence-explosions)
    *   [2.2 Discussion](#22-discussion)
        *   [2.2.1 A possible framework: levels of analysis](#221-a-possible-framework-levels-of-analysis)
        *   [2.2.2 Should we use evolution as an analogy?](#222-should-we-use-evolution-as-an-analogy)
        *   [2.2.3 Relation to other arguments about takeoff speeds](#223-relation-to-other-arguments-about-takeoff-speeds)
    *   [2.3 Summary](#23-summary)
*   [**3 Further work**](#3-further-work)
    *   [3.1 Clarifying definitions](#31-clarifying-definitions)
        *   [3.1.1 Measures of growth](#311-measures-of-growth)
        *   [3.1.2 Miscellaneous](#312-miscellaneous)
    *   [3.2 Clarifying understanding](#32-clarifying-understanding)
*   [**4 Conclusions**](#4-conclusions)

# 0 Overview

## 0.0 TL;DR

*   People use evolution as both an analogy and a disanalogy in evolutionary arguments for TAI takeoff speeds
*   Many of these analogies and disanalogies are potentially quite weak and could be investigated further
*   We can think about these analogies and disanalogies in terms of a framework in three levels, based on [Steven Byrnes’ post](https://www.lesswrong.com/posts/pz7Mxyr7Ac43tWMaC/against-evolution-as-an-analogy-for-how-humans-will-create):

1.  the “outer algorithm” level: level of an algorithm that searches for an “inner algorithm”, like evolution
2.  the “inner algorithm” level: the level of the “human intelligence algorithm”
3.  effects level: analogies/disanalogies to the effects of the inner+outer algorithm

*   Many uncertainties remain, like how large of a role these analogies/disanalogies should play, and how we can define appropriate measures of growth for informed forecasts and AI governance
*   I think we should look a little more into the foundations of these analogies, e.g. evolution of modularity, macroevolution, threshold effects and traits, etc.

## 0.1 Introduction

Many arguments for [AI takeoff](https://www.lesswrong.com/tag/ai-takeoff) speeds are based on analogies to evolution. Given that evolution has given rise to general intelligence, this seems like a reasonable thing to do. But how far can we extend this analogy? What are the important analogies that make this a valid comparison, and where does the analogy break down? This seems like an important question to answer, especially if many of our forecasts are based on evolutionary priors.

In writing this post, I hope to get us a few steps closer to answering these questions. The [first section](#1_Evolutionary_arguments_for_takeoff_speeds) focuses on clarifying the current state of the debate around AI takeoff speeds - the most common arguments, and my personal thoughts.

The [second section](#2-evaluating-analogies-and-disanalogies) is a collection of what I think are the analogies and disanalogies between AI and evolution, in terms of takeoffs. These were compiled from posts and comments that I’ve seen on LessWrong, and some are based on my own impressions.

I believe that our current understanding of these topics is insufficient, and that more work is needed, either to steelman existing arguments or find better ones (see [0.2 Motivation](#02-motivation)). The [third section](#3-further-work) thus contains some suggestions for further research directions, with the caveat that I’m unsure about the importance of this area relative to other areas of AI safety. On the upside, it seems likely that these problems can be tackled by those without a technical background in AI.

0.2 Motivation
--------------

There are several reasons and motivations for why I decided to write this post. First, I’m worried that many evolution-based arguments about takeoff speeds might have flimsy premises, and I hope to increase discussion about this. I’ve also seen similar concerns echoed in [several](https://www.lesswrong.com/posts/pz7Mxyr7Ac43tWMaC/against-evolution-as-an-analogy-for-how-humans-will-create) [places](https://80000hours.org/podcast/episodes/ben-garfinkel-classic-ai-risk-arguments/). Second, the debate about takeoff speeds is spread over multiple blogs, papers, posts, and comments. One problem with the debate being so spread out is that different people are using different definitions for the same terms, and so I figured it might help to gather everything I could find in a single place.

I think there are also other reasons to believe that work understanding the connections between AI and evolution can be useful. For one, it can help improve our understanding of related questions, e.g. “How are AI takeoff scenarios likely to arise? How should we prepare for them? How much should we trust evolutionary priors in forecasts about TAI timelines?”

I also believe that we need stronger arguments before making political or research decisions. For instance, takeoffs that happen over multiple years could require [different strategic considerations](https://www.fhi.ox.ac.uk/strategic-considerations-about-different-speeds-of-ai-takeoff/), and your views on this topic could influence [which AI safety work you think is most important](https://www.lesswrong.com/posts/TATWqHvxKEpL34yKz/intelligence-or-evolution). [Ben Garfinkel also pointed out](https://80000hours.org/podcast/episodes/ben-garfinkel-classic-ai-risk-arguments/) that it can be risky to make large commitments on the basis of several blog posts, and I broadly agree with this.

0.3 Definitions
---------------

### 0.3.1 Takeoff of what?

If we’re looking at the question of AI takeoffs from a policy decision-making perspective, plausibly the main consideration should be the timelines for [transformative AI (TAI)](https://www.openphilanthropy.org/blog/some-background-our-views-regarding-advanced-artificial-intelligence#Sec1). Holden Karnofsky defines this as AI that is [“powerful enough to bring us into a new, qualitatively different future”](https://forum.effectivealtruism.org/posts/AmxxnazJcBWzWEeqj/forecasting-transformative-ai-what-kind-of-ai), and [operationalises this in several ways](https://www.openphilanthropy.org/blog/some-background-our-views-regarding-advanced-artificial-intelligence#Sec1) for specificity. When talking about AI takeoffs, what I therefore mean is “the time period leading up to TAI” under this definition.

I think this should be distinguished from [artificial general intelligence (AGI)](https://www.lesswrong.com/tag/artificial-general-intelligence), by which I mean an AI system that is able to exhibit intelligent behaviour in many domains. Contrast this to [“narrow intelligence”](https://www.lesswrong.com/tag/narrow-ai), which is only able to behave intelligently on a limited number of tasks, particularly in novel domains.[^1]

A lot of previous discussion about AI takeoffs has used AGI and TAI quite interchangeably - I think this is a reasonable position because general intelligence likely offers abilities like [the ability “to tackle entirely new domains”](https://www.lesswrong.com/tag/artificial-general-intelligence), thus making it plausible that an AGI would be transformative. However, I don’t want to rule out the possibility that TAI can arise with a fairly [“narrow” AI](https://www.lesswrong.com/tag/narrow-ai), so in this post I’m most interested in the takeoff of TAI, which may or may not necessarily be AGI. For the sake of clarity, I’ll try to mention whether I’m referring to TAI generally or AGI specifically.

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/fcc028b820a8688efc490d57c4572919a835b44262b6c464.png)

*Figure 1: Comparing continuous takeoff (left) and discontinuous takeoff (right). Here “progress” refers to some variable, say GDP, which we extrapolate to observe takeoff speed.*

### 0.3.2 Takeoff speeds

A more disputed definition is how to measure takeoff speeds - this was discussed more extensively by Matthew Barnett in [*Distinguishing definitions of takeoff*](https://www.lesswrong.com/posts/YgNYA6pj2hPSDQiTE/distinguishing-definitions-of-takeoff). The definition that I’ll use is based on the [discontinuous progress investigation](https://aiimpacts.org/discontinuous-progress-investigation/) by [AI Impacts](https://aiimpacts.org/), again based on decision-relevance.

*   **Continuous takeoff**: (the development of TAI) follows a trajectory that is in line with what one would have expected by extrapolating from past progress
*   **Discontinuous takeoff**: (the development of TAI) follows a trajectory that is very far above what one would have expected by extrapolation of past progress

I also like these definitions because it suggests some kind of a qualitative difference between before and after we reach TAI. Other definitions that are solely based on times like “fast takeoffs happen over several months, slow takeoffs happen over several years” to me sound somewhat arbitrary, but perhaps I’ve failed to consider something. As others have mentioned, calling takeoffs “fast” or “slow” can also be confusing because [“slow” takeoffs happen over several years, which is very fast to most people](https://80000hours.org/podcast/episodes/paul-christiano-ai-alignment-solutions/#ai-alignment).[^2] This raises the question of why the debate has mostly revolved around takeoffs that take “2 years vs 2 months”, rather than “20 years vs 2 years”.[^3]

### 0.3.3 Proxies

In practice, it can be quite hard to know what trajectory we should be paying attention to, and so operationalising the definitions of continuous and discontinuous takeoff can be challenging. One trajectory we could observe is the growth of world economic output, because it seems highly likely that a powerful AI would have large effects on economic productivity (especially if we’re comparing it to [technological development during the industrial revolution](https://ourworldindata.org/economic-growth)).

Even if we’re observing a quantitative measure of takeoff speed like economic output, it’s still hard to tell when exactly we’re satisfying the criteria for continuous takeoff - e.g. are we deviating from existing trends because of a discontinuity, or is this just random noise? One proxy that we can use to determine a discontinuity is one that Paul Christiano gives in [*Takeoff Speeds*](https://sideways-view.com/2018/02/24/takeoff-speeds/). Specifically, a continuous takeoff[^4] is a “complete 4 year interval in which world output doubles, before the first 1 year interval in which world output doubles.” This captures our rough intuition as to what we should see from a discontinuity - that the growth is fast relative to what we might ordinarily expect, based on the overall time that the drivers of the growth have been present.

While I think these definitions are broadly useful, I also believe that there are potentially some complications with these economic operationalisations of takeoff speeds. These are discussed a bit more in the section on [analogies and disanalogies](#2-evaluating-analogies-and-disanalogies) between AI and evolution.

0.4 Some assumptions about evolution
------------------------------------

I mentioned my concerns about the “analogy to evolution” being rather vague. Part of this is due to the “analogy” being sloppy, but I suspect this is also due to  “evolution” being a somewhat nebulous term. What exactly about evolution are we referring to? In the interests of concreteness, here are a few things about evolution that I’m assuming or relying upon for later parts of the post:

*   Evolution is myopic: In general, it’s very hard to discern global trends in evolution, or if there is a well-defined notion of “[evolutionary progress](https://en.wikipedia.org/wiki/Orthogenesis)”. Evolution is often [characterised as “blind”](https://www.lesswrong.com/posts/ZakKKbuqfcSoGvma9/link-how-hard-is-artificial-intelligence-the-evolutionary), and for the purposes of this post I think of evolution as a myopic search algorithm over possible organisms.
*   Evolution is optimising for [reproductive fitness](https://en.wikipedia.org/wiki/Fitness_(biology)).
*   Evolution led to the development of general intelligence: One possible dispute here is whether or not humans are “general” enough in their intelligence (see for example [François Chollet’s essay on intelligence explosion](https://medium.com/@francois.chollet/the-impossibility-of-intelligence-explosion-5be4a9eda6ec)), but following the definition from above, I definitely count humans as being generally intelligent.

My understanding is that these views are fairly widely held and that stronger claims about evolution could also be made, but I don’t wish to make too many assumptions that many people might disagree about. In listing out common arguments about evolution and takeoff speeds, some extra assumptions are made in each argument, but I’m *not* necessarily claiming that these assumptions are true (though some of them may well be true). Here is a non-exhaustive list of such assumptions:

*   Takeoff of human intelligence was continuous/discontinuous: for instance, Yudkowsky claims that the growth of human intelligence was discontinuous over evolutionary timescales (see [1.1 Hominid variation](#11-hominid-variation))
*   Evolution has a long-term goal.
*   Evolution has always been optimising for intelligence, or relative capabilities.

Evolution is often relatively inefficient *at optimising for a particular goal*, compared to other possible algorithms (for instance, it’s a lot more efficient to directly build a CNN, rather than evolve eyes to see and a [ventral visual cortex](https://en.wikipedia.org/wiki/Visual_cortex) to recognise objects)

1 Evolutionary arguments for takeoff speeds
===========================================

There have been quite a few arguments for takeoff speeds based on analogies to evolution. These arguments often follow the rough structure of:

1.  Evolution has property X
2.  AI takeoffs are sufficiently analogous to evolution
3.  Thus, AI takeoffs are likely to have a property similar to X

The focus of this section is to give an overview of arguments that (somewhat) follow this framework, and the next section tries to clarify where point 2 holds and where it breaks down. If there’s some argument that you think I’ve missed or poorly represented, please do leave a comment or [reach out to me](https://www.lesswrong.com/users/anson-ho) [personally](mailto:anson.ho.work@gmail.com). For the most part, I’ll not be commenting on whether these arguments make sense to me in this section.

*Note: I wrote the below before the* [*discussion between Yudkowsky and Christiano*](https://www.lesswrong.com/posts/vwLxd6hhFvPbvKmBH/yudkowsky-and-christiano-discuss-takeoff-speeds) *was posted onto LessWrong.*

1.1 Hominid variation
---------------------

The classic argument for AI takeoffs is sometimes known as the “[hominid variation](https://aiimpacts.org/likelihood-of-discontinuous-progress-around-the-development-of-agi/#Hominid_variation)” argument, an example of which is in Eliezer Yudkowsky’s post, [*Surprised by Brains*](https://www.lesswrong.com/posts/XQirei3crsLxsCQoi/surprised-by-brains). This argues that a continuous takeoff is more likely, by drawing analogies from the scaling of intelligence in humans.

The basic argument is that evolution caused discontinuous progress in intelligence while it was (instrumentally) optimising for it, and AI is likely to do the same. A very similar argument is given in [*Intelligence Explosion Economics*](http://intelligence.org/files/IEM.pdf), where Yudkowsky argues that cognitive investment (e.g. greater brain compute, improved cognitive algorithms - not necessarily intelligence directly) leads to increased marginal returns in fitness.

Here’s my attempt at breaking down this argument more carefully:

*   *Claim: Evolution induced discontinuous progress in “success”* *[^5]*
    *   Humans are vastly more successful than other hominids, because human intelligence is far superior
    *   On evolutionary timescales, humans and other hominids are very close together
    *   Evolution was optimising for intelligence (*instrumentally*, while it was optimising for fitness) throughout evolutionary history
    *   Intelligence is a key factor in the relative “success” of humans, as compared to other hominids
    *   Conclusion: Evolution must have induced discontinuous progress in intelligence
*   *Claim: Hence, scaling of AI is likely to be discontinuous*
    *   Evolution must have induced discontinuous progress in intelligence
    *   Intelligence scaling in AI is sufficiently similar to intelligence scaling in evolution
    *   Conclusion: Intelligence scaling in AI is likely to be discontinuous

1.2 Changing selection pressures
--------------------------------

One notable response to the hominid variation argument is given by Paul Christiano, in [*Arguments about fast takeoff*](https://www.lesswrong.com/posts/AfGmsjGPXN97kNp57/arguments-about-fast-takeoff). My current understanding of the argument is that it boils down to two main disagreements:

*   While it's true that humans are vastly more successful than other hominids, *it’s not clear that this is because our intelligence is far superior*
*   Evolution wasn’t optimising for intelligence for all of evolutionary history; the selection pressures from evolution are constantly changing, and the [selection pressure](https://en.wikipedia.org/wiki/Evolutionary_pressure) for intelligence was weak until very recently

To visualise this, consider the graph of intelligence growth starting from the point when the selection pressures were in the direction of increased intelligence, then the growth was actually continuous. Thus it was a *change in selection pressures that caused a seemingly discontinuous takeoff* (over evolutionary timescales), as opposed to evolution stumbling upon some “[secret sauce](https://wiki.issarice.com/wiki/Secret_sauce_for_intelligence)” or crossing some [intelligence threshold](https://www.lesswrong.com/posts/tjH8XPxAnr6JRbh7k/hard-takeoff).

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/c6597f7f68eb4f49bf6111e72a6d7159d70abdd693c3d58f.png)

*Figure 2: The hominid variation argument is based on the observation that humans and chimpanzees are very close together in evolutionary time (near the far right of the left graph), but humans are significantly more intelligent. The premise is that evolution was instrumentally optimising for intelligence since the start of evolutionary history*  *[^6], and that it was only recently that intelligence suddenly spiked. The graph on the right represents the changing selection pressures view - since evolution wasn’t optimising for intelligence until very recently, if we “zoom in”* *[^7]* *on this recent portion of the graph then it looks continuous* *.[^8]*

If evolution had been optimising for human-like success, then the takeoff would have appeared continuous even on longer timescales. Finally, Christiano argues that a similar “changing selection pressures” effect isn’t going to happen in AI, because humans are always going to be optimising AI systems for their usefulness.

1.3 Cumulative cultural evolution
---------------------------------

This argument is proposed by calebo in [*Musings on Cumulative Cultural Evolution and AI*](https://www.lesswrong.com/posts/K686EFdXysfRBdob2/musings-on-cumulative-cultural-evolution-and-ai), and can be thought of as pushback against the “changing selection pressures” argument discussed earlier. One of the main counterarguments given by Christiano was the possibility that the relative evolutionary success of humans was not due to intelligence.

The cumulative cultural evolution argument pushes back against this by referring to a [conceptual model of human social learning](https://journals.plos.org/ploscompbiol/article/file?id=10.1371/journal.pcbi.1006504&type=printable). A highly simplified view of this says that the right mixture of social and asocial learning is necessary for fast development. Before that, we may get into an “[overhang](https://80000hours.org/podcast/episodes/allan-dafoe-politics-of-ai/)”, e.g. where we have undergone a large amount of asocial learning, such that when we start doing social learning, development happens very quickly. The argument implies that we might need to consider a similar possibility in the development of TAI, and suggests an update towards a discontinuous takeoff.

### 1.3.1 My opinions on this debate

I think this argument raises quite a few additional questions, some of which I suspect already have answers but I’m unaware of:

*   What evidence is there that the increase in human intelligence was due to changing selection pressures?
*   If the sudden growth in human intelligence (relative to all of evolutionary history) was indeed due to changing selection pressures, when exactly did these selection pressures change? What is the evidence for this?
*   In evolutionary history, to what extent did human capabilities increase because of increased individual *intelligence*, as opposed to other reasons?
*   It seems that the analogous property of “fitness” is “usefulness”, in the sense that this is what both the evolutionary and AI algorithms are optimising for respectively. What then is the analogous property of “selection pressures”? Couldn’t it also be the case that optimising for usefulness also leads to some change in the equivalent of “selection pressures” in AI?

My personal impression is that this debate can’t be settled without the above questions being answered, because they are quite fundamental to the aforementioned arguments.

1.4 Brains and compute
----------------------

This argument from evolution is somewhat different from the hominid variation argument because it involves a quantitative comparison to what evolution was able to achieve with brains (albeit a very rough comparison). This works by asking the question, “how much was the brain able to do with X compute?”, then using the answer to this to answer, “how much do we expect AI systems to be able to do with Y compute?”.

An example of this is given by Scott Alexander in [*Neurons and Intelligence: A Birdbrained Perspective*](https://slatestarcodex.com/2019/03/25/neurons-and-intelligence-a-birdbrained-perspective/), and another investigation by [AI Impacts](https://aiimpacts.org/investigation-into-the-relationship-between-neuron-count-and-intelligence-across-differing-cortical-architectures/). If we look into our evolutionary history we observe a kind of “intelligence ladder”. [On the 80k podcast](https://80000hours.org/podcast/episodes/paul-christiano-ai-alignment-solutions/#ai-alignment), Paul Christiano describes it this way (emphasis mine):

> “A better way to compare \[the abilities of AI relative to humans\] is to look at what evolution was able to do with varying amounts of compute. If you look at what each order of magnitude buys you in nature, you’re going from insects to small fish to lizards to rats to crows to primates to humans. Each of those is one order of magnitude, *roughly…*”

This argument thus gives a rough prior for what we might expect from the continued development of advanced AI systems.

<table style="border-style:solid"><tbody><tr><td style="border-color:hsl(0, 0%, 0%);border-style:solid;text-align:center;width:200px"><strong>Neuron count</strong></td><td style="border-color:hsl(0, 0%, 0%);border-style:solid;text-align:center"><strong>Organism</strong></td><td style="border-color:hsl(0, 0%, 0%);border-style:solid;text-align:center"><strong>Capabilities</strong></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top;width:30px">0</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top">Sponge</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top" rowspan="13"><p><br><br>&nbsp;</p><p><a href="https://pubmed.ncbi.nlm.nih.gov/20540961/"><u>Limited sensory response</u></a></p><p><br><br><br><br>&nbsp;</p><p><a href="https://www.sciencedirect.com/science/article/pii/S0262407912630206?casa_token=pu_gdArzTRUAAAAA:EeGypSzqqvB6fWGpArY1TVkz6PumxHWijoT0IjXs_wOdTB86WQJj5TtHPA3gB3vtDYqUHxQ7nw"><u>Basic memory and understanding</u></a></p><p><br><br><br><br>&nbsp;</p><p><a href="https://www.jstor.org/stable/pdf/24931751.pdf?casa_token=H55rNQE1GIMAAAAA:LbYPbNRQaISIwbFbdomikTIdWIlJzrMAXx8oePfDh8BP_WL639lRslUcuCukqxCZgyiyo7JfGNANyWFqliA43iypPSiE6nSakXnpDxRj_MtYmjRLxuc"><u>Logical reasoning,&nbsp;</u></a></p><p><a href="https://www.jstor.org/stable/pdf/24931751.pdf?casa_token=H55rNQE1GIMAAAAA:LbYPbNRQaISIwbFbdomikTIdWIlJzrMAXx8oePfDh8BP_WL639lRslUcuCukqxCZgyiyo7JfGNANyWFqliA43iypPSiE6nSakXnpDxRj_MtYmjRLxuc"><u>improved memory, etc.</u></a></p><p><br><br><br><br>&nbsp;</p><p><a href="https://onlinelibrary.wiley.com/doi/abs/10.1002/ajp.1350020302"><u>Self awareness</u></a></p><p><br>&nbsp;</p><p><a href="https://www.sciencedirect.com/topics/neuroscience/theory-of-mind"><u>Theory of mind</u></a>, <a href="https://link.springer.com/content/pdf/10.1007/s10339-010-0362-z.pdf"><u>complex reasoning</u></a>, etc.</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top;width:30px">231</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><i>C. elegans</i></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top;width:30px">$\sim$5 x 10<sup>3</sup></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top">Jellyfish</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top;width:30px">10<sup>4</sup></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top">Leech</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top;width:30px">2.5 x 10<sup>5</sup></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top">Ants</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top;width:30px">10<sup>6</sup>&nbsp;</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top">Honeybee</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top;width:30px">1.6 x 10<sup>7</sup></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top">Frog</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top;width:30px">1.31 x 10<sup>8</sup></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top">Star-nosed mole</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top;width:30px">3.10 x 10<sup>8</sup></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top">Pigeon</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top;width:30px">2.25 x 10<sup>9</sup></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top">Dog</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top;width:30px">9.6 x 10<sup>9</sup></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top">Brown bear</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top;width:30px">2.8 x 10<sup>10</sup></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top">Chimpanzee</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top;width:30px">8.6 x 10<sup>10</sup> (<a href="https://www.nature.com/articles/d41586-019-02208-0"><u>10</u><sup><u>15</u></sup><u> connections</u></a>)</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top">Humans</td></tr></tbody></table>

*Table 1: Using neuron count[^9][^10] as a rough prior for the capabilities of agents, by comparing with organisms with different levels of intelligence. The capabilities column is very high in uncertainty and should be taken with a grain of salt. Note that compared to $10^{15}$ neuronal connections in the human brain, state of the art ML systems have used up to [$10^{13}$ parameters](https://docs.google.com/spreadsheets/d/1AAIebjNsnJj_uKALHbXNfn3_YsT6sHXtCU0q7OIPuc4/edit?usp=sharing).*

Scott Alexander also further states that we should expect abilities to “scale linearly-ish with available computing power”, which is especially alarming given [current compute trends](https://www.lesswrong.com/posts/GzoWcYibWYwJva8aL/parameter-counts-in-machine-learning), and if [the scaling hypothesis](https://www.gwern.net/Scaling-hypothesis) is true. Looking at the intelligence ladder also suggests that we [compare typical human performance with technologies relative to things found in biology or evolution](https://docs.google.com/document/d/1HUtUBpRbNnnWBxiO2bz3LumEsQcaZioAPZDNcsWPnos/edit). Moreover, similar arguments can be made by drawing comparisons with the energy efficiency of the brain, rather than their overall capabilities (e.g. because this is more measurable).

I think there’s a tremendous amount of uncertainty in what exactly should go into the rightmost column of table 1, and that one could raise many questions about it. For instance, “to what extent are these capabilities due to intelligence, rather than other factors?” Another question might be whether the listed organisms might exhibit different behaviours in environments that differ from their natural habitat. This raises an issue of differences between observed behaviours and actual capabilities “out of distribution”. For this reason I’ve mostly only listed very vague capabilities that I think are reasonably likely to generalise to different living environments.

One could also claim that neuron counts are just the wrong approach altogether – for instance, Table 1 doesn’t include “African Elephant”, with $2.5 \times 10^{11}$ neurons below humans, but most would agree that humans are smarter than elephants. This raises the question of how much trust we should place in this analogy.

These arguments don’t explicitly argue for whether takeoff is likely to be continuous or discontinuous; they instead provide a prior for what we should expect in the case of AI.

### 1.4.1 Side note: Dog-level AI

In the introduction, I mentioned that I didn’t want to rule out the possibility of TAI arising from sub-superintelligence, or perhaps even a fairly narrow intelligence. One way to frame this is to compare things with “human-level AI”, for instance by talking about a “dog-level AI”. But what does a “dog-level AI” actually mean? In the [*2018/19 Overview of Technical AI Alignment*](https://futureoflife.org/2020/04/15/an-overview-of-technical-ai-alignment-in-2018-and-2019-with-buck-shlegeris-and-rohin-shah/) episode on the AI Alignment Podcast, Rohin Shah and Buck Shlegeris define this to mean “a neural net that if put in a dog’s body replacing its brain would do about as well as a dog”. They point out that such a system could plausibly become superhuman at many things in other environments - I think this suggests that the capabilities in table 1 are not upper bounds by any means, and potentially might say very little about how powerful “dog-level” systems actually are. So these capabilities really should be taken with a grain of salt!

1.5 Biological anchors
----------------------

A close relative of the previous argument is to look at the total compute done over evolution and to use this as a prior. The best example of this is probably Ajeya Cotra’s [*Draft report on AI timelines*](https://drive.google.com/drive/u/0/folders/15ArhEPZSTYU8f012bs6ehPS6-xmhtBPP), which uses biological features (“anchors”) to develop a quantitative forecast of TAI timelines. This report wasn’t looking at AI takeoff *speeds* specifically, but I still think that this analogy is an important one.

The forecast uses six biological anchors, and the one that we’re most interested in is the **evolution anchor**, describing the total compute over evolution from earliest animals to modern humans. With this anchor, we’re treating all of evolution as a single overarching algorithm, and asking how much compute it has taken to get to human-level intelligence.[^12] Cotra gives a value of about $10^41$ [floating point operations (FLOPs)](https://en.wikipedia.org/wiki/FLOPS) for this, a number derived from Joseph Carlsmith’s report, [*How Much Computational Power Does It Take to Match the Human Brain?*](https://www.openphilanthropy.org/brain-computation-report)*.* Cotra assigns 10% weight to the evolution anchor in the resulting forecast.

Another intuition we might have is that evolution has done a significant amount of “pretraining” via neural architecture search, yielding the biological neural networks (i.e. our brains) that we’re familiar with today. Given that humans have hand-engineered artificial neural network architectures like RNNs, we might expect that the appropriate benchmark is the amount of compute required to “train” a person’s brain over the course of their lifetime. This describes the **lifetime anchor**, which predicts $10^{24}$ FLOPs to reach TAI. Cotra discusses this in much more detail in the report, including why this anchor seems quite unlikely to be correct. As of December 2021, the most computationally expensive systems require around [$10^24$ FLOPs for the final training run](https://www.microsoft.com/en-us/research/blog/using-deepspeed-and-megatron-to-train-megatron-turing-nlg-530b-the-worlds-largest-and-most-powerful-generative-language-model/) (see the [*Parameter, Compute and Data Trends in Machine Learning*](https://docs.google.com/spreadsheets/d/1AAIebjNsnJj_uKALHbXNfn3_YsT6sHXtCU0q7OIPuc4/edit#gid=0) project for more details on compute calculations).

We can think of the evolution anchor as an [upper bound](https://forum.effectivealtruism.org/posts/ajBYeiggAzu6Cgb3o/biological-anchors-is-about-bounding-not-pinpointing-ai) for how much compute we would need to reach TAI. Given that evolution is myopic and inefficient (e.g. for yielding intelligence), and it was able to yield general intelligence despite this, then it seems extraordinarily likely that we’ll reach AGI with the same amount of compute as over all of evolution - especially if our algorithms are more efficient. If we accept the results of the report as being broadly accurate, then we get a very rough lower bound for how slow a takeoff can be before reaching TAI. I think that a better understanding of these anchors plausibly leads to better understanding of the ways in which we might build AGI.

Of course, one could reasonably worry that the results are severe overestimates (or at least the upper bounds are so high that they aren’t helpful), see for instance [Yudkowsky’s critique of the report](https://www.lesswrong.com/posts/ax695frGJEzGxFBK4/biology-inspired-agi-timelines-the-trick-that-never-works).

1.6 One algorithm and Whole Brain Emulation
-------------------------------------------

Another argument that one could make is that intelligence is generally described using a single simple algorithm. In such a scenario, stumbling across this algorithm could lead to a sharp discontinuity in progress.

My impression is that the main sources of disagreement about this argument are:

1.  Whether or not such a simple algorithm exists
2.  Whether or not we would be able to find such an algorithm if it does exist

One reason to suppose that such an algorithm exists is to use evolution as a proof of concept (i.e. “Evolution was able to do this, so why shouldn’t we be able to?”). If evolution led to human intelligence through a [myopic search process](https://www.lesswrong.com/posts/ZyNak8F6WXjuEbWWc/the-wonder-of-evolution) that aims to optimise for fitness, then it surely must not be that hard to stumble upon this algorithm in AI research.

In particular, if humans are able to [emulate human brains](https://www.lesswrong.com/tag/whole-brain-emulation) sufficiently well, then whole brain emulation (WBE) would provide a relatively clear pathway to [yielding general intelligence](https://www.lesswrong.com/tag/emulation-argument-for-human-level-ai). This plausibly makes a discontinuous takeoff more likely, although whether or not this happens depends on how easy brain emulation actually is. A key hypothesis that a lot of WBE hinges on is that we don’t need to “understand” the brain in order to emulate it, potentially making the task significantly easier (see for instance page 8 of [*Whole Brain Emulation: A Roadmap*](http://www.fhi.ox.ac.uk/Reports/2008-3.pdf)). Such a system may be more intelligent than existing systems for several hardware-related reasons (e.g. due to much faster computational speed, see Table 2), but fundamentally still operates in the same fashion. We might thus expect a system built via WBE to be limited in how “superintelligent” it may be.

1.7 Anthropic effects
---------------------

One reason to be skeptical about the “one algorithm” argument is that observer-selection effects may conceal the difficulty in discovering an “algorithm for intelligence”.

Suppose there is a universe where finding this “intelligence algorithm” is very hard, and evolution was unsuccessful in discovering it. In this case, there would tautologically be no observer around to make the observation that “finding intelligence is very hard”. At the same time, in a universe where finding the intelligence algorithm is very hard but evolution successfully stumbled upon it, the observers would conclude that “the intelligence algorithm can’t be that hard to find, because even blind evolution was able to happen upon it”. The takeaway is that an observer sees intelligent life arise on their planet \*regardless of how hard it is to find an algorithm for intelligence. \*

This argument is described in more detail in Shulman and Bostrom’s [*How Hard is Artificial Intelligence? Evolutionary Arguments and Selection Effects*](https://nickbostrom.com/aievolution.pdf). Importantly, the authors also consider how different theories of observation-selection effects can be used to counter this objection to the “one algorithm” argument. This relies on (definitions from the LW wiki):

*   The [Self-Sampling Assumption (SSA)](https://www.lesswrong.com/tag/self-sampling-assumption)**:** “all other things equal, an observer should reason as if they are randomly selected from the set of all *actually existent* observers (past, present and future) in their reference class”.
*   The [Self-Indication Assumption (SIA)](https://www.lesswrong.com/tag/self-indication-assumption): “all other things equal, an observer should reason as if they are randomly selected from the set of all *possible* observers”.

The SIA strongly favours universes where there are more observers with experiences indistinguishable from ours. It thus implies that we should place more credence in universes where intelligence is “not hard” to come by, as compared to universes where intelligence is hard, in favour of the “one algorithm” argument.[^13]

At the same time, evidence from [convergent evolution](https://en.wikipedia.org/wiki/Convergent_evolution) (the independent evolution of similar features in different taxa) is less susceptible to anthropic effects from the SSA. Thus in a universe like ours where multiple independent lineages lead to complex learning and memory (or other signs of intelligence), we can infer that discovering an intelligence algorithm is boundedly hard.[^14]

Thus depending on which framework of anthropic reasoning you use (based on SSA and SIA), Shulman and Bostrom argue that the “one algorithm” argument is still plausible, despite observer-selection effects.

1.8 Drivers of intelligence explosions
--------------------------------------

The arguments in this section are in favour of discontinuous takeoff, and are mostly *dis*analogies to things that happen in evolution (more on this in [section 2](#2-evaluating-analogies-and-disanalogies)). In particular, they are of the form:

*   Evolution has a certain property X
*   But AI has \[or more powerful AI systems would have\] a property Y that drives intelligence growth *much* faster than it did in evolution
*   Thus we should expect a discontinuous takeoff (or even an [intelligence explosion](https://www.lesswrong.com/tag/intelligence-explosion))

I’ve collected a list of such arguments in Table 2 - these are mostly arguments first popularised around the time when *Superintelligence* was published or earlier.

<table><tbody><tr><td style="border-color:hsl(0, 0%, 0%);border-style:solid;text-align:center"><strong>Evolution</strong></td><td style="border-color:hsl(0, 0%, 0%);border-style:solid;text-align:center"><strong>AI</strong></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Generally cannot duplicate intelligent agents exactly nor quickly</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Easy duplication (and orders of magnitude faster), much less computationally expensive than training from scratch</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Rate of compute is partially constrained by speed of neural signals</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Electric signals can be transmitted millions of times faster than in biological neurons</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Serial depth of the human brain is limited to about 100 steps (see <a href="https://onlinelibrary.wiley.com/doi/pdf/10.1207/s15516709cog0603_1"><i><u>Connectionist Models and Their Properties</u></i></a>)</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Powerful AI systems could handle much more compute without parallelisation</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Neural network size is constrained by biological properties, like skull size</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">AI models could get much larger and there is nothing in principle that stops artificial neural networks from being significantly larger than say human brains</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Cannot “modify source code” very easily (whether of oneself or another organism)</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Recursive improvement could lead to a feedback loop that speeds up growth</td></tr></tbody></table>

*Table 2: (Non-exhaustive) Comparing proposed drivers of intelligence growth in evolution and AI - the disanalogous properties of the drivers between evolution and AI are used to argue for a discontinuous takeoff, or even an intelligence explosion.*

More discussion of this can be found in [*AGI Safety from first principles: Superintelligence*](https://www.lesswrong.com/s/mzgtmmTKKn5MuCzFJ/p/eG3WhHS8CLNxuH6rT), and in [*Plenty of Room Above Us*](https://intelligenceexplosion.com/2011/plenty-of-room-above-us/).

1.9 Summary
-----------

In this section I discussed a few of what I think are the most prominent arguments relating to takeoff speeds, that draw an analogy to evolution. I suspect that I’ve missed some arguments, but as far as I’m aware the ones listed have been the most prominent over the past few years.

2 Evaluating analogies and disanalogies
=======================================

The first part of this section gives a big list of analogies and disanalogies, and the second considers plausible frameworks for thinking about them. I attempt to relate these analogies to the arguments from [section 1](#1-evolutionary-arguments-for-takeoff-speeds), and also try to draw some preliminary conclusions.

Some posts like [*Against evolution as an analogy for how humans will create AGI*](https://www.lesswrong.com/posts/pz7Mxyr7Ac43tWMaC/against-evolution-as-an-analogy-for-how-humans-will-create) lay out reasons for why using evolution as an analogy can be problematic from the perspective of neuroscience. In this post I’ll be taking a different approach - I’m hoping to facilitate discussions that clarify existing arguments, rather than to push a particular point of view about whether or not evolution is a good analogy.

By “analogy” I’m referring mostly to the definition of analogy in [Daniel Kokotajlo’s post on “outside views”](https://www.lesswrong.com/posts/BcYfsi7vmhDvzQGiF/taboo-outside-view). I don’t think any of the arguments from the previous section are rigorous enough to make them reference class forecasts.

There are several different kinds of “analogies to evolution”:

*   Analogies about the plausibility of TAI development
*   Analogies about how AGI might be built
*   Analogies about when AGI might arrive
*   Analogies about the influence of TAI

2.1 A non-exhaustive list of analogies and disanalogies
-------------------------------------------------------

For each of these, I’ve characterised them as either an analogy or a disanalogy. I think it’s very likely that people will disagree with my classification, and that I’ll change my mind with more information. I’ve given each of these categorisations a certainty score that reflects my confidence in whether something is an analogy or a disanalogy (the higher the score, the more certain I am with the classification). I’d love to hear examples that support or contradict the claims here, or suggestions for further analogies/disanalogies.

The approach that I’ve taken is to go for breadth rather than depth - so I’ve also included some comparisons that I think are quite weak but are things that one “might want to consider”, or analogies that people have made in the past. I hope that this will serve as a useful preliminary outline of the analogies and disanalogies that can be better formalised in further work.

### Analogy: Timescales

*Certainty score: 4/5*

*Example(s)*: [*Surprised by Brains*](https://www.lesswrong.com/posts/XQirei3crsLxsCQoi/surprised-by-brains)

According to this analogy, over evolutionary timescales, the development of human level intelligence was dramatically fast. If we compare this with the timescales of AI development, we should expect something similar (i.e. a discontinuous takeoff).

I think you can split these analogies to timescales into two types:

1.  Analogies to *intelligence* scaling in evolution
2.  Analogies to *capability* scaling in evolution

This class of analogies looks at how intelligence scaled in evolution, to say something about how intelligence will scale in AI. One example of this type of analogy is the [hominid variation argument in section 1.1](#11-hominid-variation).

These analogies often come with a hidden implication of “if intelligence scales in a particular way, AI development is also likely to scale this way on some measure of capability (e.g. GDP)”. This is a crucial (and I think very plausible) assumption - as mentioned previously, from a decision-making perspective what we’re interested in is the *effects* of such a system. So although these analogies have the benefit of being relatively direct (because we’re comparing a directly analogous quantity in evolution and AI, namely intelligence), we also run into the problem of “intelligence” being nebulous and hard to measure. Furthermore, it can be hard to tell how exactly this translates into societal impacts.

I use quite a different definition of “analogy” compared to Steven Byrnes in [*Against evolution as an analogy for how humans will create AGI*](https://www.lesswrong.com/posts/pz7Mxyr7Ac43tWMaC/against-evolution-as-an-analogy-for-how-humans-will-create) \- this refers to something specific and satisfies three key properties, which I’ll not describe here. I’m not sure that many existing arguments from evolution fit the definition of “analogy” that Byrnes uses - instead I just count anything that draws any kind of similarity to the development of capabilities or intelligence in evolution as an “analogy”. Granted, this is quite vague, but I think this is sufficient because the goal of this post is more to gather arguments that relate to evolution, rather than argue a particular point.

Byrnes instead argues against what I would consider to be one particular analogy for the development of AGI, where an “outer algorithm” (e.g. evolution) does the majority of the work in improving an “inner algorithm” (e.g. the algorithm in the human brain - i.e. the AGI itself).

The second class of analogies is separated for precisely this reason - there can be a difference between the effects of scaling intelligence, and the general scaling of capabilities (for example, see the [changing selection pressures argument](#12-changing-selection-pressures)). This looks at how *capabilities* scaled in evolution, to say something about how capabilities will scale in AI.

This is less direct of an analogy because it’s more ambiguous what exactly it is we’re comparing; having much greater capabilities than your competitors can mean very different things in an evolutionary environment and in the modern world today.

Possible weaknesses:

*   Why should it be valid to make such a comparison? What is the justification for the internal working mechanisms being sufficiently similar? (Or if they are importantly different, how?)

### Analogy: Necessary compute

*Certainty score: 4/5*

*Example(s)*: Ajeya Cotra’s [*Draft Report on AI timelines*](https://www.lesswrong.com/posts/KrJfoZzpSDpnrv9va/draft-report-on-ai-timelines), section on Brains and Compute

(See [*1.5 Biological anchors*](#15-biological-anchors) for more details.)

This is a direct analogy to the amount of compute required for intelligence to arise in evolution. It informs possible quantitative priors that we can use in forecasts for AI takeoff scenarios, and are arguably most informative as providing upper bounds for when to expect TAI (and thus lower bounds for how slow a continuous takeoff can be).

Possible weaknesses with this analogy include:

*   It’s not clear what numbers we should be comparing with: How should we compare brain FLOPs and computer FLOPs? What measures should we use, if neuron counts are sufficient to characterise intelligence?
*   It’s not clear how useful the bounds provided by this analogy are: one could argue that they significantly overestimate how long it would take to reach TAI - e.g. due to major [paradigmatic changes in AI research](http://www.foldl.me/2018/conceptual-issues-ai-safety-paradigmatic-gap/#potential-paradigmatic-changes-in-ai)

### Analogy: Cumulative cultural evolution

*Certainty score: 3/5*

*Example(s)*: [*Musings on Cumulative Cultural Evolution and AI*](https://www.lesswrong.com/posts/K686EFdXysfRBdob2/musings-on-cumulative-cultural-evolution-and-ai)

(See [*1.3 Cumulative cultural evolution*](#13-cumulative-cultural-evolution) for more details.)

This is an analogy used to argue for discontinuous takeoff via a model of the discontinuous growth mechanisms in evolution, in turn implying the plausibility of similar mechanisms in TAI development. We could arguably also claim that there have been some [small discontinuities in certain domains like Go](https://external-preview.redd.it/K1KoedLafO-0pWEsDXOpn9TVa41jCoulj0F2BlILhB8.jpg?width=640&crop=smart&auto=webp&s=8b51dc75c0a05ffa88e60dcfdb7df3bf19982cfc).

Possible weaknesses with this analogy include:

*   It’s not clear how much agreement there is on the proposed model of cultural evolution - i.e. other models which don’t imply a discontinuous takeoff also exist
*   One could question whether or not intelligence can only arise through the right combination of social and asocial learning, and how well such a model describes the bottlenecks for TAI development currently

### Analogy: Intelligence is non-hard

*Certainty score: 4/5*

*Example(s):* [*Hard Takeoff*](https://www.lesswrong.com/posts/tjH8XPxAnr6JRbh7k/hard-takeoff)

(See [*1.6 One algorithm and Whole Brain Emulation*](#16-one-algorithm-and-whole-brain-emulation) for more details)

This analogy claims that because even blind evolution was able to discover an algorithm for general intelligence, finding the right algorithm for general intelligence in TAI is boundedly difficult. While it’s not clear how easy or hard intelligence really is, although it plausibly does seem reasonably non-hard.

Possible weaknesses with this analogy:

*   One could object to this claim by pointing to observer-selection effects (see [*1.7 Anthropic effects*](#17-anthropic-effects)). Maybe we really did just get really lucky!
*   Perhaps the space of algorithms that we’re searching through via AI research is sufficiently different from the space of algorithms that evolution searched through
*   If it’s possible that “narrow intelligences” could be transformative, then drawing analogy with how easy it was to yield general intelligence in evolution may not be very sound

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/c3c4abeeba9e2d5cda0f31896e429f9b49e1e0f7d9e13746.jpg)

*Figure 3: (From Bostrom’s* [Superintelligence](https://en.wikipedia.org/wiki/Superintelligence:_Paths,_Dangers,_Strategies), *Scenarios of an upcoming revolution) Once we exceed a crossover threshold, system capability increases drastically.*

### Analogy: Thresholds

*Certainty score: 4/5*

*Example(s):* [*Hard Takeoff*](https://www.lesswrong.com/posts/tjH8XPxAnr6JRbh7k/hard-takeoff)*,* [*Surprised by Brains*](https://www.lesswrong.com/posts/XQirei3crsLxsCQoi/surprised-by-brains)

This analogy is between [evolutionary thresholds](http://lukejharmon.github.io/ilhabela/assets/threshold-model.pdf) and thresholds that hold back the development of AI. For instance, one might imagine that above some threshold intelligence, agents are able to undergo recursive self-improvement, leading to discontinuous takeoff. This threshold is often taken to be around “human-level”. An example of such an argument is given by Yudkowsky in [*Hard Takeoff*](https://www.lesswrong.com/posts/tjH8XPxAnr6JRbh7k/hard-takeoff):

> “...observed evolutionary history - the discontinuity between humans, and chimps who share 95% of our DNA - *lightly* suggests a critical threshold built into the capabilities that we think of as ‘general intelligence’, a machine that becomes far more powerful once the last gear is added.”

In evolution, thresholds can arise when a small change in one variable past a certain threshold value leads to a large change in another variable. Examples of these include [threshold traits](https://onlinelibrary.wiley.com/doi/10.1046/j.1420-9101.1999.00051.x) that explain why [guinea pigs develop different numbers of digits](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC1208511/pdf/506.pdf). But these generally only describe small scale changes, rather than very large changes in traits.

Possible weaknesses with this analogy:

*   It’s not clear how strong threshold effects are on the scale of [macroevolution](https://en.wikipedia.org/wiki/Macroevolution.); perhaps we shouldn’t be surprised that some small threshold effects can happen on small scales in complex dynamical systems, but this doesn’t say much about the likelihood of larger scale thresholds[^15]
*   It’s not *a priori* clear why we should expect this to be analogous in AI development - what properties might cause threshold effects to arise?

### Analogy: Number of neurons

*Certainty score: 4/5*

*Example(s):* [*80k podcast with Paul Christiano*](https://80000hours.org/podcast/episodes/paul-christiano-ai-alignment-solutions/)

A rough gauge we can use for the capabilities of AI systems of different sizes is by looking at the capabilities of organisms with brains of differing numbers of neurons (see [*1.4 Brains and compute*](#14-brains-and-compute)).

Note that this doesn’t refer to the number of *connections* per neuron - in chapter 1 of [*Deep Learning*](https://www.deeplearningbook.org/contents/intro.html), Goodfellow *et al.* point out that artificial neural networks have had close to the same number of connections per neuron as in the human brain for many years, but we’re still orders of magnitude away from having the same number of neurons.

A related suggestion is to look at the ratio of content to architecture size, rather than just the architecture size - see [*Source code size vs learned model size in ML and in humans?*](https://www.lesswrong.com/posts/jd9LajtGWv93NC8uo/source-code-size-vs-learned-model-size-in-ml-and-in-humans)

Possible weaknesses:

*   Perhaps we should be looking at the connections in the neocortex, rather than just the number of neurons
*   The number of neurons isn’t sufficient to tell us about intelligent capabilities - e.g. elephant brains have more neurons than human brains

### Analogy: Structure of the learning system

*Certainty score: 2/5*

*Example(s):* [*My computational framework for the brain*](https://www.lesswrong.com/posts/diruo47z32eprenTg/my-computational-framework-for-the-brain)

Evolution designed human brains with a particular structure, and perhaps there are important features of this that need to be mimicked when developing AI in order for the resulting systems to be generally intelligent.

A natural comparison that we might make is based on the architectures and modularity of learning systems. [Different parts of the brain have different functions](https://en.wikipedia.org/wiki/Human_brain#Structure), and modern ML systems often consist of several models designed for different purposes. As a simple example, a CNN has a head that learns a feature map, which is fed as an input vector into a fully connected neural net for classification ([Richard Ngo calls this type of modularity *architectural modularity*](https://www.lesswrong.com/posts/zvEbeZ6opjPJiQnFE/emergent-modularity-and-safety), and distinguishes this from *emergent modularity* arising in a neural net from training). Some people argue that this [modular structure makes it easier to evolve](https://arxiv.org/pdf/1207.2743.pdf) \- parts can be added or removed from the system without affecting the function of other modules, although [others contest this claim](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3882658/).

Other related factors one might want to think about are:

*   The extent to which processing is done in parallel in the brain vs in ML (which could depend on how parallelisable the algorithm is, what hardware is being used etc.)

My impression is that there’s a fair bit of disagreement on how much artificial neural networks would need to resemble the brain in order to develop AGI. More discussion on this in [*The Brain as a Universal Learning Machine*](https://www.lesswrong.com/posts/9Yc7Pp7szcjPgPsjf/the-brain-as-a-universal-learning-machine) and [*Jeff Hawkins on neuromorphic AGI within 20 years*](https://www.lesswrong.com/posts/FoJSa8mgLPT83g9e8/jeff-hawkins-on-neuromorphic-agi-within-20-years).

Possible weaknesses:

*   It’s hard to tell what features of the brain are the most crucial for developing general intelligence - one hypothesis is that the cortex is key for developing intelligence, but [not all animals have a neocortex](https://www.ruhr-uni-bochum.de/biopsy/documents/2016_TICS.pdf)

### Disanalogy: Training environments

*Certainty score: 2/5*

*Example(s):* [*AGI safety from first principles: Superintelligence*](https://www.lesswrong.com/s/mzgtmmTKKn5MuCzFJ/p/eG3WhHS8CLNxuH6rT)

In natural selection, populations become adapted to *existing* environments, not to future ones. This increases fitness *relative to the context within which selection is happening*. Perhaps AI training environments are going to be more conducive to a fast takeoff, because these are hand-designed by AI researchers rather than purely based on the current state of the natural environment.

Some might counter that training of an AI in a virtual environment is insufficient; general intelligence can only arise in an environment that resembles the real biological one. However, this is potentially a pessimistic view, especially given that [many features of biological environments can be simulated](https://doi.org/10.1016/j.visres.2020.05.009).

Richard Ngo previously also discussed some ways in which [different environments could bottleneck AGI development](https://www.lesswrong.com/posts/vqpEC3MPioHX7bv4t/environments-as-a-bottleneck-in-agi-development).

Possible weaknesses:

*   Current understanding of which features of the environment are most important for developing intelligence (or capabilities) is not very good
*   How important is it that, plausibly, more intelligent agents are able to modify their environments more? How much were humans able to change the environment, in fitness-relevant ways? Should we look for something similar in AI?

### Disanalogy: Order of training

*Certainty score: 1/5*

*Example(s):* [*Analogies and General Priors on Intelligence*](https://www.lesswrong.com/posts/yFQkFNCszoJPZTnK6/analogies-and-general-priors-on-intelligence)

In [*Analogies and General Priors on Intelligence*](https://www.lesswrong.com/posts/yFQkFNCszoJPZTnK6/analogies-and-general-priors-on-intelligence)*,* riceissa and Sammy Martin point out the order of learned tasks is different for AI, as compared with human evolution:

> *“Language, for instance, was evolved very late along the human lineage, while AI systems have been trained to deal with language from much earlier in their relative development. It is unknown how differences such as this would affect the difficulty-landscape of developing intelligence.”*

This is perhaps related to the analogy mentioned by Stuart Russell in [*Human Compatible*](https://en.wikipedia.org/wiki/Human_Compatible)*.* Specifically, Russell argues that there are certain milestones, like the ability to plan and understand language, before we can reach AGI. Possible disanalogies here include “how fast we’ll be able to reach all of these milestones” and “whether there is a fixed order in which the milestones are reached”.

A proxy for how fast AI takeoff occurs (if it does) would thus be something along the lines of,  “how fast do you think we’ll be able to reach all of these milestones”?

Possible weaknesses:

*   This doesn’t seem to have very much information value (at least the *order* doesn’t matter match, although my intuition is that Stuart Russell’s mention of milestones may be more helpful)

### Disanalogy: Optimisation objectives

*Certainty score: 3/5*

*Example(s):* [*AGI safety from first principles: Superintelligence*](https://www.lesswrong.com/s/mzgtmmTKKn5MuCzFJ/p/eG3WhHS8CLNxuH6rT), [*Takeoff speeds*](https://sideways-view.com/2018/02/24/takeoff-speeds/)

Current AI systems tend to be trained to maximise performance on specific tasks (e.g. image classification), leading to relatively narrow capabilities. On the other hand, organisms in evolution need to deal with multiple different tasks (e.g. reasoning, image recognition, planning), and thus need to be more well-rounded to survive.

But how exactly should we think of the “optimisation objectives” for AI systems? If we’re thinking about a single task like classification using a CNN, then the objective might be to “minimise the loss function”. If we think more broadly, then one could also argue that the objectives for AI systems are to be useful to humans (by design, if we assume that the objective functions have been specified correctly). On the other hand, evolution is optimising for fitness.

Possible weaknesses:

*   This might not hold up if the scaling hypothesis is true. For instance, GPT-3 demonstrates some degree of generalisation to tasks on which it was never trained, like simple arithmetic
*   How do we know that there aren’t any sub-objectives that agents may be optimising for?

### Disanalogy: *Changing* selection pressures

*Certainty score: 4/5*

*Example(s):* [*Takeoff speeds*](https://sideways-view.com/2018/02/24/takeoff-speeds/)

Paul Christiano argues that selection pressures won’t change in AI (since AI systems are being designed for usefulness to humans), but have constantly been changing throughout evolutionary history, and so a discontinuous takeoff in AI is less likely.

By selection pressures, I’m referring to a driver of natural selection that favours particular traits, like “high social intelligence”. One potential cause for these are environmental effects - fitness is defined relatively to the current environment, and so changes in the environment could change what natural selection (or a more general search algorithm) preferentially selects for. This could be induced by agents that modify the environment they are in; depending on how much control agents have in modifying the environment, they may be able to control the selection pressures in the way that they “desire” (similar to how humans build houses for shelter).

Possible weaknesses:

*   Just because AI research is ultimately being driven by usefulness, this doesn’t mean that there won’t be the equivalent of changing selection pressures in AI that could lead to a discontinuous takeoff
*   What do we mean by “usefulness”? Doesn’t what we consider to be useful change over time?

### Disanalogy: Data constraints

*Certainty score: 2/5*

*Example(s):* [*the scaling “inconsistency”: openAI’s new insight*](https://www.lesswrong.com/posts/diutNaWF669WgEt3v/the-scaling-inconsistency-openai-s-new-insight) (and [*Scaling Laws for Autoregressive Generative Modeling*](https://arxiv.org/pdf/2010.14701.pdf))

This disanalogy is between how much data is available for “training” in evolution as opposed to AI. Currently, ML systems are partially bottlenecked by [a lack of *labelled* data, rather than data in general](https://colab.research.google.com/github/fastai/fastbook/blob/master/01_intro.ipynb), which I’ll term as a lack of “useful data”. A corollary of this is that we might expect language models to eventually become data constrained. In evolution on the other hand, there is no shortage of useful data to train on - organisms gather information by interacting with the environment.

Possible weaknesses:

*   What counts as “useful data”?
*   Perhaps the more appropriate comparison here is between RL and evolution, removing the bottleneck from having a large enough labelled dataset
*   How likely is it that supervised learning will get bottlenecked from there being not enough useful data? Isn’t the amount of useful data just going to continue increasing dramatically?
*   Should we be more worried about sample efficiency than data constraints? This could be especially important given recent breakthroughs, e.g. [EfficientZero](https://www.lesswrong.com/posts/mRwJce3npmzbKfxws/efficientzero-how-it-works).

### Disanalogy: Energy costs

*Certainty score: 3/5*

*Example(s):* [*Training a single AI model can emit as much carbon as five cars in their lifetimes*](https://www.technologyreview.com/2019/06/06/239031/training-a-single-ai-model-can-emit-as-much-carbon-as-five-cars-in-their-lifetimes/)

The brain seems to be very energy efficient, and machine learning models take a ton of energy consumption to train.[^16] For instance, [our brains are able to run on about 20W](https://www.pnas.org/content/118/32/e2107022118), which is comparable with the power of my desk lamp. In contrast, training of neural networks has led to increasing concerns about the [carbon footprint of ML](https://arxiv.org/pdf/2104.10350.pdf). Perhaps a feature to pay attention to is how the energy costs and efficiency of AI systems changes over time.

This could be important because of [tradeoffs that exist in the evolutionary environment](https://www.zora.uzh.ch/id/eprint/97922/3/Isler&vanSchaikEvolAnthroMS_acceptedMS.pdf). On the one hand, having a larger brain generally yields cognitive benefits that increase odds of survival and maximising fitness. On the other hand, having larger brains requires more energy costs, reducing energy that can be devoted toward reproduction and development, thus reducing fitness.[^17]

Possible weaknesses:

*   Comparisons are often done between energy consumption of the human brain vs energy required for neural network *training*. Perhaps this is the wrong comparison, and we should be comparing with *inference* compute instead, which is significantly lower
*   TAI could be developed even with a very energy inefficient model, so this comparison may not be very useful

### Disanalogy: Drivers of intelligence explosions

*Uncertainty score: 5/5*

*Example(s):* [*AGI Safety from first principles*](https://www.lesswrong.com/posts/8xRSjC76HasLnMGSf/agi-safety-from-first-principles-introduction)

(See [*1.8 Drivers of intelligence explosions*](#18-drivers-of-intelligence-explosions) for more details.) This class of disanalogies argues that there are important ways in which AI development is different from evolutionary growth, and that this changes the picture completely.

Possible weaknesses:

*   Is there any evidence for us to believe that these mechanisms (e.g. recursive self-improvement) are likely to kick-in before reaching TAI? How much credence should we place on something like this? How do we know that this is likely to happen?

2.2 Discussion
--------------

Based on the above, it seems like there are many different considerations that might plausibly need to be considered. In order for analogies to evolution to be useful in helping us draw conclusions, I think it would help to understand which properties need to be analogous and why.

I think now is a good time to revisit the original question that inspired this post: “How should we think about the analogy to evolution?”

### 2.2.1 A possible framework: levels of analysis

The list of analogies and disanalogies is quite messy as it stands, and overall I’m very unsure about how to orient towards them.

One possibility is to follow an approach that is a modified version of [Marr’s Levels of Analysis](https://cocosci.princeton.edu/papers/krafftCogsci.pdf) (credits to Vael for suggesting this). According to Kraft and Griffiths:

> "Marr (1982) famously argued that any information processing system can be analyzed at three levels, that of (1) the computational problem the system is solving; (2) the algorithm the system uses to solve that problem; and (3) how that algorithm is implemented in the “physical hardware” of the system.”

An example of this that I really like is [proposed by Steven Byrnes](https://www.lesswrong.com/posts/pz7Mxyr7Ac43tWMaC/against-evolution-as-an-analogy-for-how-humans-will-create), that separates the development of general intelligence into an “outer algorithm” and an “inner algorithm”.

<table><tbody><tr><td>&nbsp;</td><td style="border-color:hsl(0, 0%, 0%);border-style:solid"><strong>Evolution</strong></td><td style="border-color:hsl(0, 0%, 0%);border-style:solid;text-align:center"><strong>AI</strong></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Outer algorithm (runs an automated search for the inner algorithm)</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Evolution searching over the space of possible cognitive architectures and algorithms</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Humans searching over the space of AI system architectures and algorithms</td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Inner algorithm (the general intelligence)</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">The human brain algorithm</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">E.g. SGD</td></tr></tbody></table>

*Table 3: Steven Byrnes’ description of the analogy to evolution involves breaking down the process of AGI development into two parts - an inner algorithm (for the trained intelligent agent) and an outer algorithm which searches for the inner algorithm.*

I think this way of viewing the list of analogies and disanalogies leads to a decent classification of the internal algorithmic aspects, but some analogies are also about the effects and capabilities of them. To include these other analogies, I suggest one other category, the “effects”, yielding three levels:

*   Inner algorithm level: analogies/disanalogies relating to the inner algorithm (e.g. narrowness of optimisation objectives)
*   Outer algorithm level: analogies/disanalogies relating to the outer algorithm (e.g. changing selection pressures)
*   Effects: analogies/disanalogies that aren’t about the workings of the inner+outer algorithm, but are about the observed effects (e.g. level of intelligence)

<table><tbody><tr><td style="border-color:hsl(0, 0%, 0%);border-style:solid;text-align:center" colspan="4"><strong>Analogies</strong></td></tr><tr><td style="border-color:hsl(0, 0%, 0%);border-style:solid;text-align:center">&nbsp;</td><td style="border-color:hsl(0, 0%, 0%);border-style:solid;text-align:center"><strong>Evolution</strong></td><td style="border-color:hsl(0, 0%, 0%);border-style:solid;text-align:center"><strong>AI</strong></td><td style="border-color:hsl(0, 0%, 0%);border-style:solid;text-align:center"><strong>Level</strong></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Timescales</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;width:150px">Discontinuous (Yudkowsky)</td><td style="background-color:#f3f3f3;border:1pt solid #000000;padding:5pt;vertical-align:top;width:150px">&nbsp;</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top;width:150px"><p>Effect</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Necessary compute</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;width:150px">$\sim$1e41 FLOPs is an upper bound</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;width:150px">Currently systems $\sim$1e24 FLOPs</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top;width:150px"><p>Inner/Outer</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Cumulative cultural evolution</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;width:150px">Discontinuous jumps are plausible via overhangs</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;width:150px">Some small (?) discontinuities e.g. AlphaGo</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top;width:150px"><p>Outer/Effect</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Intelligence is non-hard</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;width:150px">Even blind evolution discovered general intelligence</td><td style="background-color:#f3f3f3;border:1pt solid #000000;padding:5pt;vertical-align:top;width:150px">&nbsp;</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top;width:150px"><p>Outer</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Thresholds</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;width:150px">Threshold traits, theory of saltation</td><td style="background-color:#f3f3f3;border:1pt solid #000000;padding:5pt;vertical-align:top;width:150px">&nbsp;</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top;width:150px"><p>Outer/Effect</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Number of neurons</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;width:150px">Human brain: $\sim$1e11 neurons, $\sim$1e15 synapses</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;width:150px">Current ML models: 1e13 parameters</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top;width:150px"><p>Inner</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Structure of the learning system</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;width:150px">E.g. modularity in the brain</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;width:150px">E.g. modular ML system architectures</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>Inner/Outer</p></td></tr><tr><td style="border-color:hsl(0, 0%, 0%);border-style:solid;text-align:center" colspan="4"><strong>Disanalogies</strong></td></tr><tr><td style="border-color:hsl(0, 0%, 0%);border-style:solid">&nbsp;</td><td style="border-color:hsl(0, 0%, 0%);border-style:solid;text-align:center"><strong>Evolution</strong></td><td style="border-color:hsl(0, 0%, 0%);border-style:solid;text-align:center"><strong>AI</strong></td><td style="border-color:hsl(0, 0%, 0%);border-style:solid;text-align:center"><strong>Level</strong></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Training environments</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Certain features of evolutionary environments are needed for intelligence</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Maybe not?</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>Inner</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Order of training</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Learned cognitive skills in a particular order</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Need not follow the same order</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>Inner</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Optimisation objectives</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Wider range of incentives</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Narrower; specific tasks</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>Inner/Outer</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Changing selection pressures</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Selection pressures change all the time</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Always optimising for usefulness</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>Outer</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Data constraints</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">No shortage of data</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Lack labelled data</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>Inner</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Energy costs</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Very energy efficient brain</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">ML systems not as efficient yet</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>Inner</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Drivers of intelligence explosion (e.g. recursive improvement)</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Limited recursive improvement due to biological constraints</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">AIs go from the inner to the outer - recursive improvement</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>Inner/Outer</p></td></tr></tbody></table>

*Table 4: Summary of the analogies, disanalogies, and which level of analysis they fall into.*

At the end of the day, I think it’s also plausible that trying to frame these analogies/disanalogies just isn’t that useful yet. I’m worried that this is a bad framing that turns out to be harmful in the long-term, so I’d appreciate any thoughts on this.[^18]

It seems very reasonable to me that we would have to think of each level of analysis differently. Processes at the inner algorithm level are probably going to be quite different, for instance. Furthermore, because ultimately what we’re interested in is the effect-level consideration of TAI, it seems that the inner algorithm level factors are less important (e.g. just because the environments are similar is far from sufficient evidence that TAI will develop the same way as evolution).

I expect that the analogies and disanalogies will change over time, some becoming more analogous and some less so, perhaps due to different approaches becoming more dominant in ML. I don’t have a strong opinion about which things might become more or less analogous.

### 2.2.2 Should we use evolution as an analogy?

So, should we even be using these analogies and disanalogies?

We should probably be more confident in the conclusions derived from these comparisons if they are used as plausibility arguments, as opposed to purely quantitative measures, simply because a plausibility claim is weaker. This of course depends on how the quantitative measure is being done, and what it is being used for (e.g. I believe bioanchors can still be a useful approach as a rough proxy or for getting an upper bound for when we might reach TAI).

I believe a lot of the value of these analogies could come from their information value (e.g. in helping us understand the mechanisms that could lead to different takeoff scenarios). As an example, understanding the role of [modular systems in evolution](https://www.lesswrong.com/posts/JBFHzfPkXHB2XfDGj/evolution-of-modularity) could end up being very useful if it is indeed a large driver in the evolution of human intelligence.

Also, if we’re looking at *intelligence* specifically, what other options do we have? I think we shouldn’t be too quick to dismiss analogies to evolution, depending on the use case.

Overall, I think that the way in which analogies and disanalogies to evolution are being used is pretty reasonable. Personally, I think that using evolution as an analogy makes sense and is a good idea, as long as it remains exactly that - an analogy. My impression is that we would need a lot more evidence or understanding to be able to use evolution as evidence in a more rigorous fashion.

### 2.2.3 Relation to other arguments about takeoff speeds

Perhaps you’re thinking that most of these analogies just aren’t going to be very significant compared to other arguments about takeoffs in general, like the [scaling hypothesis](https://www.gwern.net/Scaling-hypothesis) or concerns about an [AI overhang](https://www.lesswrong.com/posts/N6vZEnCn6A95Xn39p/are-we-in-an-ai-overhang).

Given the uncertainties regarding evolution and the many possible disanalogies, I think existing arguments that include both evolutionary and other considerations make a lot of sense. But how much exactly? I don’t have a strong opinion on this, but I think a large source of variance here is how convincing you think the disanalogies are (especially the drivers of intelligence of explosions).

Overall I’m unsure about more precise proportions as to how strongly to weigh evolutionary arguments against other ones (e.g. economic arguments) in forecasts.

2.3 Summary
-----------

The analogies and disanalogies that I mentioned previously are nowhere near exhaustive. Looking at things overall, I think it’s potentially useful or impactful to investigate which of these analogies or disanalogies are the most important and why.

3 Further work
==============

In this section, I list some brief thoughts on what might potentially be useful questions to answer. I don’t have a good grasp of how tractable these are, or how likely it is that they’ll be highly useful for furthering understanding. I leave these considerations as an exercise for the reader.

3.1 Clarifying definitions
--------------------------

### 3.1.1 Measures of growth

This is an example of what I think is an ambiguity that often arises when talking about takeoffs, that I’m hoping to get some clarity on. Specifically, I think the choice of measure is quite important when extrapolating previous progress to determine whether a takeoff is continuous or not.

One concern with the definition that I used previously, global economic output (see [*0.3 Definitions*](#03-definitions)), is the possibility that global economic output grows continuously, while another measure (like intelligence) grows discontinuously. Consider the example of LED efficiency:

![](https://39669.cdn.cke-cs.com/cgyAlfpLFBBiEjoXacnz/images/b692b4dbbd73159d802b8df104f35c942a23565d125146ae.png)

*Figure 4: \[*[*Image source*](https://glamox.com/upload/2013/01/25/illustration_led-basics_02_en.jpg)*\] Graphs showing the change in light source efficiency over time. The graph on the right shows the same graph as on the left, but with two rough curves highlighted - a continuous curve that represents continuous growth in lighting efficiency, and a discontinuous curve that represents growth in LED efficiency since first invention.*

We can observe several things:

*   [LEDs were first produced around 1960](http://edisontechcenter.org/lighting/LED/TheFirstPracticalLED.pdf), and suddenly underwent drastic efficiency improvements in the 1990s
*   If we choose to look at “lighting efficiency”, then we’re more likely to claim a continuous takeoff
*   If we choose to look at “LED efficiency”, then we’re more likely to claim a discontinuous takeoff

This illustrates some of what I think are existing difficulties with defining discontinuities. What exactly should we be measuring if we’re going to be talking about takeoff speeds?

Another problem is using economic growth as the operationalisation of “increased capabilities”. Some people like Will MacAskill think that it’s [plausible that we won’t get an economic “takeoff” at all](https://forum.effectivealtruism.org/posts/oPGJrqohDqT8GZieA/ask-me-anything#HcRNG4yhB4RsDtYit); instead, we may hit diminishing returns. This would be problematic if economic growth is the main measure that we’re using. Daniel Kokotajlo also raises some concern about this in [*Against GDP as a metric for AI timelines and takeoff speeds*](https://longtermrisk.org/against-gdp-as-a-metric-for-ai-timelines-and-takeoff-speeds/). This could mean that purely using economic output as a measure of takeoff speed is insufficient, and determining the continuity of progress could require observing multiple different trends simultaneously (economic growth, compute efficiency), some of which are the above analogies/disanalogies.

### 3.1.2 Miscellaneous

Another confusion that I had when working on this project is how we came to the definitions of “continuous” and “discontinuous” takeoff in the first place. However, since I’m viewing things with an eye towards political decision-making, I’m under the impression that the continuous/discontinuous distinction might not make as large of a difference as I’d thought (see [*0.2 Motivation*](#02-motivation)). More discussion of this can be found at [*Soft takeoff can still lead to decisive strategic advantage*](https://www.lesswrong.com/s/dZMDxPBZgHzorNDTt/p/PKy8NuNPknenkDY74), and the subsequent [review](https://www.lesswrong.com/s/dZMDxPBZgHzorNDTt/p/P448hmmAeGepQDREs).

I’m interested in better understanding exactly how slow the takeoff would need to be to make a *big* difference in our ability to respond to increasingly rapid AI development, and having terms that distinguish between these scenarios. In short, currently we’ve been asking, “if takeoff happens at a rate X, then will society be able to do Y in time?” I want to ask, “if we want to be able to do Y in time, what X is necessary?”.

3.2 Clarifying understanding
----------------------------

If we temporarily ignore arguments about evolution altogether, my impression is that most [people seem to think that a continuous takeoff is more likely](https://ai.metaculus.com/questions/2872/will-there-be-a-complete-4-year-interval-in-which-world-output-doubles-before-the-first-1-year-interval-in-which-world-output-doubles/) (under [Paul Christiano’s definition of “slow takeoff”](https://sideways-view.com/2018/02/24/takeoff-speeds/)). I’m unsure about why exactly this is the case, and I’m curious to hear what people think about this - is this because the evolutionary arguments in favour of a discontinuous takeoff, like the hominid variation argument, seem largely unconvincing?

In general, I’d be curious to get a better idea of what the most relevant takeoff measures are, and the main drivers of takeoff speeds (as well as the role of evolutionary analogies in that). In particular, do you think that the role of evolutionary analogies are relatively small compared to other arguments about takeoff speeds? If so, why?

I also think it would be good to look into specific cases of these analogies or disanalogies and steelmanning or critiquing them. Some topics in evolution that I think it could be valuable to look into include:

*   Evolution of modularity
*   Macroevolution, especially understanding whether or not there are global trends over evolutionary history
*   Threshold effects in evolution
*   Different theories of the evolution of general intelligence (e.g. cultural learning)

4 Conclusions
=============

I wrote this post to raise and address some uncertainties around using evolution as an analogy for the development of TAI, and potentially encourage new work in this area that benefits political decision-making. In particular, I focus on arguments about the takeoff *speeds* of TAI, although the conclusions may apply more generally.

The post split into three main sections:

1.  Reviewing key arguments involving analogies or disanalogies to evolution
2.  A list of the analogies and disanalogies, and evaluating them
3.  Possible avenues for further work

Reviewing key arguments
-----------------------

*   **The hominid variation argument:** (*discontinuous takeoff*) because intelligence scaled discontinuously in evolution, it seems plausible that something similar could happen in AI
*   **Changing selection pressures:** (*continuous takeoff*) we won’t get something similar, because the discontinuity in evolution arose from a change in selection pressures - this won’t happen in AI because humans always design AI systems for usefulness
*   **Cumulative cultural evolution:** (*discontinuous takeoff*) the discontinuity in evolution might not just be due to selection pressures - perhaps it’s due to a social learning/asocial learning overhang instead
*   **Brains and compute:** (*unsure*) a rough proxy for how quickly AI capabilities will scale is to look at the capabilities of organisms with different numbers of neurons, and comparing that to the neuron count of current systems
*   **Bioanchors:** (*unsure*) we can place upper bounds on how much compute is needed for TAI, forecast when we might expect TAI using 2020 deep learning \[and put a weak lower bound on how slow takeoff will be\]
*   **One algorithm and WBE:** (*discontinuous takeoff*) building AGI can’t be that hard, because blind evolution was able to do it
*   **Anthropic effects:** (*discontinuous takeoff*) one might object to the “one algorithm” argument because of observation-selection effects, but the SIA and SSA frameworks at least partially dispel such concerns
*   **Drivers of intelligence explosions:** (*discontinuous takeoff*) AI is different from evolution in crucial ways, like the ability to do recursive improvement quickly

A non-exhaustive list of analogies and disanalogies
---------------------------------------------------

*   **Timescales:** (*analogy)* intelligence and capability scaled in \\(X\\) fashion in evolution, so we should expect them to scale in \\(X\\) fashion in AI
*   **Necessary compute:** (*analogy*) how much compute we need to reach TAI is vaguely similar to (and upper bounded by) how much compute was needed to develop general intelligence over evolution
*   **Cumulative cultural evolution:** (*analogy*) one model of the evolutionary development of intelligence suggests a way in which growth could be discontinuous, so something similar should happen in AI
*   **Intelligence is non-hard:** (*analogy*) it can’t be that hard to find the “intelligence algorithm” in AI because blind evolution found it – and when we stumble across it, discontinuous takeoff occurs!
*   **Thresholds:** (*analogy*) akin to how small changes in one variable can lead to large changes in another (threshold traits), once we cross some threshold, intelligence can grow really fast
*   **Number of neurons:** (*analogy*) a gauge for the capabilities is AI systems is to look at how many neurons they have, and what organisms with that many neurons are able to do
*   **Structure of the learning system:** (*analogy*) human brains have a particular abstracted structure, and we should expect AGI to have a similar high-level one
*   **Training environment:** (*disanalogy*) fitness is defined relative to the environment, and training environments can be different between AI and evolution in important ways
*   **Order of training:** (*disanalogy*) in evolution, we developed the ability to do certain tasks before others - we probably shouldn’t expect the same order of “learned tasks” in future AI development
*   **Optimisation objectives:** (*disanalogy*) AI systems are currently trained to perform well on specific tasks, whereas organisms in evolutionary environments have to deal with multiple different tasks, leading to a broader range of abilities
*   **Changing selection pressures:** (*disanalogy*) unlike evolution, selection pressures won’t change in AI, because AI is always optimised for usefulness
*   **Data constraints:** (*disanalogy*) ML systems are partially bottlenecked by a lack of *labelled* data, but evolutionary “agents” can just collect data by interacting with the environment
*   **Energy costs:** (*disanalogy*) the brain is much more energy efficient that ML systems
*   **Drivers of intelligence explosions:** (*disanalogy*) you don’t get things like extremely fast recursive self-improvement in evolution

These can be analysed by thinking of them as existing at three different levels:

*   Outer algorithm level: searches for an “inner algorithm”, e.g. evolution
*   Inner algorithm level: e.g. the human intelligence algorithm
*   Effects: analogies/disanalogies to the observed effects of the inner+outer algorithm

Overall I’m uncertain about how large of a role these analogies and disanalogies should play when thinking about takeoff speeds, although I believe that they can be quite useful for information value and as a *rough* estimate of what to expect from TAI.

Further work
------------

Other things (in addition to the role of analogies/disanalogies to evolution) that I think remain unclear include:

*   How do we define appropriate measures of growth?
*   Should we be using different definitions of continuous and discontinuous takeoff?
*   What are the main reasons why people believe continuous takeoff is more likely?

Some things I think it would help to look into:

*   Evolution of modularity
*   Macroevolution and global trends in evolution
*   Threshold effects and traits
*   The evolution of general intelligence

I’d love to see some discussion on these topics, including things that I got wrong and other stuff that you think should be included!

* * *

[^1]: To make things more complicated, the [line between the domain-specific and domain-general intelligence can be somewhat fuzzy](https://en.wikipedia.org/wiki/Domain-general_learning#Opposing_Theories). For instance, what counts as a single “domain”?

[^2]: Then again, “continuous takeoff” isn’t a very mathematically sound term either, but I’m not sure how to contest that!

[^3]: Specifically I think it would be useful to quantify how likely a “20 year takeoff” would be compared to a “2 year one”. My impression is that several arguments for why the 20 year takeoff is unlikely already exist (e.g. in [*Intelligence Explosion Microeconomics*](http://intelligence.org/files/IEM.pdf)).

[^4]: This is referred to as a “slow takeoff” rather than a “continuous takeoff” in the original article.

[^5]: I’m not very sure what kind of “success” Yudkowsky is referring to, so I’ve put this in quotes. Presumably this means *capabilities*, i.e. the ability to achieve one’s goals, which seems very similar to the [definition of power in the formalisation of instrumental convergence](https://www.lesswrong.com/s/fSMbebQyR4wheRrvk/p/6DuJxY8X45Sco4bS2).

[^6]: I’m somewhat unsure what exactly I should be referring to for the “start of evolutionary history”, so this is admittedly vague. One possibility is to treat the [evolution of the first neurons (around 500 million years ago)](https://www.cell.com/current-biology/pdf/S0960-9822(16)30489-4.pdf) as a starting point, similar to the approach used in [*Draft report on AI timelines*](https://docs.google.com/document/d/1k7qzzn14jgE-Gbf0CON7_Py6tQUp2QNodr_8VAoDGnY/edit#heading=h.gvc1xyxlemkd).

[^7]: I think of this as being like applying a linear transformation to the time axis such that evolutionary history gets contracted down into several decades. But is such an approach valid?

[^8]: One could counter this point by saying although it looks continuous in evolution, this would be discontinuous in AI development e.g. due to recursive self improvement (see [*2 Evaluating analogies and disanalogies*](#2-evaluating-analogies-and-disanalogies)).

[^9]: Perhaps the important consideration is [*cortical* neuron count](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4685590/), rather than neuron count in general. The numbers here only represent neuron counts in general.

[^10]: Source: Wikipedia page [*List of animals by number of neurons*](https://en.wikipedia.org/wiki/List_of_animals_by_number_of_neurons). Note that I haven’t bothered to look into the primary sources individually.

[^12]: The report also describes other bioanchors, such as the lifetime anchor, i.e. “the computation done by a child’s brain over the course of growing to be an adult”. These other anchors are many orders of magnitude less in the required compute, so the compute predicted solely by the evolution anchor could be a significant overestimate.

[^13]: This is very much oversimplified - a more complete consideration depends on things like the plausibility of the [Great Filter](https://www.lesswrong.com/tag/great-filter). I don’t feel like I have a good understanding of this, and will defer to [Shulman and Bostrom’s paper](https://nickbostrom.com/aievolution.pdf).

[^14]: Of course, the evidence for this may be unclear. For instance, it’s possible that species that display convergent evolution only do so because of some shared obscure reason in their biologies. Shulman and Bostrom also list [several other caveats to this argument](https://nickbostrom.com/aievolution.pdf).

[^15]: In terms of macroevolution, one could point to the [theory of saltation](https://en.wikipedia.org/wiki/Saltation_(biology)), which postulates radical mutational changes that radically alter the phenotype of a species. This is in stark contrast with the [theory of gradualism](https://www.oxfordbibliographies.com/view/document/obo-9780199941728/obo-9780199941728-0072.xml), which instead argues that phenotypic changes in organisms only happen continuously.

[^16]: For more details about the efficiency of AI systems, see OpenAI’s [*AI and Efficiency*](https://openai.com/blog/ai-and-efficiency/)*.*

[^17]: More discussion by Burkart *et al* in [*Future directions for studying the evolution of general intelligence*](https://www.cambridge.org/core/journals/behavioral-and-brain-sciences/article/abs/future-directions-for-studying-the-evolution-of-general-intelligence/6099D7CF3EF5EAD216D032C3E767D5D0)*.*

[^18]: Here’s another framework for thinking about the analogies and disanalogies that I briefly considered, with three categories: (1) analogies/disanalogies for how we will build AGI, (2) analogies/disanalogies for how soon or quickly we should expect AGI, and (3) analogies/disanalogies for how soon or quickly we should expect something that is as transformative as AGI.