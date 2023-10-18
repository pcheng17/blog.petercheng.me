---
title: Cross product as a matrix multiplication
date: 2023-10-17
description: The cross product of two vectors can be expressed as a product of a skew-symmetric matrix and a vector.
keywords:
tags:
- math
- linear-algebra
math: true
toc: false
draft: false
pubDate: 2023-10-18
lastmod:
---

## Cross product

As a quick refresher, the cross product of two vectors $u, v \in \R^3$ is defined as follows:
$$
  u \times v = 
  \begin{vmatrix*}
    \hat{i} & \hat{j} & \hat{k} \\
    u_1 & u_2 & u_3 \\
    v_1 & v_2 & v_3
  \end{vmatrix*} =
  \begin{pmatrix}
    u_2 v_3 - u_3 v_2 \\
    u_3 v_1 - u_1 v_3 \\
    u_1 v_2 - u_2 v_1
  \end{pmatrix}
,$$
where $u = (u_1, u_2, u_3)$ and $v = (v_1, v_2, v_3)$. The expression in the center above represents the determinant of the $3 \times 3$ matrix. It is important to note that the vector $u \times v$ is orthogonal to both $u$ and $v$.

Now, observe that the cross product can be expressed as a product of a skew-symmetric matrix and a
vector:
$$
  u \times v = u^{\times} v = 
  \begin{pmatrix}
    0 & -u_3 & u_2 \\
    u_3 & 0 & -u_1 \\
    -u_2 & u_1 & 0
  \end{pmatrix} 
  \begin{pmatrix}
    v_1 \\
    v_2 \\
    v_3
  \end{pmatrix}
,$$
where I'm defining $u^{\times}$ to be the skew-symmetric matrix shown just above. A matrix is
skew-symmetric if $A^T = -A$. Note that, by the anticommutative property of the cross product, i.e.,
$u \times v = -v \times u$, we may also write
$$
  u \times v = - v \times u = -v^{\times} u =
  -\begin{pmatrix}
    0 & -v_3 & v_2 \\
    v_3 & 0 & -v_1 \\
    -v_2 & v_1 & 0
  \end{pmatrix} 
  \begin{pmatrix}
    u_1 \\
    u_2 \\
    u_3
  \end{pmatrix}
$$
