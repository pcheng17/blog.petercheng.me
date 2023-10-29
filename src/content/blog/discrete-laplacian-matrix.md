---
title: The discrete Laplacian matrix
created: 2023-10-28 11:36:58 PM
description: 
keywords: 
tags: 
  - math
  - linear-algebra
math: true
toc: false
draft: false
datePublished: 2023-10-29
lastModified:
---

There is a nice and compact way of writing the discrete $N$-d Laplacian matrices on a uniform
grid. I've found these expressions particularly useful in practice; for example, when testing a
linear solver via solving Poisson's equation $\Delta u = f$, one benefits from having a quick way of constructing the matrix on the left-hand side.

## Kronecker product 

First, we need to introduce the **Kronecker product**.  If $A$ is an $m \times n$ matrix and $B$ is a $p \times q$ matrix, then the Kronecker product $A \otimes B$ is the $pm \times qn$ block matrix 

$$
A \otimes B = 
\begin{pmatrix}
a_{11}B & \cdots & a_{1n}B \cr 
\vdots & \ddots & \vdots \cr
a_{m1}B & \cdots & a_{mn}B
\end{pmatrix}
.$$

I see this as distributing $B$ to the elements of $A$.

## 2D discrete Laplacian matrix

Let $\Delta$ be the three-point approximation to the 1D Laplacian with homogeneous Dirichlet
boundary conditions on a uniform grid with grid spacing $h$, i.e., the tridiagonal matrix

$$
\Delta = \frac{1}{h^2}
\begin{pmatrix*}[r]
-2 & 1 & 0 & \cdots & 0 \\
1 & -2 & -1 & \cdots & 0 \\ 
0 & 1 & -2 & \cdots & 0 \\
\vdots & \vdots & \vdots & \ddots & \vdots \\
0 & 0 & 0 & \cdots & -2
\end{pmatrix*}
.$$

Then, for a uniform 2D grid with grid spacing $h$ of size $m \times n$ in lexicographic storage
order, the discrete 2D Laplacian with homogeneous Dirichlet boundary conditions can be written as

$$
I_m \otimes \Delta_n + \Delta_m \otimes I_n
,$$

where the subscripts on $I$, the identity matrix, and $\Delta$ indicate the size of those square
matrices. Note that $h$ is embedded in the definition of $\Delta$.

## 3D discrete Laplacian matrix

Similarly, for a uniform 3D grid with grid spacing $h$ of size $m \times n \times p$ in
lexicographic storage order, the discrete 3D Laplacian with homogeneous Dirichlet boundary
conditions can be written as

$$
I_m \otimes I_n \otimes \Delta_p + I_m \otimes \Delta_n \otimes I_p + \Delta_m \otimes I_n \otimes
I_p
.$$

## $N$-d discrete Laplacian matrix

The formulas above generalize to $N$ dimensions. For a uniform $N$-d grid with grid spacing $h$ of
size $m_1 \times m_2 \times \cdots \times m_N$ in lexicographic storage order, the discrete $N$-d
Laplacian with homogeneous Dirichlet boundary conditions can be written as

$$
\sum_{i=1}^N \left( \bigotimes_{j=1}^{i-1} I_{m_j} \right) \otimes \Delta_{m_i} \otimes \left(
\bigotimes_{j=i+1}^N I_{m_j} \right)
.$$
