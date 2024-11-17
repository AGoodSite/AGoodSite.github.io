---
layout: page
permalink: /research/
title: research
description: Philosophers interpret the world in various ways. The point, however, is to change it.
nav: true
nav_order: 7
---
Since 2021 I have been conducting research in algebraic geometry. Before then I was primarily interested in category theory. 

<h3> For the curious, </h3>

algebraic geometers study shapes which can be defined as the set of solutions to polynomial equations. For instance, the *zero set* of a single polynomial in two variables, $$ f(x,y) $$, is the set of all points $$ (x,y) $$ such that $$ f(x,y)=0 $$. This defines a curve in the plane, such as the circle of radius $$ r $$ which is the set of solutions to $$ x^2 + y^2 - r^2 = 0 $$. When the polynomial $$ f(x,y) $$ changes, so does the curve defined by $$ f(x,y) =0 $$. By fixing a degree $$ d $$ and treating the coefficients $$ c_{i,j} $$ of 

$$ 
f(x,y) = c_{0,0} + c_{1,0} x + c_{0,1} y + c_{2,0} x^2 + c_{1,1} xy + c_{0,2} y^2 + c_{3,0} x^3 + \dots + c_{0,d}y^d
$$

 as variables we obtain a space of parameters in which every point corresponds to a plane curve. Questions of interest include: How does the geometry of the parameter space reflect the geometry of the curves it parametrizes? What are the ways in which the generic curves with well behaved geometry can gradually degenerate? And how are spaces of plane curves related to other (moduli) spaces of geometric objects?

 <h3> Technically, </h3>

 in my thesis I construct GIT compactifications of the moduli space of smooth, projective, plane curves of degree $$ d $$ with $$ n $$ distinct marked points. These spaces are obtained as geometric quotients of a parameter space of marked plane curves $$ \mathcal{C}_{n,d} \subset \mathbb{P}(\Gamma (\mathcal{O}(d), \mathbb{P}^2 )) \times (\mathbb{P}^2)^n $$ by the group $$ SL(3) $$ acting as linear automorphisms of the plane. To obtain a geometric quotient $$ \overline{M}_{g(d),\vec{w}}^{git} := \mathcal{C}_{n,d}^{ss} //_{\vec{w}} SL(3) $$ one must first remove from $$ \mathcal{C}_{n,d} $$ a closed locus of *unstable* marked curves. It is of interest that there are several choices of stability conditions one can make to determine which locus to remove from $$ \mathcal{C}_{n,d} $$, corresponding to a choice of an $$ SL(3)- $$ linearized line bundle on $$ \mathcal{C}_{n,d} $$. The foundational research of [Thaddeus](https://arxiv.org/abs/alg-geom/9405004) and [Dolgachev and Hu](https://arxiv.org/abs/alg-geom/9402008) on Variations of Geometric Invariant Theory quotients (VGIT) describes how such a choice of line bundle corresponds to the choice of a vector $$ \vec{w} $$ in a finite-dimensional, rational, polyhedral cone. This cone is divided by hyperplanes into a finite set of convex, polyhedral *chambers* such that $$ \vec{w_1} $$ and $$ \vec{w_2} $$ lie in the same chamber if and only if $$ \overline{M}_{g(d), \vec{w_1}}^{git} \cong \overline{M}_{g(d),\vec{w_2}}^{git} $$ . Furthermore, if $$ \vec{w_2} $$ and $$ \vec{w_3} $$ lie in adjacent chambers then there are explicit birational morphisms 
$$ \overline{M}_{g(d),\vec{w_2}}^{git} \dashleftarrow \dashrightarrow \overline{M}_{g(d),\vec{w_3}}^{git}  $$ closely related to the birational morphisms which appear in the Minimal Model Program of algebraic geometry. I give explicit description of the cone of line bundles $$ \vec{w} $$ that give rise to a suitable moduli space $$ \overline{M}_{g(d), \vec{w}}^{git} $$. Special attention is paid to the case $$ d=3 $$ of marked elliptic curves. In this case I give a complete description of the wall and chamber decomposition and the wall-crossing behavior. I also discuss how this space is related to other moduli spaces such as $$ \overline{M}_{1,n} $$ and the moduli space of cubic surfaces with a marked Eckhardt point.

See below for further details. If nothing appears, click [here](https://AGoodSite.github.io\assets\pdf\markedcubicintro.pdf).

<embed src="https://AGoodSite.github.io\assets\pdf\markedcubicintro.pdf" width="1000" height="750" 
 type="application/pdf">

<!-- <object data="AGoodSite.github.io\assets\pdf\markedcubicintro.pdf" type="application/pdf" width="8000px" height="8000px">
    <embed src="https://AGoodSite.github.io\assets\pdf\markedcubicintro.pdf" type="application/pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="https://AGoodSite.github.io\assets\pdf\markedcubicintro.pdf">Download PDF</a>.</p>
    </embed>
</object> -->






<!-- My thesis research is on compact moduli spaces of curves. Essentially this is an answer to the question "what are all the one dimensional shapes that exist?" To interpret this question mathematically we must make it more precise. We get a wealth of different answers depending on *how* we make the question more precise.

Algebraic geometers are interested in spaces which are the solutions to polynomial equations. For instance, a circle is the set of points $$ (x,y) $$ which are solutions to the quadratic equation $$ x^2 + y^2 = 25 $$. This circle is an algebraic curve. In particular, it is a plane curve of degree $$ 2 $$ because it is the zero set of the **quadratic** polynomial $$ x^2 + y^2 - 25 $$ .

To an algebraic geometer a reasonable answer to the question "what are all the algebraic curves that exist?" should itself be a shape. In this shape, known as a *moduli space* of curves, each point should correspond to an algebraic curve so that walking along a path in this space then corresponds to tracing out a family of continuously changing algebraic curves. For examples of the geometric nature of moduli spaces, [this example](https://en.wikipedia.org/wiki/Moduli_space#Motivation) describes how the moduli space of circles is the positive half of the number line. For a more in-depth illustration using the moduli space of triangles, see section 0.2.1 in [Jarod Alper's notes](https://sites.math.washington.edu/~jarod/moduli.pdf#page=21) on moduli spaces.

The moduli space $$ \mathcal{M}_{g,n} $$ parametrizes smooth curves of genus $$ g $$ with $$ n $$ distinct marked points. However, this moduli space is not compact. The classic compactification is Deligne and Mumford's moduli space of stable curves $$ \overline{\mathcal{M}}_{g,n} $$ , which compactifies $$ \mathcal{M}_{g,n} $$ by adding a "boundary" corresponding to curves with nodal points, the most mild type of singularity, as the limits of families of smooth curves. While $$ \overline{\mathcal{M}}_{g,n} $$ is the standard compact moduli space of curves, many alternative compactifications are known which allow smooth curves with distinct marked points to degenerate in different ways. For instance, [Hasset's moduli spaces of weighted pointed stable curves](https://arxiv.org/abs/math/0205009) allow points to collide as long as they do not have too much weight. Kontsevich, on the other hand, constructs a [moduli space](https://arxiv.org/abs/hep-th/9405035) whose points correspond to a marked curve $$ (C, x_1, \dots , x_n) $$ and a map from $$ (C, x_1, \dots , x_n) $$ to a fixed homology class in projective space, in order to answer enumerative geometry questions arising from Mirror Symmetry. Each of these moduli spaces reinterprets the question "what are all the algebraic curves that exist?" by describing which degenerations of smooth curves with distinct marked points are stable enough to appear in the boundary.

My approach to the question is to restrict attention to curves in the projective plane $$ \mathbb{P}^2 $$. As in the classical case, there is a noncompact moduli space of smooth plane curves of a given genus $$ g $$ with $$ n $$ distinct marked points. Instead of a single compactification, however, I use a powerful set of tools known as Variation of Geometric Invariant Theory (VGIT) quotients to construct a series of distinct, interrelated, compactifications of this moduli space. The compactifications, denoted $$ \mathcal{M}^{\vec{w}}_{n,d} $$, are moduli spaces for plane curves of degree $$ d $$ with $$ n $$ marked points, which are allowed to have certain prescribed pathologies, such as singularities or colliding marked points, depending on a vector $$ \vec{w} $$.

I give explicit inequalities for the cone of vectors $$ \vec{w} $$ which may be used to construct modular compactifications,

> #### Theorem
> There is a convex, polyhedral cone $$ C(n,d) $$ in a finite dimensional vector space of parameters, such that for each $$ \vec{w} \in C(n,d) $$, $$ \mathcal{M}^{\vec{w}}_{n,d} $$ is a moduli space of plane curves of degree $$ d $$ with $$ n $$ marked points.

## Wall-Crossing
A fascinating result of VGIT relates the convex geometry of the cone of parameters $$ C(n,d) $$ to the algebraic geometry of the moduli spaces constructed from them, $$ \mathcal{M}_{n,d}^{\vec{w}} $$ . Namely, results of [Dolgachev and Hu](https://arxiv.org/abs/alg-geom/9402008) in a more general context prove that $$ C(n,d) $$ is divided by hyperplanes into a finite set of convex, polyhedral *chambers* such that $$ \vec{w_1} $$ and $$ \vec{w_2} $$ lie in the same chamber if and only if $$ \mathcal{M}_{n,d}^{\vec{w_1}} \cong \mathcal{M}_{n,d}^{\vec{w_2}} $$ . Furthermore, if $$ \vec{w_2} $$ and $$ \vec{w_3} $$ lie in adjacent chambers then there are explicit birational morphisms 
$$ \mathcal{M}_{n,d}^{\vec{w_2}} \dashleftarrow \dashrightarrow \mathcal{M}_{n,d}^{\vec{w_3}} $$ closely related to the birational morphisms which appear in the Minimal Model Program of algebraic geometry ([Thaddeus 1998](https://arxiv.org/abs/alg-geom/9405004)).

Of special interest are the plane curves of degree $$ d=3 $$ which are elliptic curves, having genus $$ g=1 $$. I give an explicit description of the wall and chamber decomposition of the cone $$ C(n,3) $$ for an arbitrary number of marked points $$ n $$. In particular, I describe the permissible degenerations of smooth cubics with distinct marked points parametrized by $$ \mathcal{M}^{\vec{w}}_{n,3} $$ for each chamber, and how these criteria change as the vector $$ \vec{w} $$ crosses a wall from one chamber to another. For instance, I find chambers in which the parametrized cubics may acquire singularities of type $$ A_2, A_3, $$ and even $$ D_4 $$. In another chamber the moduli space parametrizes plane cubics in which all the marked points are allowed to collide. Neither of these behaviors may be observed in the classical compactifications $$ \overline{\mathcal{M}}_{g,n} $$ , which parametrizes curves with at worst nodal (type $$ A_1 $$ ) singularities and distinct marked points! -->