---
layout: post
title:  How do you come up with good research ideas?
date:   2024-08-09
published: true
excerpt_separator: <!--more-->
tags: research
author: Anson Ho
---
[comment]: A collection of tips I've found helpful for coming up with (hopefully good) project ideas.
<!--more-->

I had my first taste of research at the start of 2021, and it was an utter nightmare - a pretty fascinating nightmare, in fact.[^1] One thing that really stood out to me was that some people are *way* better than I am at generating and evaluating research ideas. This leads to a natural question: how are they able to do this? 

It's been around three and a half years since then, and through a combination of making mistakes and talking to more experienced people, I've learned a little bit about how this is done. Doing research also no longer feels like a nightmare - in fact it's often really fun!

Of course, I'm still really new to this and there's still a ton I don't understand about coming up with research ideas. That said, the purpose of this post is just to collect my thoughts and share them in case anybody finds them useful, rather than to say anything "definitive". Therefore please remember to take everything I write here with a grain of salt!

Obligatory caveats aside,[^2] here's a non-exhaustive collection of tips for conjuring good research ideas, that I've personally found useful over the last three to four years - your mileage may vary! 

# Generating research ideas 
In my experience, a big part of coming up with good research ideas involves being familiar with your field. As you read a lot of the research literature and improve your understanding, you naturally start to notice gaps and open questions. Therefore, it's essential to read a lot and keep up with the existing literature. 

There are a bunch of heuristics for identifying new research problems that follow from this: 
- **Make an existing debate more rigorous**. 

    If you identify a hotly debated topic in your field, is there a way you could contribute to the discussion in a way that is more rigorous or concrete? For instance, one common way (in my opinion) that many debates fall short is having a lack of quantitative specificity. Is there a way you could figure out the quantitative details, e.g. effect sizes?

    I think that some existing work on the economic impacts of "transformative" AI falls into this category (e.g. see [Erdil and Besiroglu 2023](https://epochai.org/blog/explosive-growth-from-ai-a-review-of-the-arguments) and [Davidson 2021](https://www.openphilanthropy.org/research/could-advanced-ai-drive-explosive-economic-growth/)). In particular, could substantial AI automation result in GWP growth rates tenfold higher than today? Some argue against this on the basis that Moore's law is coming to an end, but while plausible it doesn't explain much yet - just how far away are we from the limits of Moore's law? Why does this bottleneck permit 3%/year but not 30%/year growth rates? Without quantitative details, these questions remain unanswered - potential research questions!

- **"Why aren't they doing it this way?"**
    
    As you read through the literature, it's important ask good questions, and think about how you'd approach the questions that the authors of a paper are trying to solve. When you do this well, you'll often find intriguing disagreements - maybe the authors make a modelling assumption that you think isn't justified. Perhaps their approach only answers a much narrower research question than it might've seemed on the tin. If you can think of a better approach, then you've got a potential project idea! One related example of this is [Srivastava et al's work on dropout](https://www.cs.toronto.edu/~rsalakhu/papers/srivastava14a.pdf), [as described in this interview with Geoffrey Hinton](https://www.youtube.com/watch?v=n4IQOBka8bc&t=1978s). 

- **Thinking from first principles and asking the right questions**.
    
    More generally, I think it's possible to accelerate how quickly you identify these gaps by asking the right questions. One exercise I've personally gotten some value from is opening up a google doc and pretending I'm approaching a field I'm fairly familiar with from scratch. Then I ask myself a bunch of questions: [What are the most important problems of your field?](https://www.cs.virginia.edu/~robins/YouAndYourResearch.html#:~:text=What%20are%20the%20important%20problems%20of%20your%20field%3F) Why? What are the most obvious ways to make progress on this? etc. I've done similar exercises many times in the past, and often I've spotted key areas in which my understanding was lacking, and therefore warranted more investigation. 

# Evaluating research ideas
Besides creating new ideas, another crucial aspect of research planning is being able to evaluate potential projects. To the extent that "generating research ideas" and "evaluating ideas" are separable, I find the latter substantially more challenging. I suspect this is because it introduces a bunch of additional constraints (e.g. time availablity, access to computational resources or funding, expertise) that really get in the way of answering questions you might be interested in. 

With that in mind, here are some tips that have helped me in the past: 
- **Ask yourself core questions about importance and tractability**.

    This is a just a general piece of advice that in some sense is really obvious, but at the same time also requires some practice to turn it into a habit. Some questions that are useful to think through are "what needs to happen for the project to succeed?" (to assess tractability) and "what would you learn if the project succeeded?" (to assess importance). 

    I feel it's important to be concrete when answering these questions. For instance, if your goal is to "measure how quickly machine learning algorithms are improving", you could ask what data sources you plan to use, whether you need to run experiments (and of what kind), how much data you need, etc. Needless to say, it's not necessary to outline *everything* in full detail - e.g. you can abstract away things that you're confident you can do, such as "train GPT-2 small". 

- **Learn what is or isn't feasible from experience**. 

    While it's easy to say that we should account for the tractability of particular research proposals, actually doing so in practice can be quite complicated. Personally, I think people who have a lot more research experience under their belt tend to have substantially better intuitions about this, largely because they've tried lots of different approaches and learned what the bottlenecks are. 

    For instance, they might have first-hand experience finding natural experiments about a relevant question without success, despite putting in a lot of effort. They might also have better intuitions about how much data is necessary to be able to answer a question well, how much time needs to be spent on certain research subquestions, and so on.

    There are two corollaries of this that seem most salient to me. The first is that it helps a lot to try and gain experience! Do research, perform small-scale "cheap tests" to gain information about the tractability of problems, and extrapolate this to gauge how much time or effort is necessary for the full-scale version of a project. 

    The second corollary is that it's important to pay attention to when something changes the tractability of a project you're excited about. Perhaps you learn about a new natural experiment, or somebody writes [software that makes distributed training of machine learning models a lot easier](https://en.wikipedia.org/wiki/CUDA), or somebody publishes an answer to a subquestion you didn't know how to solve, etc. These kinds of changes could transform a bad research idea into a good one, so I think it's a good idea to be on the lookout for such opportunities. 

# Conclusion
Just to reiterate, all the advice I've written above comes what I've personally found useful, but other people might have different opinions! It's also far from comprehensive - I've just chosen some of the advice that I've found most useful time and time again. 

To build on this list, here are some additional collections of advice that I really liked, from people who are far more qualified to say things about research than I am: 
- [Carl Shulman's research advice](https://docs.google.com/document/d/1_yuuheVqp1quDfkuRcpoW_HO7jPaI7QnRjF1zl_VovU/edit#heading=h.f0e6ftjeverg)
- [Jacob Steinhardt's research advice](https://www.youtube.com/watch?v=gSTMIOKgq8A)

If you have any other research advice that you've personally found useful, I'd love to hear them! 

[^1]: This was by and large a combination of my lack of experience, poor time management, and being overwhelmed by several things (COVID, upcoming exams, immigration, etc.). Fortunately I received a lot of support (thank you Sebastian!) and lived to see another day.

[^2]: One more disclaimer to bear in mind: I'm sceptical how useful it is to just read these pieces of advice. I believe it's really important to genuinely internalise them, which involves actually doing research. While I'd already known about a bunch of these pieces of advice before I started doing research, I ended up still making mistakes and going against what I thought I "knew" was good research practice. Maybe this draws into question whether this post is valuable, though I still think it was useful to be able to diagnose when I was making some research mistake. 