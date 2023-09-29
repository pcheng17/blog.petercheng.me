---
title: Cholesky factorization
date: 2022-12-09
description: The Cholesky factorization is a decomposition of a Hermitian, or symmetric, positive definite matrix into the product of a lower triangular matrix and its conjugate transpose.
keywords:
tags:
- math
- linear-algebra
math: true
toc: false
draft: false
pubDate: 2022-12-10
lastmod:
---

Before we introduce the Cholesky factorization, let's define some of the key words that will be used. Let $A \in \mathbb{C}^{n \times n}$.

- $A$ is **Hermitian** if $A^{\ast} = A$, where $A^{\ast}$ is the conjugate transpose of $A$, i.e. $[A^{\ast}]_{ij} = \overline{A_{ji}}$. Note that if $A$ is real, then $A$ being Hermitian just means that $A$ is **symmetric**.
- $A$ is **positive definite** if $x^T A x > 0$ for all $x \neq 0$. In the case of $A$ begin real, this is equivalent to $A$ having only positive (real) eigenvalues.

Given a Hermitian positive definite matrix, we can find its unique Cholesky factorization

$$
A = LL^{\ast},
$$

where $L$ is lower triangular. This is particularly important in the context of solving linear
systems. Suppose we'd like to solve the system $Ax=b$. If $A$ is Hermition positive definite, then

$$ 
Ax = b \quad \implies \quad LL^{\ast}x = b. 
$$

To find our solution, we first solve the system $Ly = b$ for $y$ using forward substitution, and
then solve $L^{\ast}x = y$ for $x$ using backward substitution. This procedure yields a
straightforward **direct solve** technique.

Note that the Cholesky decomposition is a case of the more general LU decomposition, which factors a matrix into a product of a lower and upper triangular matrix, because $L^{\ast}$ is an upper triangular matrix. However, if the matrix being factored is Hermitian positive definite, then the Cholesky factorization is preferred as it is computationally cheaper (taking advantage of symmetry) and is more stable without the need to pivot (taking advantage of positive definiteness).

There is a variant of the classic Cholesky factorization, which is the decomposition

$$
A = LDL^{\ast},
$$

where $L$ is a lower unit triangular matrix (the diagonal elements are all 1s), and $D$ is a
diagonal matrix. The advantage of this variant is that the factorization algorithm avoids computing
square roots. However, in the context of solving linear systems, this factorization yields the same
solution technique.
