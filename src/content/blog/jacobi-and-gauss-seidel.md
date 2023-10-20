---
title: Jacobi and Gauss-Seidel
created: 2023-01-12
description: Jacobi and Gauss-Seidel are two popular iterative methods for solving systems of linear equations. In this post, we will present both methods, quickly discuss convergence properties, and also present a generic framework for the class of methods to which Jacobi and Gauss-Seidel belong.
keywords: 
tags:
  - math
  - linear-algebra
math: true
toc: false
draft: false
datePublished: 2023-10-19
lastModified:
---

Suppose we are interested in solving an $n \times n$ [system of linear equations](https://en.wikipedia.org/wiki/System_of_linear_equations) of the form $Ax=b$. Generally speaking, there are two classes of solvers that we can consider: **direct** and **iterative** solvers. **Direct** solvers aim to directly compute the numerically correct solution, like using an LU factorization, whereas **iterative** solvers aim to produce better and better solutions every iteration. The choice between these two techniques comes down to the problem at hand, and everything that should be considered to make the decision between one or the other is well-beyond the scope of this post.

Instead, let's suppose that we've already decided that an iterative approach is best suited for solving our linear system $Ax=b$, which sets the stage for our discussion of the **Jacobi** and **Gauss-Seidel** solvers.

## Jacobi method

Let $A=D+L+U$, where $D$ contains the diagonal elements of $A$, and $L$ and $U$ and the lower and upper triangular portions of $A$, respectively. Then, we may rewrite $Ax=b$ as the following:
$$
\begin{equation}
(D+L+U)x=b \quad \implies \quad x=D^{-1}(b-(L+U)x)
\end{equation}
$$
Observe that the solution to $Ax=b$ is a fixed-point to $(1)$, so to this end, applying fixed-point
iteration yields 
$$ 
x^{(k+1)} = D^{-1}\left(b-(L+U)x^{(k)}\right),
$$ 
which is the **Jacobi** method. Note that the matrix inversion of the Jacobi method is simply dividing by the diagonal elements of $A$.

Another way to think about the Jacobi method is as follows: to find the $i$th component of the next iterate, i.e., $x_i^{(k+1)}$, we compute
$$ 
x_{i}^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j \neq i} a_{ij}x_j^{(k)}\right). 
$$
In other words, the $i$-th component of the next iterate comes from solving the $i$-th equation for the $i$-th variable while holding all other variables fixed at their current iterate value. From this point of view, it might now be obvious that the Jacobi method is *embarrassingly parallel*, that is, it takes little to no effort to parallelize the tasks of producing the next iterate.

### Convergence

Since the Jacobi method is an iterative method, we must at least mention conditions for when the method converges. Like any iterative matrix scheme, the method will converge if the spectral radius of the iteration matrix is less than 1, i.e.,
$$
\rho \left( D^{-1}(L+U) \right) < 1.
$$
A *sufficient* condition to meet this requirement is for $A$ to be strictly diagonally dominant, i.e.,
$$ 
|a_{ii}| > \sum_{j \neq i} |a_{ij}|. 
$$

## Gauss-Seidel method

Like the Jacobi method, the Gauss-Seidel is also derived from casting the original problem of
solving $Ax=b$ into a fixed-point iteration scheme. However this time, we rewrite $Ax=b$ as the
following:

$$
\begin{equation}
(D+L+U)x=b \quad \implies \quad x=(D+L)^{-1}(b-Ux)
\end{equation}
$$

Using fixed-point iteration on $(2)$ yields

$$ 
x^{(k+1)} = (D+L)^{-1}\left(b-Ux^{(k)}\right),
$$

which is the **Gauss-Seidel** method. Note that the matrix inversion of the Gauss-Seidel method is forward substitution.

Another way to think about the Gauss-Seidel method is as follows: to find the $i$th component of the next iterate, we compute
$$ 
x_{i}^{(k+1)} = \frac{1}{a_{ii}} \left( b_i - \sum_{j < i} a_{ij}x_j^{(k+1)} - \sum_{j > i} a_{ij}x_j^{(k)}\right) 
$$
This may look complicated, but basically, it says that the $i$th component of the next iterate comes from solving the $i$th equation for the $i$th variable while using all of the components that have already been updated from the previous equations. Note that this means we are forced to update each component of our next iterate sequentially. However, it is still possible to achieve some level of parallelization with Gauss-Seidel using a technique known as graph coloring to partition the tasks.

### Convergence

*Sufficient* conditions for this method to converge are (1) $A$ is symmetric positive-definite, or (2) $A$ is strictly diagonally dominant.

## An alternative way to think about these methods

Earlier, we derived both the Jacobi and Gauss-Seidel methods from a fixed-point iteration standpoint. However, with a clever bit of arithmetic, we can rewrite both methods in a slightly different form that is worth being familiar with.

First, note that both of these methods can be generalized by considering a decomposition of the matrix $A=R+T$, where for the Jacobi method, $R=D$ and $T=L+U$, and for the Gauss-Seidel method, $R=D+L$ and $T=U$. In other words, these two methods are part of a broader class of methods based on [matrix splitting](https://en.wikipedia.org/wiki/Matrix_splitting). It then follows that the fixed-point iteration schemes of both methods can be written as
$$
\begin{equation}
x^{(k+1)} = R^{-1}\left(b-Tx^{(k)}\right).
\end{equation}
$$
Now, let $r^{(k)}$ be the residual of the $k$-th iterate of $(3)$, i.e.,
$$
r^{(k)} = b - Ax^{(k)}.
$$
Then,
$$
\begin{align*}
R^{-1}\left(b-Tx^{(k)}\right) &= R^{-1}\left(b-(R+T)x^{(k)}+Rx^{(k)}\right) \\\\ &=
R^{-1}\left(r^{(k)}+Rx^{(k)}\right)
\end{align*}
$$
Therefore, $(3)$ can be rewritten as

$$
\begin{equation}
x^{(k+1)} = x^{(k)} + R^{-1}r^{(k)}.
\end{equation}
$$

This is a worthwhile observation because it tells us that iterates of methods of the form $(3)$ are a perturbation of the previous iterate by a function of its residual.
