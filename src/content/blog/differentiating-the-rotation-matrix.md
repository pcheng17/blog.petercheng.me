---
title: Differentiating the rotation matrix
created: 2025-08-09 10:42:20 PM
description: How to differentiate the rotation matrix with respect to axis-angle.
keywords:
tags:
  - math
  - calculus
math: true
toc: false
draft: true
datePublished: 2025-08-09
lastModified:
---

Let $R : \mathbb{R}^3 \to \text{SO}(3)$ be defined as
$$
    R(\nu) = \exp([\nu]_{\times}),
$$
where $\exp : \mathfrak{so}(3) \to \text{SO}(3)$ is the well-known exponential map that takes elements of the Lie
algebra $\mathfrak{so}(3)$ to elements of the Lie group $\text{SO}(3)$. $R(\nu)$ is the rotation
matrix that rotates vectors about the axis $\nu$ through $||\nu||$ radians, where $||\cdot||$ is the
standard $L_2$ norm. Note that $\nu$ is typically referred to as an **axis-angle** vector, which is
one technique for parametrizing rotations.

The goal of this blog post is to compute the derivative of $R$ with respect to $\nu$. However, in
the interest of not having to deal with the rank-3 tensor that is $\frac{\partial R}{\partial \nu}$,
we will consider the following derivative instead, which is just as useful:
$$
    \frac{\partial}{\partial \nu} (R(\nu) z),
$$
where $z \in \mathbb{R}^3$ is fixed and arbitrary. Note that this derivative now produces just a
rank-2 tensor, i.e., a matrix. Let's begin!

We begin by multiplying the expression by the identity in the following way:
$$
    \frac{\partial}{\partial \nu} (R(\nu) z) = \exp([\nu]_{\times}) \exp(-[\nu]_{\times})
        \frac{\partial}{\partial \nu} ( \exp([\nu]_{\times}) z).
$$
Then, we may play another trick of replacing a function by the integral of its derivative with
respect to an auxiliary variable $s$,
$$
    \frac{\partial}{\partial \nu} (R(\nu) z) = \exp([\nu]_{\times})
        \int_0^1 \frac{d}{ds} \left[ \exp(-s [\nu]_{\times}) \frac{\partial}{\partial \nu} ( \exp([\nu]_{\times}) z)\right] ds
$$
