<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script type="text/javascript" id="MathJax-script" async="true"
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
</script>

Пример из руководства к MathJax.

When \\(a \ne 0\\), there are two solutions to \\(ax^2 + bx + c = 0\\) and they are

\\\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\\\]

А вот от этих уравнений [кот](https://absurdopedia.wiki/Кот#.D0.9A.D0.BE.D1.82_.D0.A8.D1.80.D1.91.D0.B4.D0.B8.D0.BD.D0.B3.D0.B5.D1.80.D0.B0) ~~ни жив, ни мёртв,~~ и жив, и мёртв:

\\\[i\hbar\frac{\partial}{\partial t} \Psi(\vec{r} ,t) = \left [ -\frac{\hbar^2}{2m}\nabla^2 + V(\vec{r},t)\right ] \Psi(\vec{r} ,t).\\\]

\\\[\Psi ( \vec{r}, t) = \psi ( \vec{r} \,) {e}^{ - i E t / \hbar} , \qquad ( 2 )\\\]

\\\[- { {\hbar}^2 \over 2 m } \Delta \psi (\vec{r}) + V(\vec{r}) \psi (\vec{r}) = E \psi (\vec{r}) , \qquad ( 3 )\\\]

\\\[\sum_{k,j}\left [ - \frac{\hbar^2}{\sqrt{a}} \frac{\partial}{\partial q^k} \left ( \sqrt{a} a^{kj} \frac{\partial}{\partial q^j} \right ) + V \right ] \Psi + \frac{\hbar}{i} \frac{\partial \Psi}{\partial t} = 0\\\]

Формулы взяты [отсюда](https://ru.wikipedia.org/wiki/Уравнение_Шрёдингера).

Чтобы заработал MathJax, внутренние формулы нужно выделять при помощи `\\(`
и `\\)`, а выносные — `\\\[` и `\\\]`. Заголовки скриптов стандартные:

```xml
<script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
<script type="text/javascript" id="MathJax-script" async="true"
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js">
</script>
```
