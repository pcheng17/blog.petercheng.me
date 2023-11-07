---
title: The discrete L2 norm
created: 2023-11-06 09:55:38 PM
description: A short blog post on the definition of the discrete L2 norm and how it relates to the continuous L2 norm.
keywords: 
tags:
  - math
math: true
toc: false
draft: false
datePublished: 2023-11-05
lastModified:
---

If a vector $\mathbf{u}^h$ with components $u_i^h$ is associated with a $d$-dimensional domain with uniform grid spacing $h$, then its discrete $L^2$ norm is given by

$$
||\mathbf{u}^h||_{h} = \left(h^{d}\sum_{i} (u_i^h)^2 \right)^{1/2},
$$

which is the usual Euclidean vector norm but scaled by a factor of $h^{d/2}$. The scaling factor makes the discrete $L^2$ norm a consistent approximation to the continuous $L^2$ norm of a function $u(\mathbf{x})$, which is given by

$$
||u||_{2}  = \left( \int_{\Omega} |u(\mathbf{x})|^2 \, d\mathbf{x} \right)^{1/2}.
$$

## References

- Briggs et al., A Multigrid Tutorial, pg 55
