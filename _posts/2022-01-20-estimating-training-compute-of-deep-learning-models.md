---
layout: post
title:  Estimating training compute of Deep Learning models
date:   2022-01-20
published: true
excerpt_separator: <!--more-->
tags: AI AI-safety forecasting formal
author: Jaime Sevilla, Lennart Heim, Marius Hobbhahn, Tamay Besiroglu, Anson Ho
---
> As of January 2022, there isn’t a very well established norm of publishing compute statistics for training machine learning models. To try and improve things, we offer some guidelines on how to estimate the compute of the final training run of ML systems, either through (1) direct calculation, or (2) approximations from GPU time.
<!--more-->

You can find the [complete article here](https://docs.google.com/document/d/1J2BX9jkE5nN5EA1zYRN0lHhdCf1YkiFERc_nwiYqCOA/edit). We provide a short summary below.

In short: To estimate the compute used to train a Deep Learning model we can either: 1) directly count the number of operations needed or 2) estimate it from GPU time.

# Method 1: Counting Operations in the Model
<center>
    $\underbrace{2 \times \text{ # of connections }}_\text{Operations per forward pass} \times \underbrace{3}_\text{Backward-forward adjustment} \times \underbrace{\text{# training examples } \times \text{ # epochs}}_\text{Number of passes}$
</center>

<br />

## Method 2: GPU Time
<center>
    $\text{training time } \times \text{ # cores } \times \text{ peak FLOP/s } \times \text{utilisation rate}$
</center>

<br />

We are uncertain about what utilization rate is best, but our recommendation is 30% for Large Language Models and 40% for other models.

You can read more about method 1 [here](https://docs.google.com/document/d/1J2BX9jkE5nN5EA1zYRN0lHhdCf1YkiFERc_nwiYqCOA/edit#heading=h.2mby4t3qns9s) and about method 2 [here](https://docs.google.com/document/d/1J2BX9jkE5nN5EA1zYRN0lHhdCf1YkiFERc_nwiYqCOA/edit#heading=h.erkg6ljdb9la).

## Other parts of interest of this article include:
- We argue that the ratio of operations of backward and forward pass of neural networks is often close to 2:1. [More](https://docs.google.com/document/d/1J2BX9jkE5nN5EA1zYRN0lHhdCf1YkiFERc_nwiYqCOA/edit#heading=h.w8eohir5vge4).
- We discuss how the formula of method 1 changes for recurrent models. [More](https://docs.google.com/document/d/1J2BX9jkE5nN5EA1zYRN0lHhdCf1YkiFERc_nwiYqCOA/edit#heading=h.fdnj8v30m5rm).
- We argue that dropout does not affect the number of operations per forward and backward pass. [More](https://docs.google.com/document/d/1J2BX9jkE5nN5EA1zYRN0lHhdCf1YkiFERc_nwiYqCOA/edit#heading=h.a2552o2358pi).
- We have elaborated a table with parameter and operation counts for common neural network layers. [More](https://docs.google.com/document/d/1J2BX9jkE5nN5EA1zYRN0lHhdCf1YkiFERc_nwiYqCOA/edit#heading=h.l4gw5vkpumk5).
- We give a detailed example of method 1. [More](https://docs.google.com/document/d/1J2BX9jkE5nN5EA1zYRN0lHhdCf1YkiFERc_nwiYqCOA/edit#heading=h.rp5vcfhyzosa).
- We discuss commonly used number representation formats in ML. [More](https://docs.google.com/document/d/1J2BX9jkE5nN5EA1zYRN0lHhdCf1YkiFERc_nwiYqCOA/edit#heading=h.gjzi5oaefiet).
- We share an estimate of the average performance of GPU cards each year. [More](https://docs.google.com/document/d/1J2BX9jkE5nN5EA1zYRN0lHhdCf1YkiFERc_nwiYqCOA/edit#heading=h.73bi8uuftsk4).
- We share some reported GPU usages in real experiments. [More](https://docs.google.com/document/d/1J2BX9jkE5nN5EA1zYRN0lHhdCf1YkiFERc_nwiYqCOA/edit#heading=h.xalldzr955i3).
- We give a detailed example of method 2. [More](https://docs.google.com/document/d/1J2BX9jkE5nN5EA1zYRN0lHhdCf1YkiFERc_nwiYqCOA/edit#heading=h.nr9q2lgxai4g).
- We compare both methods and conclude they result in similar estimates. [More](https://docs.google.com/document/d/1J2BX9jkE5nN5EA1zYRN0lHhdCf1YkiFERc_nwiYqCOA/edit#heading=h.cvy3rx7nvrkh).
- We discuss the use of profilers to measure compute. [More](https://docs.google.com/document/d/1J2BX9jkE5nN5EA1zYRN0lHhdCf1YkiFERc_nwiYqCOA/edit#heading=h.wee32i38js1o).

# Complete Article
You can find the article [here](https://docs.google.com/document/d/1J2BX9jkE5nN5EA1zYRN0lHhdCf1YkiFERc_nwiYqCOA/edit?usp=sharing). 