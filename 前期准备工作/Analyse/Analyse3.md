# 1. Convergence et Divergence d'une suite  

## Définition 

Une suite u = (un)n2N2 KNconverge vers l 2 K si
8" > 0, 9N 2 N, n 㼿 N ) |un㼿 l|  ".
On dira qu’une suite est convergente, s’il existe l 2 K tel que u converge vers l et l’on note lim
n!+1un= l.
Si une suite u n’ e s t pa s co n v e rg e n t e , o n d i t q u ’ e l l e e s t d i v e rg e n t e .

## Remarque

Une suite born´ ee n ’est pas n´ ecessairement convergente : la suite de terme g´ en´ eral un= ein
donne des contre-exemples :
ein+ ei(n+2)= ei(n+1)(e㼿i+ ei) = 2ei(n+1)cos(1)
et en passant ` a la limite, on a cos(1) = 1 ce qui est faux.
G´ en´ eraliser ` a einxpour x 2 R \ 2⇡Z


## Source

Analyse-3  P1

## 中文

数列的收敛性  

# 2. Tendance d＇une suite réelle vers infinie  

## Définition

On dit qu’une suite r´  eelle tend vers +1 (resp. 㼿1), si
8A 2 R, 9N 2 N, n 㼿 N ) un㼿 A (resp. un A)

## Remarque

On dira que la suite r´ eelle u admet une limite l 2 R = R [ {±1} pour dire que soit el le
converge vers l 2 R soit elle tend vers ±1. M a i s u n e s u i t e e s t c o n v e r g e n t e s s i s a l i m i t e l est finie.

## Source 

Analyse-3 P1

## 中文

暂无  

# 3. Théorème de Césaro

## Théorème

Soit u une suite qui tend vers l 2 K, a l o r s l a s u i t e v de terme g´ en´ eral vn=
u0+ ··· + un㼿1
n
tend vers l. S i l a s u i t e e s t r ´  e e l l e e t l = ±1, a l o r s l e r ´  e s u l t a t e s t e n c o r e v r a i .

## Preuve

S i (un) c o n v e r g e v e r s l 2 K, a l o r s 8" > 0, 9N 2 N tel que n > N ) |un㼿 l| < ".
D’o`  u
|vn㼿 l| =
㼿㼿
(u0㼿 l) + ··· + (un㼿1㼿 l)
n
㼿㼿

|u0㼿 l| + ··· + |un㼿1㼿 l|
n

|u0㼿 l| + ··· + |uN㼿1㼿 l|
n
+n 㼿 N
n
".
On majore les deux termes dela somme :

1. L’entier N é t a n t fixé, la somme |u0㼿l|+···+|uN㼿1㼿l| ne d´ epend pas de n et le quotient|u0㼿 l| + ··· + |uN㼿1㼿 l|
   n
   tend vers 0.
   Il existe N0> N tel que si n > N0,|u0㼿 l| + ··· + |uN㼿1㼿 l|
   n
    ".
2. De plus, pour tout n 㼿 N0, 0 <n 㼿 N
   n
   < 1.
   On a ainsi montr´ e que pour n > N0, |vn㼿 l|  2", d ’ o `  u l a c o n c l u s i o n q u i e s t v a l a b l e p o u r u n e s u i t e c o m p l e x e .
   Si la suite est r´ eelle et l = +1, a l o r s 8A > 1, 9N 2 N tel que n 㼿 N ) un> 3A. O n v e u t m i n o r e r l a s u i t e vnpour n > N :
   vn
   =
   u0+ ··· + uN㼿1
   n
   +uN+ ··· + un㼿1
   n
   㼿
   u0+ ··· + uN㼿1
   n

+ 3n 㼿 N
  n
  A
  Pour n > 3N, 3n 㼿 N
  n
  A > 2A > A + 1. L e p r e m i e r t e r m e d e l a s o m m e , l u i , t e n d v e r s 0, d o n c i l e x i s t e N0> 3N, t e l q u e
  n > N0,u0+ ··· + uN㼿1
  n
  㼿 㼿1. Finalement, pour tout A > 1, il existe n > N0, t e l q u e n > N0) vn> A.
  Si la suite est r´ eelle et l = 㼿1, o n a p p l i q u e l e r ´  e s u l t a t p r ´  e c ´  e d e n t `  a 㼿un.

## Source

Analyse-3 P2

## 中文

暂无  

# 4. Théorème d’encadrement des limites

## Proposition

Soit (un), (vn) et (wn) trois suites telles que ` a partir d’une certain
rang un vn wn. S i (un) et (wn) convergent vers une mˆ eme limite l, a l o r s (vn) converge vers l.

## Source

Analyse-3 P2

## 中文

夹逼定理

# 5. Théorème de la suite réelle adjacente

## Théorème

On dit que deux suites r´ elles u et v sont adjacentes si

1. u est croissante ;
2. v est d´ ecroissante ;
3. v 㼿 u converge vers 0.
   Et dans ce cas, les suites u et v sont convergentes et convergent vers une mˆ eme limite l et pour tout n 2 N
   un l  vn.

## Preuve

L a s u i t e w = v 㼿 u est d´ ecroissante et tend vers 0, donc pour tout n 2 N on a vn㼿 un㼿 0 ce qui donne
u0 un vn v0. L e s s u i t e s u et v sont monotones born´ ees, donc convergentes et vers la mˆ eme limite car w tend vers 0.

## Remarque

Un int´ erˆ et de ce th´ eor` eme est de prouver la convergence de suites sans en connaitre
la valeur exacte, mais en ayant la possibilit´ e de calculer une valeur approch´ ee avec (un) ou (vn) sachant
que la marge d’erreur est (vn㼿 un). E n fin, si les suites (un) et (vn) sont strictement monotones, alors
l’encadrement est strict : un< l < vn.

## Exemple

Un exemple classique est la d´ emonstration de e irrationnel : on montre que les suites u
et v d´ efinies par
un=
n
X
k=0
1
k!
et vn=
n
X
k=0
1
k!+
1
nn!
sont adjencentes : on montre en e↵et que (un) est strictement croissante, (vn) strictement d´ ecroissante et
que (vn㼿 un) tend vers 0.
On en d´ eduit que la limite commune, not´ ee e, e s t i r r a t i o n n e l l e ; o n s u p p o s e p o u r c e l a q u e s ’ ´  e c r i t e =a
bet
on utilise l’encadrement donn´ e par les suites : ub< e < vbet on multiplie par bb!.

## Source

Analyse-3

## 中文

暂无

# 6. Critère d'Alembert 

##  Proposition

Soit (un)n2Nune suite de r´ eels strictement positifs telle qu’` a partir d’un certain rang
1.
un+1
un
< l < 1, a l o r s l a s u i t e (un) converge vers 0.
2.
un+1
un

> l > 1, a l o r s l a s u i t e (un) tend vers +1.
3. limun+1
  un
  = 1, l a s u i t e p e u t c o n v e r g e r o u d i v e r g e r .

## Preuve 

 S i l > 1, a l o r s l a s u i t e e s t s t r i c t e m e n t c r o i s s a n t e `  a p a r t i r d ’ u n c e r t a i n r a n g e t n e p e u t c o n v e r g e r v e r s u n r ´  e e l n o n
nul d’apr` es la remarque ci-dessus, donc elle tend vers +1. S i l < 1, a l o r s l a s u i t e e s t s t r i c t e m e n t d ´  e c r o i s s a n t e `  a p a r t i r d ’ u n
certain rang et est positive, donc converge, et la seule limite possible est 0.
La suite un= n v´ erifie limun+1
un
= 1 m a i s e s t d i v e r g e n t e

## Exemple

La suite un=xn
n!
tend vers 0 carun+1
un
=
x
n + 1tend vers 0 < 1.

## Source 

Analyse-3 P3

## 中文 

达朗贝尔判别法

# 7. Suites arithmétiques

## Définition

Les suites arithm´ etiques sont les suites du type : un= rn + u0, u0fixé, et alors un+1= un+ r.

## Exemple

 u0= 1 et un+1= un+p2. A l o r s un= np2 + 1.

## Source

Analyse-3 P3

## 中文

等差数列

# 8. Suites et séries géométriques

## Définition

 Les suites g´ eom´ etriques sont les suites du type : un= qnuoavec u0fixé, et alors un+1= qun.  

Les s´ eries g´ eom´ etriques : S i q 6= 1,
n
X
k=p
qk= qp1 㼿 qn㼿p+1
1 㼿 q
.

## Exemple

u0= 2, un+1= 2un, a l o r s un= 2n+1

## Source

Analyse-3 P3

## 中文

等比数列

# 9. Suites arithmético-géométriques 

## Définition

Les suites arithm´ etico-g´ eom´ etriques sont les suites du type : un+1= aun+ b, a v e c u0fixé et a et b
des r´ eels.
(a) Si a = 1, un= bn + u0(c’est une suite arithm´ etique).
(b) Si a 6= 1, on cherche une solution particuli` ere constante un= l : on r´ esout
l = al + b () l =
b
1 㼿 a
puis on ajoute la partie homog` ene : vn= (un㼿 l) est une suite g´ eom´ etrique de raison a et de
premier terme u0㼿 l, donc
vn= anv0
et un= an(u0㼿 l) + l.

## Exemple

 u0= 2, un+1= 2un+ 1, a l o r s un+1+ 1 = 2(un+ 1) et un= 3 ⇥ 2n㼿 1

## Source

Analyse-3 P3

## 中文

暂无

# 9. Sommes de Riemann

## Définition

si f est continue sur [a, b], alors
lim
n!+1
b 㼿 a
n
n㼿1
X
k=0
f
✓
a + kb 㼿 a
n
◆
=
Zb
a
f

## Exemple

lim
n!+1
n
X
k=0
cos(⇡
3+ ⇡k
n) =
Z1
0
cos(⇡
3+ ⇡x)dx =
p3
⇡

## Source

Analyse-3 P3

## 中文

黎曼和

# 10. Point fixe

## Proposition

Soit f : I ! I, I un intervalle ferm´ e. Pour tout u02 I, l a s u i t e u d´ efinie par la relation de récurrence :
un+1= f(un) existe.
De plus, si (un) est convergente, elle converge vers un point fixe de f.

## Preuve

 i ) M o n  t r o n s p a r r  ´  e c u r r e n c e q u e l a s u i t e (un) est bien d´ efinie : On a u02 I et si un2 I d´ efini, alors
un+1= f(un) 2 I car f(I) ⇢ I, c e q u i p r o u v e l e p o i n t i ) .
ii) L’intervalle I é t a n t f e r m é , s i unconverge, alors sa limite l reste dans I.
De plus, si f est continue et (un) converge vers l 2 I, a l o r s f(un) converge vers f(l); o r f(un) = un+1et donc (f(un))
converge aussi vers l, d ’ o `  u f(l) = l

## Methode

On suppose f est une fonction de classe C1sur un domaine D. On ´ etudie la suite r´ ecurrente d´ efinie par
u02 D et un+1= f(un).
1.Étudier les variations de f et tracer son graphe.

2. On cherche les points de fixes de f :
(a) Graphiquement : Les points d’intersection de la droite d’´ equation y = x avec le graphe de f
correspondent aux points fixes, on a donc le plus souvent une bonne idée de leur nombre et de
leur valeur.
(b) Analytiquement : On r´ esoud ´ etudie le signe de la fonction g(x) = f(x) 㼿 x. Le r´ esultat doit ˆ etre
coh´ erent avec votre graphique !
3. On cherche un intevalle I (aussi petit que possible) stable par f tel que u02 I. O n s e r a l e p l u s
souvent dans l’un des trois cas suivants :
(a) Si f est croissante sur I, alors (un) est monotone. Cela r´ esulte de l’´ etude de g ou encore :
- s i u0 u1, alors on montre par r´ ecurrence que (un) est croissante et (un) converge vers le plus
petit point fixe supérieur à u0(s’il en existe) ou tend vers +1 (sinon).
- s i u0㼿 u1, alors unest d´ ecroissante et converge vers le plus grand point fixe inférieur à u0
(s’il existe) ou diverge sinon.
En particulier, si I est un segment, alors la suite converge.
(b) Si f est d´ ecroissante sur I, l e s s u i t e s (u2n) et (u2n+1) sont monotones de monotonie oppos´ ee
car f 㼿 f est croissante. Il faut alors ´ etudier les points fixes de f 㼿 f. Il peut arriver que (u2n) et
(u2n+1) aient des limites distinctes.

## Exemple 1

Soit u02 R et un+1= f(un) avec f(x) =1
6(x2+ 8). O n ´  e t u d i e g(x) = f(x) 㼿 x =
1/6(x2㼿6x+ 8) : g admet 2 et 4 comme racines et g est n´ egative entre 2 et 4. L e s i n t e r v a l l e s i n t ´  e r e s s a n t s
sont I1= [0; 2], I2= [2; 4] et I3=]4; +1[ sont stables par f.
i) Si u02 I1, a l o r s l a s u i t e e s t c r o i s s a n t e e t m a j o r ´  e e , d o n c c o n v e r g e v e r s l ’ u n i q u e p o i n t fixe de I1,
donc vers 2.
4
1.1. LES SUITES
ii) Si u02 I2, l a s u i t e e s t d ´  e c r o i s s a n t e e t m i n o r ´  e e , d o n c c o n v e r g e ; s i u0= ±4, l a s u i t e e s t c o n s t a n t e `  a
partir du rang 1, s i n o n , (un) converge vers l’unique point fixe de f < 4, d o n c v e r s 2.
iii) Si u02 I3, a l o r s l a s u i t e e s t c r o i s s a n t e . S i e l l e c o n v e r g e a i t , c e s e r a i t v e r s u n p o i n t fixe de f > 4,
mais il n ’en existe pas, donc la suite n ’est pas major´ ee, elle tend vers +1.
Si u0< 0, l a f o n c t i o n f n’ es t p lu s m o n o t o n e s u r u n i n t er va l l e s t abl e co n t ena n t u0. M a i s s i u02] 㼿 4,0],
alors u12 [0,4[ et la suite converge vers 2; s i u0< 㼿4, a l o r s l a s u i t e t e n d v e r s +1.

![image-20210517164331151](C:\Users\13567\AppData\Roaming\Typora\typora-user-images\image-20210517164331151.png)

## Exemple 2

On pose un+1= f(un) avec f(x) =1
2arccosx et u02 [0; 1]. L a f o n c t i o n e s t d ´  e c r o i s s a n t e .
On remarque que u12 [0;⇡
4], d o n c un2 [0;⇡
4] pour n > 0. O n ´  e t u d i e g(x) = arccosx 㼿 x sur [0;⇡
4]. L a
d´ eriv´ ee est
g0(x) = 㼿
1
p1 㼿 x2㼿 1 < 0
et comme g(0) =⇡
4et g(1) = 㼿1, g s’annule en unique point ↵ et g est positive avant et n´ egative apr` es.
On montre que f est contractante sur I bien choisi : sur [0;⇡
4],
㼿
1
2
r
1 㼿⇡2
16
 f0(x)  㼿1
2
et l’application est k-lipschitzienne avec k =
1
2
q
1 㼿⇡2
16
' 0.8 < 1, d o n c unconverge vers l’unique point
fixe.

![image-20210517164601761](C:\Users\13567\AppData\Roaming\Typora\typora-user-images\image-20210517164601761.png)

## Source

Analyse-3 P4

## 中文

不动点

# 11. Lemme de l’escalier

## Proposition

Soit (vn)n㼿0une suite r´ eelle qui tend vers +1. O n s u p p o s e q u e vn+1㼿 vntend vers
un nombre a 6= 0. A l o r s vn⇠ an (et a > 0).

## Preuve

O n a p p l i q u e l e t h ´  e o r `  e m e d e C ´  e s a r o `  a (vn+1㼿 vn)n㼿0

## Remarque

Si on a une suite (un) de r´ eels > 0 qui tend vers 0, p o u r e n a v o i r u n ´  e q u i v a l e n t o n
é t u d i e vn= uk
navec k un r´ eel n´ egatif, de sorte que (vn) tend vers +1. S i o n m o n t r e q u e vn+1㼿 vntend
vers un nombre a 6= 0, o n a vn⇠ an (a est alors automatiquement > 0) et on a un⇠ a1/kn1/k.

## Exemple

 On v´ erifie facilement que si u02 R, a l o r s un+1= sinuntend vers 0, m a i s a v e c c e t t e
m´ ethode, on trouve facilement un ´ equivalent :
1
ul
n+1
㼿
1
uln
=ul
n㼿 sinlun
ulnsinlun
=ul
n㼿 ul
n+ lul+2
n
6

+ o(ul+2
n)
u2l
n+ o(u2l
n)
qui admet une limite non nulle ssi l = 2, d ’ o `  u un⇠
r3
n

## Source

Analyse-3 P6

## 中文

暂无

# 12. Séries

## Définition

Soit u = (un)n2Nune suite d’´ el´ ements de K.
1. On appelle s´ erie de terme g´ en´ erale un, l a s u i t e d e t e r m e g ´  e n ´  e r a l Sn=
n
X
k=0
uk.
2. La suite (Sn)n2Ns’appelle suite des sommes partielles de la s´ erie.
6
1.2. LES SÉRIES
3. La s´ erie convergente si la suite (Sn)n2Nconverge. La limite S s’appelle somme de la s´ erie. On
notera S =
+1
X
k=0
uk.
4. Si la s´ erie est convergente de somme S, Rn= S 㼿
n
X
k=0
uks’appelle le reste de la s´ erie d’ordre n :
Rn=
1
X
k=n+1
uk.

## Remarque 1

On ´ ecrira parfois
X
unpour indiquer la s´ erie de terme g´ en´ eral un, m a i s o n ´  e v i t e r a
d’´ ecrire
+1
X
n=0
tant que la convergence de la s´ erie n ’a pas ´ et´ e prouv´ ee.

## Remarque 2

L’ensemble des s´ eries convergentes est un sous-espace vectoriel.
Par contre, on ne peut pas d´ efinir à priori un produit interne sur les séries :
⇣X
un
⌘⇣X
vn
⌘
?=
8
>
><
>
>:
>X
>unvnProduit de Hadamard
>X
>wn, wn=
>n
>X
>k=0
>ukvn㼿kProduit de Cauchy
>Le probl` eme est que la s´ erie obtenue n’est pas n´ ecessairement convergente et la limite d’un produit ne
>converge pas n´ ecessairement vers le produit des limites !

## Exemple 

Soit x 6= 1 et Sn=
n
X
k=0
xkla s´ erie de terme g´ en´ eral un(x) = xnpour n 㼿 0.
Sn= 1 + x + ··· + xn=1 㼿 xn+1
1 㼿 x
, S =
1
1 㼿 x, Rn=xn+1
1 㼿 x.
Donc la s´ erie g´ eom´ etrique converge ssi |x| < 1.
De plus, en int´ egrant l’expression entre 0 et t, o n o b t i e n t p o u r t 2] 㼿 1; 1[
㼿ln(1 㼿 t) = t +t2
2+ ··· +tn+1
n + 1+
Zt
0
xn+1
1 㼿 xdx.
Mais si t 2] 㼿 1; 0],
㼿㼿
Zt
0
xn+1
1 㼿 xdx
㼿㼿
Z|t|
0
xn+1dx 
1
n + 1.
Donc, 8t 2] 㼿 1; 0]
㼿㼿㼿
n
X
k=1
tk
k+ l n ( 1 㼿 t)
㼿㼿㼿
1
n + 1
En faisant tendre t vers 㼿1 on obtient que la s´ erie harmonique altern´ ee
X(㼿1)k
k
converge vers 㼿ln(2).

## Source

Analyse-3 P7

## 中文

级数

# 13. 未命名

## Proposition

Soit
X
unla s´ erie de terme g´ en´ eral unconverge, alors (un) tend vers 0 2 K.

## Preuve

 O n ´  e c r i t un= Sn㼿 Sn㼿1et si (Sn) c o n v e r g e , a l o r s (un) t e n d v e r s 0 .
Si terme g´ en´ eral d’une s´ erie ne tend pas vers 0, on dit qu’elle diverge grossi` erement.

## Source

Analyse-3 P7

## 中文

暂无

# 14. 未命名

## Proposition

Une s´ eriePunà t e r m e s p o s i t i f s : 8n 2 N, un㼿 0 converge ssi la suite des sommes partiel les
n
X
k=0
ukest
major´ ee et sinon la s´ erie tend vers +1.

## Preuve

U n e s u i t e c r o i s s a n t e `  a t e r m e s p o s i t i f s e s t s o i t b o r n ´  e e e t a l o r s c o n v e r g e s o i t t e n d v e r s +1.

## Remarque

 Mˆ eme si c’est “´ evident” d’apr` es le contexte, vous ´ ecrirez “
X
unest une s´ erie ` a termes
positifs major´ ee donc convergente” et jamais “
X
n
unest major´ ee donc convergente” .

## Source

Analyse-3 P8

## 中文

暂无

# 15. 未命名

## Proposition

Soit un> 0 et un vn, a l o r sPvnconverge implique quePunconverge ;Pundiverge implique que
Pvndiverge.

## Remarque

Pour une s´ erie ` a termes positifs diverger et tendre vers +1 est ´ equivalent, mais pas en
g´ en´ eral.Évitez de dire la s´ erie diverge pour dire qu’elle tend vers +1!

## Exemple

 On a 0 <
1
n2
1
n(n 㼿 1). D a n s l ’ e x e m p l e 36 nous allons montrer queP
1
n(n 㼿 1)
converge. On en d´ eduit queP 1
n2converge

## Source

Analyse-3 P8

## 中文

暂无

# 16.  Convergence Absolue de la série

## Définition

On dit qu’une s´ erie
X
n
unde E est absolument convergente si la s´ erie de terme g´ en´ eral |un| converge.

## Source

Analyse-3 P8

## 中文

绝对收敛

# 17. 未命名

## Proposition

Une s´ erie absolument convergente est convergente.

## Preuve

S i l a s u i t e e s t r ´  e e l l e , o n p o s e u+
n= max(0,un) et u㼿
n= max(0,㼿un). L e s s ´  e r i e s
X
u+
net
X
u㼿
nsont des
s´ eries ` a termes positifs et major´ ees par
X
|un| donc sont convergentes et on note leur limite respective l+et l㼿. C o m m e
un= u+
n㼿 u㼿
n, o n e n d ´  e u i t q u e l a s ´  e r i e
X
unconverge et que sa limite est l+㼿 l㼿.
Pour une suite ` a termes complexes zn= xn+ iynavec (xn) et (yn) des suites r´ eelles, on sait que |xn| et |yn| sont major´ es
par |zn|. O n e n d ´  e d u i t q u e l e s s ´  e r i e sPxnet
X
ynsont absolument convergentes, donc convergentes et
X
znest aussi
convergente.

## Remarque 1

 Une s´ erie convergente n ’est pas n´ ecessairement absolument convergente. Par exemple la
s´ erie harmonique altern´ ee
✓X(㼿1)k
k
◆
k㼿1
converge, mais n’est pas absolument convergente ( ?). On dit
dans ce cas que la s´ erie est semi-convergente.

##  Remarque 2

1. Pour montrer la convergence d’une s´ erie, on commencera par essayer de montrer qu’elle est
absolument convergente. Pour les suites ` a termes positifs on va donner au paragraphe suivant des
techniques tr` es e㼿caces.
2. L’ensemble des s´ eries absolument convergentes est encore un sous-espace vectoriel de l1(K). L ’ a p -
plication
X
un7!
+1
X
n=0
|un| est une norme sur l1(K).

## Source

Analyse-3 P8

## 中文

暂无

# 18. Séries téléscopiques

## Proposition

Une s´ erie t´ el´ escopique est une s´ erie de terme g´ en´ eral un= vn+1㼿 vn, o `  u (vn)n㼿0
est une suite donn´ ee.
Dans ce cas, la somme partielle vaut Sn= vn+1㼿 v0et donc la s´ erie converge ssi (vn)n㼿0converge.

## Remarque

L’´ ecriture
+1
X
n=1
(1
n㼿
1
n + 1) a u n s e n s m a i s c e n ’ e s t p a s ´  e g a l `  a
+1
X
n=1
1
n㼿
+1
X
n=1
1
n + 1qui
n’ e n a pa s ca r l e s s´ e r i e s d i v e rg e n t .

## Exemple

1. Soit Sn=
n
X
k=1
1
k(k + 1)=
n
X
k=1
uk. O n ´  e c r i t
un=1
n㼿
1
n + 1= vn㼿 vn+1
) Sn= v1㼿 vn+1= 㼿
1
n + 1+ 1.
et donc la s´ erie converge et
+1
X
k=1
1
n(n + 1)= 1.
2. Soit Sn=
n
X
k=2
ln
✓
1 㼿
1
n2
◆
.
Sn
=
n
X
k㼿2
(ln(k + 1) + ln(k 㼿 1) 㼿 2l nk)
=
n
X
k㼿2
[ln(k + 1) 㼿 lnk] 㼿 [lnk 㼿 ln(k 㼿 1)]
= l  n
✓n + 1
n
◆
㼿 ln 2
dont on d´ eduit que Snconverge vers 㼿ln 2.

## Source 

Analyse-3 P8

## 中文

裂项法



