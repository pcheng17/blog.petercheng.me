---
title: "Finding the eigenvalues of a symmetric $3 \times 3$ matrix"
created: 2023-03-26 11:09:00 PM
description:
keywords:
tags:
  - math
  - linear-algebra
math: true
toc: false
draft: true
datePublished:
lastModified:
---

In this blog post, we will derive a numerically robust method for finding the eigendecomposition of
real-valued $3 \times 3$ symmetric matrices.

## Background

Let $A$ be a real-valued $3 \times 3$ symmetric matrix, i.e.

$$
A =
\begin{pmatrix}
a_{00} & a_{10} & a_{20} \\
a_{10} & a_{11} & a_{21} \\
a_{20} & a_{21} & a_{22} \\
\end{pmatrix}.
$$

Finding the eigenvalues of $A$ amounts to finding the roots of the characteristic polynomial of
$A$, $p_A(t) = \det(A - tI)$, which, in general, poses many numerical challenges. For example, how
does one robustly handle repeated roots?

Once the eigenvalues, $\lambda_1, \lambda_2, \lambda_3$ are found, the eigenvectors of $A$ will
satisfy $Av_i = \lambda_i v_i$, where $v_i \neq 0$, which is equivalent to saying that each $v_i$
is in the kernel of $A - \lambda_i I$.

## The method

### Setup

The idea behind this method is to construct a proxy matrix $B$ such that the eigendecomposition of
$B$ is not only easier to find, but will also inform us of the eigendecomposition of $A$. To this
end, let $p>0$ and $q$ be scalars, and let $B$ be a symmetric matrix such that

$$
A = pB + qI.
$$

Note that $A$ and $B$ share the same eigenvectors, for if $v$ is an eigenvector of $A$ associated
with eigenvalue $\lambda$, then

$$
\lambda v = A v = pBv + qv \quad \implies \quad Bv = \frac{\lambda - q}{p} v.
$$

Thus, $v$ is an eigenvector of $B$ with associated eigenvalue $\mu = (\lambda - q)/p$, and it
follows that $\lambda = p\mu + q$. In other words, if we can find the eigendecomposition of $B$,
then we've also done so for $A$.

Now, the question is, how should we choose $p$ and $q$ so that finding the eigendcomposition of $B$
is easier?

### Details

Let $q = \operatorname{tr}(A)/3$, and $p = \sqrt{\frac{\operatorname{tr}((A - qI)^2)}{6}}$. Earlier,
we made the assumption that $p>0$, and so we must make sure $p \neq 0$.

