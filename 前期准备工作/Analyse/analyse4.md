**id:**

0

**title:**

**content:**

**prove:**

**remark:**

**example:**

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

#

**id:**

1

**title:**

definition de norme

**content:**

Soit $E$ un $\mathbb{K}$-espace vectoriel
On appelle
\index{norme}%
norme (\mycn{范数}) sur $E,$ toute application $N$ de $E$ dans $\mathbb{R}_{+}$
v\'{e}rifiant :

\begin{enumerate}
\item $ \forall x\in E$,    $N\left(  x\right)
=0\Rightarrow x=0$ (s\'eparation de la norme)
\item $\forall x\in E$,  $\forall\lambda\in
\mathbb{K}$,  $N\left(  \lambda x\right)  =\left\vert \lambda
\right\vert N\left(  x\right)  $ (homog\'{e}n\'{e}it\'{e} de la norme)
\item $  \forall x,y\in E,  \quad N\left(  x+y\right)  \leq
N\left(  x\right)  +N\left(  y\right)  $ (in\'{e}galit\'{e} triangulaire \mycn{三角不等式})
\end{enumerate}
On dit que $(E,\|\ \|)$ est un espace vectoriel norm\'e

**prove:**

**remark:**

**example:**

Soit $E$ un $\mathbb{K}$-espace vectoriel.
\begin{enumerate}
\item Si $E$ est de dimension finie rapport\'e \`a une base ${\cal 
B}=(e_1,\cdots,e_n)$.
Soit $x=(x_1,\cdots,x_n)$ un vecteur de $E$ dans la base ${\cal B}$.
\begin{enumerate}
\item L'application $\Vert\ \Vert_2:
(x_1,\cdots,x_n)\mapsto\Vert x\Vert_2=\biggl(\sum_{i=1}^n\vert 
x_i\vert^2\biggr)^\frac{1}{2}$
est une norme.
\item L'application $\Vert\ \Vert_1:
(x_1,\cdots,x_n)\mapsto |x_1|+\cdots+|x_n|$ est une norme.
\item L'application $\Vert\ \Vert_\infty:
(x_1,\cdots,x_n)\mapsto \sup\limits_{i\in[\![1,n]\!]}|x_i|$ est une norme, 
souvent appel\'ee la norme sup ou norme ``infini''.
\end{enumerate}
\item Soit $I$ un intervalle non vide non r\'eduit \`a un point. 
\begin{enumerate}
\item $\|\ \|_2:f\mapsto\|f\|_2= \sqrt{\dint_I|f(t)|^2\,dt}$ (norme de la 
convergence quadratique) sur ${\cal L}^2(I,\mathbb R)$.
\item $\|\ \|_1:f\mapsto\|f\|_1= \dint_I|f(t)|\,dt$ (norme de la convergence 
moyenne) sur ${\cal L}^1(I,\mathbb R)$.
\item $\|\ \|_\infty:f\mapsto\|f\|_\infty= \sup\limits_{[a,b]}|f(t)|$ que l'on 
notera aussi parfois: $\|\ \|_\infty^{[a,b]}$: sur ${\cal C}^0([a,b],\mathbb R)$, o\`u $I=[a,b]$  (norme de la convergence 
uniforme).
\end{enumerate}
\end{enumerate}

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

范数

**author:**

Simon

#

**id:**

2

**title:**

definition de bornee

**content:**

Soit $E$ un $\mathbb{K}$-espace vectoriel, $I\neq\emptyset$ un intervalle de $\mathbb{R}$ et $f:I\rightarrow E$ une fonction. On dit que $f$ est born\'ee s'il existe un r\'eel $M>0$ tel que $\forall x\in I$, $\| f(x)\|\leq M$. On note ${\cal B}(I,E)$ l'ensemble des fonctions born\'ees de $I$ dans $E$.

**prove:**

**remark:**

**example:**

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

# 

**id:**

3

**title:**

proposition de bornee

**content:**

L'ensemble ${\cal B}(I,E)$ est un sous-espace vectoriel de l'ensemble des fonctions de $I$ dans $E$ et l'application ${\cal B}(I,E)\rightarrow \mathbb{R}_+$, $f\mapsto \sup\limits_{x\in I}\|f(x)\|$ est une norme not\'ee $\|\ \|_\infty$ et que l'on appelle norme sup, ``infini'' ou norme de la convergence uniforme.

**prove:**

${\cal B}(I,E)$ est bien un sous-espace vectoriel (exercice).\\
Si $f\in{\cal B}(I,E)$, l'ensemble $\{\|f(x)\|, x\in I\}$ est une partie non vide
born\'ee de $\mathbb{R}$ et donc admet une borne sup\'erieure, ce qui montre que $\|\ \|_\infty$ est bien d\'efinie, \`a valeurs dans $\mathbb{R}_+$.\\
Il est clair que si $\|f\|_\infty=\sup\limits_{x\in I}\|f(x)\|=0$, alors $f(x)=0$ pour tout $x\in I$ et $f$ est bien la fonction nulle.\\
L'homog\'en\'eit\'e de la norme ne pose pas de probl\`eme et l'in\'egalit\'e triangulaire est une cons\'equence imm\'ediate de celle de $E$:
$$\forall x\in I,\ \|f(x)+g(x)\|\leq \|f(x)\|+\| g(x)\|\Rightarrow \|f(x)+g(x)\|\leq \sup_{x\in I}\|f(x)\|+\sup_{x\in I}\|g(x)\|.$$
Par d\'efinition de la borne sup\'erieure, on obtient $\|f+g\|_\infty\leq \|f\|_\infty+\|g(x)\|_\infty$.

**remark:**

Vous verrez en Alg\`ebre 3 que si $E$ est un $\mathbb{R}$-espace vectoriel muni d'un produit scalaire $\varphi$ (forme bilin\'eaire sym\'etrique d\'efinie positive), alors $\|\ \|:x\mapsto \sqrt{\varphi(x,x)}$ d\'efinit une norme sur $E$. On dit que $\|\ \|$ provient d'un produit scalaire\\ 
 De mani\`ere strat\'egique, si vous voyez (intuitez) qu'une norme provient d'un produit scalaire, il est toujours plus rapide de passer par le produit scalaire: ceci montre en particulier que la norme euclidienne est une norme.\\
 La norme sup ne provient pas d'un produit scalaire.

**example:**



**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

# 

**id:**

4

**title:**

definition de distance

**content:**

Si $\|\ \|$ est une norme sur $E,$ on appelle distance (\mycn{距离}) associ\'{e}e \`{a} $\|\ 
\|$
l'application 
$$d:\left\{
\begin{array}{l}%
E\times E\rightarrow\mathbb{R}_{+}\\
\left(  u,v\right)  \mapsto\left\Vert v-u\right\Vert
\end{array}
\right.  .$$​ 

\begin{enumerate}
\item $\left(  \forall v\in E\right)  \quad d\left(  u,v\right)
=0\Leftrightarrow u=v$

\item $\left(  \forall u,v\in E\right)  \quad d\left(  u,v\right)  =d\left(
v,u\right)  $

\item $\left(  \forall u,v,w\in E\right)  \quad d\left(  u,w\right)  \leqslant
d\left(  u,v\right)  +d\left(  v,w\right)  $
\end{enumerate}

**prove:**

**remark:**

L'in\'{e}galit\'{e} triangulaire entra\^{\i}ne 
\begin{enumerate}
\item[i)]  $ d\left(  a,b\right)
\leqslant d\left(  a,c\right)+d\left(  b,c\right)$
\item[ii)]  $ d\left(  b,c\right)
\leqslant d\left(  a,c\right)+d\left(  a,b\right)$
\end{enumerate}
dont on d\'eduit l'encadrement
 $$\left\vert d\left(  a,b\right)  -d\left(  b,c\right)  \right\vert
\leqslant d\left(  a,c\right) \leq d\left(  a,b\right)  +d\left(  b,c\right). $$

**example:**

Dans $\mathbb{R}^2$ tracer le cercle de centre $0$ et de rayon
$1$ pour les distance associ\'ees aux normes ci-dessous:
\begin{enumerate}
\item $\Vert x\Vert_2=\sqrt{x_1^2+x_2^2}$.
\item $\Vert x\Vert_\infty = \max (|x_1,|x_2|)$
\item $\Vert x\Vert=|x_1|+|x_2|$
\end{enumerate}
Pour chacune de ces normes, la sph\`ere unit\'e est ${\cal S}_i=\{x\in E$, $\|x\|_i=1\}$.\\
La forme change, mais on verra qu'en dimension finie, si une suite $(u_n)$ converge pour une norme, elle convergera pour toutes les normes (on dit que les normes sont \'equivalentes).
\begin{center}
 \includegraphics[scale=0.3,clip,viewport=20 45 610 540]{figures/07image02.pdf}
\end{center}
La norme $\|\ \|_p=\bigl(|x_1|^p+\cdots+|x_n|^p\bigr)^{1/p}$ permet de passer de 
${\cal S}_2$, un cercle, \`a ${\cal S}_{\infty}$, un carr\'e (quadrature du cercle). 

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

#

**id:**

5

**title:**

definition d'une structure d'espace vectoriel norme

**content:**

Soit $(E_i,\|\ \|_i)_{i\in[\![1,n]\!]}$ une famille finie d'espaces vectoriels norm\'es.
On d\'efinit sur $E=\displaystyle\prod_{i=1}^n E_i$ une structure d'espace vectoriel norm\'e en posant
$$\|(x_1,\cdots,x_n)\|=\max_{i\in[\![1,n]\!]}\|x_i\|_i.$$

**prove:**

**remark:**

L'espace produit a une structure naturelle d'espace vectoriel (d\'ej\`a vu). 
Il faut v\'erifier que l'on d\'efinit bien une norme. On proc\`ede par r\'ecurrence sur $n$.\\
Le cas $n=2$: l'application est bien \`a valeurs positives, l'homog\'en\'eit\'e de la norme provient de celle des normes $\|\ \|_1$ et $\|\ \|_2$. De plus, $\|(x_1,x_2)\|=0$ implique $\|x_1\|_1=\|x_2\|_2=0$ et donc $x_1=0_{E_1}$ et $x_2=0_{E_2}$ et donc $(x_1,x_2)=(0_{E_1},0_{E_2})$​.\\
Enfin, pour l'in\'egalit\'e triangulaire
\begin{eqnarray*}
\|(x_1,x_2)+(y_1,y_2)\|&=&\max(\|x_1+y_1\|_1,\|x_2+y_2\|_2)\\
&\leq&\max(\|x_1\|_1+\|y_1\|_1,\|x_2\|_2+\|y_2\|_2)\\
&\leq&\max(\max(\|x_1\|_1,\|x_2\|_2)+\max(\|y_1\|_1,\|y_2\|_2),\\
&&\max(\|x_1\|_1,\|x_2\|_2)+\max(\|y_1\|_1,\|y_2\|_2))\\
&=&\max(\|x_1\|_1,\|x_2\|_2)+\max(\|y_1\|_1,\|y_2\|_2)
\end{eqnarray*}
L'h\'er\'edit\'e est imm\'ediate.

Un produit quelconque d'espaces vectoriels (index\'e par un ensemble non n\'ecessairement fini) a une structure naturelle d'espaces vectoriels, mais pas d'espace vectoriel norm\'e: le maximum d'une famille infinie n'existe pas n\'ecessairement!

**example:**

$(\mathbb R^n,\|\ \|_\infty)$ peut \^etre vu comme le produit de $\mathbb R^p\times \mathbb R^{n-p}$ munis des normes sup ou encore comme le produit de $n$ fois $\mathbb R$.

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

#

**id:**

6

**title:**

definition de bornee et diametre

**content:**

Une partie non vide $X$ de $\left(  E,\|\ \|\right)$ est born\'ee s'il existe 
$M\in\mathbb{R}$ tel que $\forall x\in X$, $\|x\|\leq M$.
Si $X$ est une partie born\'ee, on appelle diam\`etre de $X$ le r\'eel positif
$$\delta(X)=\sup_{(x,y)\in X^2}\|y-x\|$$

**prove:**

**remark:**

**example:**

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

#

**id:**

7

**title:**

definition de bornee

**content:**

Soit $A$ un ensemble non vide et $\left(  E,\|\ \|\right)$ un espace 
vectoriel norm\'e. Une application $f:A\rightarrow E$ est born\'ee s'il existe 
$M\in\mathbb{R}$ tel que $\forall a\in A$, $\|f(a)\|\leq M$.

**prove:**

**remark:**

**example:**

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

#

**id:**

8

**title:**

definition d'une suite bornee

**content:**

Une suite $(u_n)_{n\geq 0}$ est une suite born\'ee de $(E,\|\ \|)$ si $\{u_n,\ n\in\mathbb N\}$ est une partie born\'ee de $(E,\|\ \|)$.

**prove:**

**remark:**

Ces notions d\'ependent a priori de la norme consid\'er\'ee sur $E$: sur $\mathbb{R}[X]$, la suite
$(X^n)_{n\geq 0}$ est born\'ee pour la norme $\|\ \|_{\infty}^{[0,1]}$, mais ne l'est pas pour $\|\ \|_{\infty}^{[0,2]}$.\\
En dimension finie, une partie born\'ee pour une norme sera born\'ee pour toutes les normes. 

**example:**

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

#

**id:**

9

**title:**

definition de segment

**content:**

Soit $E$ un $\mathbb{R}$-espace vectoriel et $A$, $B\in E$. On appelle segment d'extr\'emit\'es $A$ et $B$ l'ensemble
$$[AB]=\{(1-t)A+tB\in E\ |\ t\in[0;1]\}.$$

**prove:**

**remark:**

De mani\`ere \'equivalente, $[AB]$ est l'ensemble des point $M$ tel que
 $\ovr{AM}=t \ovr{AB}$ avec $0\leq t\leq 1$, et ceci correspond bien \`a l'intuition.

**example:**

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

#

**id:**

10

**title:**

definition de partie convexe

**content:**

Soit $E$ un $\mathbb{R}$-espace vectoriel et $C\subset E$ une partie de $E$. On dit que $C$
 est une partie
convexe de $E$ si

**prove:**

**remark:**

Un produit de parties convexes (resp. born\'ee) est convexe (resp. born\'ee) dans l'espace vectoriel produit.

**example:**

Les parties convexes de $\mathbb{R}$ sont les intervalles! Un sous-espace vectoriel est convexe.

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

#

**id:**

11

**title:**

definition de fonction convexe et concave

**content:**

Soit $E$ un espace vectoriel norm\'e et $A\subset E$ une partie convexe de $E$.
\begin{enumerate}
\item Soit $f:A\rightarrow\mathbb{R}.$ On dit que $f$ est convexe lorsque
\[
\forall x_{1},x_{2}\in A\quad\forall\alpha\in\left[  0,1\right]  \quad
f\left(  \alpha x_{1}+\left(  1-\alpha\right)  x_{2}\right)  \leqslant\alpha
f\left(  x_{1}\right)  +\left(  1-\alpha\right)  f\left(  x_{2}\right)  .
\]

\item Lorsque $-f$ est convexe, on dit que $f$ est concave, c'est-\`a-dire
\[
\forall x_{1},x_{2}\in A\quad\forall\alpha\in\left[  0,1\right]  \quad
f\left(  \alpha x_{1}+\left(  1-\alpha\right)  x_{2}\right)  \geqslant\alpha
f\left(  x_{1}\right)  +\left(  1-\alpha\right)  f\left(  x_{2}\right)  .
\]
\end{enumerate}

**prove:**

**remark:**

Si $A$ est un inetrvalle de $\mathbb R$, tous les points de l'arc
$M_{1}M_{2}$ sont situ\'{e}s sous la corde $\left[
M_{1}M_{2}\right]$

\begin{center}
\includegraphics[scale=0.5]{figures/fonction-convexe.pdf}
\end{center}

**example:**

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

#

**id:**

12

**title:**

definition de distance

**content:**

Si $X$ est une partie non vide quelconque de $\left(  
E,\|\ \|\right)$ et $a\in E,$ alors on appelle distance de $a$ \`{a} $X$ le 
r\'{e}el
positif $d\left(  a,X\right)  =\inf\limits_{x\in X}\left\Vert a-x\right\Vert$.

**prove:**

**remark:**

\begin{enumerate}
\item L'ensemble $\{\left\Vert a-x\right\Vert$, $x\in X\}$ est un ensemble non vide, car $X$ est non vide et qui est minor\'e par $0$, donc la distance existe.
\item Par d\'efinition de la borne inf\'erieure, il existe une suite $(x_n)_{n\geq 0}\in X^{\mathbb N}$ telle que $\bigl(d(a,x_n)\bigr)_{n\geq 0}$ tend vers $d(a,X)$.\\
Mais la suite $(x_n)$ ne converge pas n\'ecessairement!
\end{enumerate}

**example:**

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

#

**id:**

13

**title:**

proposition de distance

**content:**

Soit $X$ une partie non vide de $E$. L'application $E\to \mathbb R_+$, $a\mapsto d(a,X)$ est $1$-lipschitzienne.

**prove:**

On veut montrer que pour tout $a,b\in E$, $|d(a,X)-d(b,X)|\leq \|a-b\|$.\\
On sait que pour tout $x\in X$ (in\'egalit\'e triangulaire),
$$d(a,X)\leq\|a-x\|\leq \|a-b\|+\|b-x\|$$
Par d\'efinition de la borne inf\'erieure,
$$d(a,X)\leq \|a-b\|+d(b,X).$$
On en d\'eduit que
$$d(a,X)-d(b,X)\leq\|a-b\|.$$
On intervertit le r\^ole de $a$ et $b$ et on obtient le r\'esultat attendu!

**remark:**

**example:**

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

#

**id:**

14

**title:**

proposition de distance

**content:**

Si $X$ est partie convexe de $E$, alors $a\mapsto d(a,X)$ est convexe.

**prove:**

Si $X$ est convexe, alors $\forall a,b\in E$, $\forall x,y\in X$, $\forall t\in[0,1]$
 $$tx+(1-t)y\in X\ {\rm et}\ \|ta+(1-t)b-(tx+(1-t)y)\|\leq t\|a-x\|+(1-t)\|b-y\|$$
 donc
 $$d(ta+(1-t)b,X)\leq t\|a-x\|+(1-t)\|b-y\|$$
 ce qui montre que $d(ta+(1-t)b,X)\leq td(a,X)+(1-t)d(b,X)$, la fonction est bien convexe.

**remark:**

**example:**

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

#

**id:**

15

**title:**

definition de la boule ouverte, fermee et sphere

**content:**

Soit $(E,\|\ \|)$ un espace vectoriel norm\'e, $a\in E$ et $r>0$ un 
r\'eel. On dit que
\begin{enumerate}
 \item l'ensemble ${\cal B}(a,r)=\{x\in E,\ \|x-a\|<r\}$ est la boule ouverte 
de centre $a$ et de rayon $r$.
 \item L'ensemble ${\cal B}_F(a,r)=\{x\in E,\ \|x-a\|\leq 
r\}$ est la boule ferm\'ee de centre $a$ et de rayon $r$.
 \item L'ensemble ${\cal S}(a,r)=\{x\in E,\ \|x-a\|=r\}$ est la sph\`ere de 
centre $a$ et de rayon $r$.
\end{enumerate}

**prove:**

**remark:**

**example:**

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

#

**id:**

16

**title:**

definition de la partie ouverte

**content:**

Une partie $U$ de $\left(  E,\|\ \|\right)$ 
est un ouvert de $E$ si pour tout point $a\in U$, il existe un
 $\varepsilon\in \mathbb{R}$, $\varepsilon>0$ tel que la boule ouverte 
$B(a,\varepsilon)\subset U$. 

**prove:**

**remark:**

\begin{enumerate}
\item L'ensemble vide et $E$ sont des ouverts.
 \item Les intervalles ouverts de $\mathbb{R}$ sont des ouverts de $\mathbb{R}$ pour 
la valeur absolue.
\item Les boules ouvertes sont des ouverts.
\item Si $E=E_1\times E_2$ un produit d'espaces vectoriels norm\'e, alors 
\begin{eqnarray*}
{\cal B}(a,r)&=&\{x\in E,\ \|x-a\|<r\}\\
&=&\{x_1\in E_1,\ \|x_1-a_1\|_1<r\}\times \{x_2\in E_2,\ \|x_2-a_2\|<r\}\\
&=&{\cal B}(a_1,r)\times {\cal B}(a_2,r)
\end{eqnarray*}
\end{enumerate}

**example:**

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

#

**id:**

17

**title:**

proposition d'ouverte

**content:**

Une union quelconque d'ouverts est un ouvert et une intersection 
finie d'ouverts est un ouvert.

**prove:**

Soit $(U_i)_{i\in A}$, une famille d'ouverts de $E$ index\'ee par 
$A$. Alors pour tout $a\in\bigcup\limits_{i\in A} U_i$, il existe $i_0\in A$ tel 
que $a\in U_{i_0}$ ouvert et donc il existe $r$ tel que ${\cal B}(a,r)\subset 
U_{i_0}(a,r)\subset U$ et $U$ est bien un ouvert.\\
 Soit $(U_i)_{i\in[\![1,n]\!]}$ une famille finie d'ouverts et 
$V=\bigcap\limits_{i\in[\![1,n]\!]} U_i$. Pour tout $a\in V$, pour tout 
$i\in[\![1,n]\!]$, il existe $r_i$ tel que ${\cal B}(a,r_i)\subset U_i$ car 
$U_i$ est un ouvert. On pose $r=\inf\limits_{[\![1,n]\!]}r_i$ qui est 
 un r\'eel non nul car vaut l'un des $r_i$ et par construction,  ${\cal 
B}(a,r)\subset V$.

**remark:**

**example:**

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

#

**id:**

18

**title:**

proposition d'ouvert

**content:**

Dans un espace produit, un produit d'ouverts est un ouvert.

**prove:**

On sait qu'une boule ouverte dans l'espace produit est un produit de boules ouvertes.

**remark:**

**example:**

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

#

**id:**

19

**title:**

definition de voisinage

**content:**

Soit $a\in E$. On dit qu'une partie $X$ est un voisinage de $a$ s'il existe une boule ouverte ${\cal B}(a,\rho)$, $\rho>0$, tel que ${\cal B}(a,\rho)\subset X$.

**prove:**

**remark:**

**example:**

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

#

**id:**

20

**title:**

definition de ferme

**content:**

Une partie $W$ de $\left(  E,\|\ \|\right)$ est un ferm\'e de $E$ si
$E\setminus W$ est un ouvert.

**prove:**

**remark:**

**example:**

\begin{enumerate}
\item L'ensemble vide et $E$ sont des ferm\'es.
\item Les intervalles 
ferm\'es de $\mathbb{R}$ sont des ferm\'es de $\mathbb{R}$ pour la valeur 
absolue.
\item Les boules ferm\'ees sont des ferm\'es. Les sph\`eres sont des 
ferm\'es.
\end{enumerate}

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

#

**id:**

21

**title:**

proposition de ferme

**content:**

 Une intersection quelconque de ferm\'es est un ferm\'e et une union 
finie de ferm\'es est un ferm\'e.

**prove:**

Le passage au compl\'ementaire change les unions en intersections et 
inversement, et la propri\'et\'e correspondante est vraie pour les ouverts.

**remark:**

Un singleton est un ferm\'e, donc tout ensemble fini de points est 
un ferm\'e.

**example:**

**source:** 

Analyse 4  (École Centrale de Pékin ,cours de mathématiques du cycle préparatoire)

**chinese:**

**author:**

Simon

#

