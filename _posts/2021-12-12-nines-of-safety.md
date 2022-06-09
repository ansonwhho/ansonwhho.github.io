---
layout: post
title: "Nines of safety: Terence Tao’s proposed unit of measurement of risk"
date:   2021-12-12
author: Anson Ho
published: False
excerpt_separator: <!--more-->
tags: rationality EA
---
> In his blog, Terence Tao proposed a measure of risk that is best suited to problems with low risk of a very bad outcome. Given that Effective Altruism deals with this stuff a lot, I wanted to hear some thoughts...

<!--more-->

*Originally posted to the [Effective Altruism Forum](https://forum.effectivealtruism.org/posts/L9pB9sWTngF4BcHeL/nines-of-safety-terence-tao-s-proposed-unit-of-measurement).*

I recently came across [Terence Tao’s](https://en.wikipedia.org/wiki/Terence_Tao) post proposing a risk measure called [“nines of safety”](https://terrytao.wordpress.com/2021/10/03/nines-of-safety-a-proposed-unit-of-measurement-of-risk/). I think it’s a very interesting proposal, and given that many EA forum users think a lot about risks and probabilities, I’m curious to hear what opinions other people have. 

Below I’ll briefly summarise my understanding of the idea, and ask some specific questions about how this might be related to EA. For more details, I highly recommend reading the [original post](https://terrytao.wordpress.com/2021/10/03/nines-of-safety-a-proposed-unit-of-measurement-of-risk/). 

The proposal
============

While we often use percentages to describe probabilities and proportions, it can be hard to tell whether a given percentage is “good” or “bad”. For instance, having a 60% chance of success seems risky for a medical operation, but a result of 60% to 40% would be a landslide victory in a two-party election. 

Part of the difficulty is that percentages can be used in a multitude of ways, with different interpretations in different scenarios. Tao proposes a unit that can be used to measure both the *risk* and *safety* of some event that has a really bad outcome (e.g. a global pandemic). The trouble with percentages in this scenario is that the probability of getting a good outcome needs to be *really high* in order for us to be comfortable. For instance, 90% odds of successfully completing a potentially life-threatening medical operation might seem a bit risky. 99% odds would probably feel quite a bit better, and at 99.9% odds of success we might start feeling reasonably safe (in general, this depends on how bad the negative outcomes are, the counterfactual of not doing the operation, etc.).

Writing out all of these 9s seems a bit clumsy, and the measure that Tao proposes addresses this - it’s called “nines of safety”, and informally measures how many consecutive 9s there are in the probability of success (the nines of *risk* would be the same as the nines of safety, but applied to the probability of *failure*). So in the previous example: 

*   90% success = 1 nine of safety
*   99% success = 2 nines of safety
*   99.9% success = 3 nines of safety

  
We can formalise this in terms of the base-10 [logarithm](https://en.wikipedia.org/wiki/Logarithm):

\\\[\\text{Nines of safety}=-\\log_{10}(1 - \\text{probability of success})\\\]

\\(\\)which allows us to extend “nines of safety” so that it isn’t just a whole number. We can write a table to convert between the probabilities of success, failure, and the nines of safety:

<table><tbody><tr><td style="border:1px solid hsl(0, 0%, 0%);text-align:center"><strong>Probability of success</strong></td><td style="border:1px solid hsl(0, 0%, 0%);text-align:center"><strong>Probability of failure</strong></td><td style="border:1px solid hsl(0, 0%, 0%);text-align:center"><strong>Nines of safety</strong></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>0%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>100%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>0.0</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>50%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>50%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>0.3</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>75%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>25%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>0.6</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>80%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>20%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>0.7</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>90%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>10%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>1.0</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>95%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>5%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>1.3</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>97.5%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>2.5%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>1.6</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>98%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>2%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>1.7</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>99%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>1%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>2.0</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>99.5%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>0.5%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>2.3</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>99.75%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>0.25%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>2.6</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>99.8%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>0.2%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>2.7</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>99.9%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>0.1%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>3.0</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>99.95%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>0.05%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>3.3</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>99.975%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>0.025%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>3.6</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>99.98%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>0.02%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>3.7</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>99.99%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>0.01%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>4.0</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>100%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>0%</p></td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>infinite</p></td></tr></tbody></table>

Note that the nines of safety are rounded to 1 decimal place, because in practice probability estimates are likely to be quite uncertain, and extra decimal places may not be particularly significant.

In general (as in the aforementioned example of the medical operation), the number of nines of safety depends on several factors, such as the number of people exposed and the duration of exposure. We might also need to consider repeated exposures, which can be quite complicated – depending on the task, individual exposures may not necessarily be independent from each other.

Why?
====

This potentially has several benefits: 

*   **Easier mental arithmetic**:
    *   Due to the [properties of logarithms](https://en.wikipedia.org/wiki/Logarithm#Product,_quotient,_power,_and_root), adding “nines of safety” is the same as multiplying probabilities, which makes mental calculation easier (especially true if we’re dealing with [relative risks](https://en.wikipedia.org/wiki/Relative_risk), e.g. “What are the odds of catching COVID in a vaccinated group *relative* to an unvaccinated control group?”)
    *   It also makes it easier to convert from individual risk to group risk (see [this comment](https://terrytao.wordpress.com/2021/10/03/nines-of-safety-a-proposed-unit-of-measurement-of-risk/#comment-635271))
*   **“Apples-to-apples comparisons”**: since percentages are interpreted very differently depended on context, having a measure that is uniquely devoted to measuring *risks* can be quite helpful
*   **Finer characterisation of high odds of success**: e.g. a small change in percentage from 99% to 99.9% odds of success leads to an addition of 1 nine of safety

I think it’s also worth mentioning that a similar idea is already used in some fields, like reliability engineering and assessing the purity of substances. In the post, Tao summarises how nines of safety would be used quite nicely: 

> “In summary, when debating the value of a given risk mitigation measure, the correct question to ask is not quite “Is it certain to work” or “Can it fail?”, but rather “How many extra nines of safety does it add?”.”

One possible objection to this would be that expected value calculations already account for “low-probability, high-risk” scenarios. A counterargument to this is that expected value requires estimating *both* the probability and the impact, which leads to greater uncertainty than just considering the nines of safety (which only depends on probability). Overall though, I’m unsure about how useful nines of safety might be compared to expected value in different cause areas. 

Relation to EA
==============

I guess some obvious questions would be something like, “how many nines of safety are there for different problems in your field?” As an example, if we convert the risks from [*The Precipice*](https://en.wikipedia.org/wiki/The_Precipice:_Existential_Risk_and_the_Future_of_Humanity), we get:

<table><tbody><tr><td style="border:2px solid hsl(0, 0%, 0%);text-align:center"><strong>Existential catastrophe via</strong></td><td style="border:2px solid hsl(0, 0%, 0%);text-align:center"><strong>Chance within next 100 years</strong></td><td style="border:2px solid hsl(0, 0%, 0%);text-align:center"><strong>Nines of safety</strong></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Asteroid or comet impact</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;text-align:center">$\sim$1 in 1,000,000</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>6</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Supervolcanic eruption</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;text-align:center">$\sim$1 in 10,000</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>4</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Stellar explosion</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;text-align:center">$\sim$1 in 1,000,000,000</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>9</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><strong>Total natural risk</strong></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;text-align:center">$\sim$1 in 10,000</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>4</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Nuclear war</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;text-align:center">$\sim$1 in 1,000</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>3</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Climate change</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;text-align:center">$\sim$1 in 1,000</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>3</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Other environmental damage</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;text-align:center">$\sim$1 in 1,000</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>3</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">“Naturally” arising pandemics</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;text-align:center">$\sim$1 in 10,000</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>4</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Engineered pandemics</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;text-align:center">$\sim$1 in 30</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>1.5</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Unaligned AI</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;text-align:center">$\sim$1 in 10</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>1.7</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Unforeseen anthropogenic risks</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;text-align:center">$\sim$1 in 30</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>1.5</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top">Other anthropogenic risks</td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;text-align:center">$\sim$1 in 50</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>1.7</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><strong>Total anthropogenic risk</strong></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;text-align:center">$\sim$1 in 6</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>0.8</p></td></tr><tr><td style="border:1pt solid #000000;padding:5pt;vertical-align:top"><strong>Total existential risk</strong></td><td style="border:1pt solid #000000;padding:5pt;vertical-align:top;text-align:center">$\sim$1 in 6</td><td style="border:1pt solid #000000;padding:5pt;text-align:center;vertical-align:top"><p>0.8</p></td></tr></tbody></table>

If you think that these numbers are severely underestimating the X-risks, then perhaps you have a case against nines of safety being a particularly useful measure. 

In general, I’m curious about several things: 

*   What do you think about this proposal in general?
*   What are some examples of things in EA where using nines of safety might be a good idea? I’m especially interested in examples where there is disagreement about how likely an intervention is to work (e.g. researcher A believes intervention X is better than intervention Y, but researcher B believes otherwise).
*   Does “nines of safety” seem useful relative to techniques we already use, like expected values?
*   What are some arguments against nines of safety?