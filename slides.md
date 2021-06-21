class: center, middle, clean, white
count: false

.meetup-logo[
![Angular Portugal](https://pbs.twimg.com/profile_images/842127844545290242/FPy5ZUrA_400x400.jpg)

  <h2>Angular Portugal</h2>
]
<br/>

# NgRx Selector Memoization

## and why you should do it!

<br/>

### Danilo Hoffmann

---

class: big, center, middle

# NgRx Selector Memoization

## and why you should do it!

.img-overlay-wrap[<svg
width="320mm"
height="150mm"
viewBox="-55 -13 400 110.30709"
version="1.1"
id="svg5"
inkscape:version="1.1 (c68e22c387, 2021-05-23)"
sodipodi:docname="drawing.svg"
xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
xmlns="http://www.w3.org/2000/svg"
xmlns:svg="http://www.w3.org/2000/svg">
<sodipodi:namedview
id="namedview7"
pagecolor="#ffffff"
bordercolor="#666666"
borderopacity="1.0"
inkscape:pageshadow="2"
inkscape:pageopacity="0.0"
inkscape:pagecheckerboard="0"
inkscape:document-units="mm"
showgrid="false"
fit-margin-top="0"
fit-margin-left="0"
fit-margin-right="0"
fit-margin-bottom="0"
inkscape:zoom="0.94867184"
inkscape:cx="628.24675"
inkscape:cy="245.60653"
inkscape:window-width="1920"
inkscape:window-height="1172"
inkscape:window-x="-8"
inkscape:window-y="-8"
inkscape:window-maximized="1"
inkscape:current-layer="layer2" />
<defs
id="defs2">
<marker
style="overflow:visible"
id="Arrow2Lstart"
refX="0"
refY="0"
orient="auto"
inkscape:stockid="Arrow2Lstart"
inkscape:isstock="true">
<path
transform="matrix(1.1,0,0,1.1,1.1,0)"
d="M 8.7185878,4.0337352 -2.2072895,0.01601326 8.7185884,-4.0017078 c -1.7454984,2.3720609 -1.7354408,5.6174519 -6e-7,8.035443 z"
style="fill:context-stroke;fill-rule:evenodd;stroke-width:0.625;stroke-linejoin:round"
id="path6998" />
</marker>
<marker
style="overflow:visible"
id="Arrow2Lend"
refX="0"
refY="0"
orient="auto"
inkscape:stockid="Arrow2Lend"
inkscape:isstock="true">
<path
transform="matrix(-1.1,0,0,-1.1,-1.1,0)"
d="M 8.7185878,4.0337352 -2.2072895,0.01601326 8.7185884,-4.0017078 c -1.7454984,2.3720609 -1.7354408,5.6174519 -6e-7,8.035443 z"
style="fill:context-stroke;fill-rule:evenodd;stroke-width:0.625;stroke-linejoin:round"
id="path7001" />
</marker>
<marker
style="overflow:visible"
id="Arrow1Lstart"
refX="0"
refY="0"
orient="auto"
inkscape:stockid="Arrow1Lstart"
inkscape:isstock="true">
<path
transform="matrix(0.8,0,0,0.8,10,0)"
style="fill:context-stroke;fill-rule:evenodd;stroke:context-stroke;stroke-width:1pt"
d="M 0,0 5,-5 -12.5,0 5,5 Z"
id="path6980" />
</marker>
<marker
style="overflow:visible"
id="Arrow1Lend"
refX="0"
refY="0"
orient="auto"
inkscape:stockid="Arrow1Lend"
inkscape:isstock="true">
<path
transform="matrix(-0.8,0,0,-0.8,-10,0)"
style="fill:context-stroke;fill-rule:evenodd;stroke:context-stroke;stroke-width:1pt"
d="M 0,0 5,-5 -12.5,0 5,5 Z"
id="path6983" />
</marker>
<marker
style="overflow:visible"
id="Arrow2Lend-9"
refX="0"
refY="0"
orient="auto"
inkscape:stockid="Arrow2Lend"
inkscape:isstock="true">
<path
transform="matrix(-1.1,0,0,-1.1,-1.1,0)"
d="M 8.7185878,4.0337352 -2.2072895,0.01601326 8.7185884,-4.0017078 c -1.7454984,2.3720609 -1.7354408,5.6174519 -6e-7,8.035443 z"
style="fill:context-stroke;fill-rule:evenodd;stroke-width:0.625;stroke-linejoin:round"
id="path7001-3" />
</marker>
<marker
style="overflow:visible"
id="Arrow2Lend-9-9"
refX="0"
refY="0"
orient="auto"
inkscape:stockid="Arrow2Lend"
inkscape:isstock="true">
<path
transform="matrix(-1.1,0,0,-1.1,-1.1,0)"
d="M 8.7185878,4.0337352 -2.2072895,0.01601326 8.7185884,-4.0017078 c -1.7454984,2.3720609 -1.7354408,5.6174519 -6e-7,8.035443 z"
style="fill:context-stroke;fill-rule:evenodd;stroke-width:0.625;stroke-linejoin:round"
id="path7001-3-5" />
</marker>
<marker
style="overflow:visible"
id="Arrow2Lend-9-0"
refX="0"
refY="0"
orient="auto"
inkscape:stockid="Arrow2Lend"
inkscape:isstock="true">
<path
transform="matrix(-1.1,0,0,-1.1,-1.1,0)"
d="M 8.7185878,4.0337352 -2.2072895,0.01601326 8.7185884,-4.0017078 c -1.7454984,2.3720609 -1.7354408,5.6174519 -6e-7,8.035443 z"
style="fill:context-stroke;fill-rule:evenodd;stroke-width:0.625;stroke-linejoin:round"
id="path7001-3-8" />
</marker>
<marker
style="overflow:visible"
id="Arrow2Lend-4"
refX="0"
refY="0"
orient="auto"
inkscape:stockid="Arrow2Lend"
inkscape:isstock="true">
<path
transform="matrix(-1.1,0,0,-1.1,-1.1,0)"
d="M 8.7185878,4.0337352 -2.2072895,0.01601326 8.7185884,-4.0017078 c -1.7454984,2.3720609 -1.7354408,5.6174519 -6e-7,8.035443 z"
style="fill:context-stroke;fill-rule:evenodd;stroke-width:0.625;stroke-linejoin:round"
id="path7001-8" />
</marker>
</defs>
<g
inkscape:label="Layer 1"
inkscape:groupmode="layer"
id="layer1"
transform="translate(22.443034,-84.486219)"
style="display:inline">
<path
style="font-variation-settings:normal;opacity:1;vector-effect:none;fill:none;fill-opacity:1;stroke:#d1009d;stroke-width:0.79375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;-inkscape-stroke:none;stop-color:#000000;stop-opacity:1"
d="m -7.9676413,122.29264 v -6.13577 H 254.75491 v 5.02018"
id="path10068" />
</g>
<g
inkscape:groupmode="layer"
id="layer2"
inkscape:label="Layer 2"
transform="translate(-56.643773,-53.114547)">
<text
xml:space="preserve"
style="font-style:normal;font-weight:normal;font-size:10.5833px;line-height:1.25;font-family:sans-serif;fill:#cf00eb;fill-opacity:1;stroke:#d1009d;stroke-width:0.264583;stroke-opacity:1"
x="346.11328"
y="121.32093"
id="text5359"><tspan
sodipodi:role="line"
id="tspan5357"
style="fill:#cf00eb;fill-opacity:1;stroke:#d1009d;stroke-width:0.264583;stroke-opacity:1"
x="346.11328"
y="121.32093">1.</tspan></text>
<g
id="path7492">
<path
style="color:#000000;fill:#cf00eb;stroke-width:0.79375;-inkscape-stroke:none"
d="M 343.32428,112.67507 331.05275,102.07692"
id="path15240" />
<path
style="color:#000000;fill:#d1009d;-inkscape-stroke:none"
d="m 331.3125,101.77734 -0.51953,0.59961 12.27148,10.59766 0.51953,-0.59961 z"
id="path15242" />
<g
id="g15230">
<path
style="color:#000000;fill:#d1009d;fill-rule:evenodd;stroke-width:0.545703;stroke-linejoin:round;-inkscape-stroke:none"
d="m 335.17278,110.28874 -4.92695,-8.89023 9.51271,3.5804 c -2.50714,0.57132 -4.35261,2.72161 -4.58576,5.30983 z"
id="path15232" />
</g>
</g>
<text
xml:space="preserve"
style="font-style:normal;font-weight:normal;font-size:10.5833px;line-height:1.25;font-family:sans-serif;fill:#cf00eb;fill-opacity:1;stroke:#d1009d;stroke-width:0.264583;stroke-opacity:1"
x="208.78055"
y="163.28934"
id="text5359-6"><tspan
sodipodi:role="line"
id="tspan5357-3"
style="fill:#cf00eb;fill-opacity:1;stroke:#d1009d;stroke-width:0.264583;stroke-opacity:1"
x="208.78055"
y="163.28934">4.</tspan></text>
<g
id="path7492-0">
<path
style="color:#000000;fill:#cf00eb;stroke-width:0.79375;-inkscape-stroke:none"
d="M 205.99155,154.64348 193.72002,144.04533"
id="path15258" />
<path
style="color:#000000;fill:#d1009d;-inkscape-stroke:none"
d="m 193.97852,143.74414 -0.51758,0.60156 12.27148,10.59766 0.51758,-0.59961 z"
id="path15260" />
<g
id="g15248">
<path
style="color:#000000;fill:#d1009d;fill-rule:evenodd;stroke-width:0.545703;stroke-linejoin:round;-inkscape-stroke:none"
d="m 197.84005,152.25715 -4.92695,-8.89023 9.51271,3.5804 c -2.50714,0.57132 -4.35261,2.72161 -4.58576,5.30983 z"
id="path15250" />
</g>
</g>
<text
xml:space="preserve"
style="font-style:normal;font-weight:normal;font-size:10.5833px;line-height:1.25;font-family:sans-serif;fill:#cf00eb;fill-opacity:1;stroke:#d1009d;stroke-width:0.264583;stroke-opacity:1"
x="55.944077"
y="133.44719"
id="text5359-5"><tspan
sodipodi:role="line"
style="fill:#cf00eb;fill-opacity:1;stroke:#d1009d;stroke-width:0.264583;stroke-opacity:1"
x="55.944077"
y="133.44719"
id="tspan8950">2.</tspan></text>
<text
xml:space="preserve"
style="font-style:normal;font-weight:normal;font-size:10.5833px;line-height:1.25;font-family:sans-serif;fill:#cf00eb;fill-opacity:1;stroke:#d1009d;stroke-width:0.264583;stroke-opacity:1"
x="182.64748"
y="61.101631"
id="text5359-5-5"><tspan
sodipodi:role="line"
style="fill:#cf00eb;fill-opacity:1;stroke:#d1009d;stroke-width:0.264583;stroke-opacity:1"
x="182.64748"
y="61.101631"
id="tspan8950-2">3.</tspan></text>
<g
id="path7492-7">
<path
style="color:#000000;fill:#cf00eb;stroke-width:0.79375;-inkscape-stroke:none"
d="M 65.705514,125.08022 81.602751,112.25088"
id="path15276" />
<path
style="color:#000000;fill:#d1009d;-inkscape-stroke:none"
d="m 81.353516,111.94141 -15.896485,12.83007 0.498047,0.61719 15.896484,-12.82812 z"
id="path15278" />
<g
id="g15266">
<path
style="color:#000000;fill:#d1009d;fill-rule:evenodd;stroke-width:0.545703;stroke-linejoin:round;-inkscape-stroke:none"
d="m 72.787465,114.83918 9.626815,-3.26118 -5.220668,8.72098 c -0.114691,-2.56886 -1.901099,-4.76847 -4.406147,-5.4598 z"
id="path15268" />
</g>
</g>
<g
id="path7492-7-0">
<path
style="color:#000000;fill:#cf00eb;stroke-width:0.79375;-inkscape-stroke:none"
d="m 189.78831,64.328718 8.36698,16.733921"
id="path15222" />
<path
style="color:#000000;fill:#d1009d;-inkscape-stroke:none"
d="m 190.14258,64.150391 -0.70899,0.355468 8.36719,16.734375 0.70899,-0.355468 z"
id="path15224" />
<g
id="g15212">
<path
style="color:#000000;fill:#d1009d;fill-rule:evenodd;stroke-width:0.545703;stroke-linejoin:round;-inkscape-stroke:none"
d="m 197.51056,71.897874 1.12865,10.101341 -7.4039,-6.963709 c 2.53403,0.436912 5.06458,-0.838183 6.27525,-3.137632 z"
id="path15214" />
</g>
</g>
<path
style="fill:#cf00eb;fill-opacity:1;stroke:#d1009d;stroke-width:0.79375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
d="M 71.055956,110.55477 H 207.71635"
id="path7492-7-6"
sodipodi:nodetypes="cc" />
</g>
</svg>
]

---

class: large

# Introduction

<br/>

.avartar[![dhhyi](http://www.gravatar.com/avatar/391e7c4577e5644c8f82fb36ec7a5f03?size=200&rating=pg&d=mm)]

## Danilo Hoffmann

.icon[![Twitter](https://upload.wikimedia.org/wikipedia/de/9/9f/Twitter_bird_logo_2012.svg)
[@dhhyi](https://twitter.com/dhhyi)]

.icon[![GitHub](https://avatars3.githubusercontent.com/in/15368?s=256&v=2)
[dhhyi](https://github.com/dhhyi)]

<br/>

- Java/C++ Background ~8y

- Angular since 4y, currently @ .company-icon[![Evident](https://www.evident.nl/hubfs/evident/logos/Evident-clean-logo.svg)]

---

# What is Memoization?

> In computing, memoization [...] is an optimization technique used primarily to speed up computer programs by **storing the results** of expensive function calls and **returning the cached** result when the **same inputs** occur again.
> [[Wikipedia]](https://en.wikipedia.org/wiki/Memoization)

---

class: big, center, middle

# Live Demo

<a class="white-box" target="_blank" href="https://stackblitz.com/github/dhhyi/meetup-ngrx-selector-memoization/tree/example-app?file=src%2Fapp%2Ffibonacci%2Ffibonacci.ts">fibonacci @ <span class="icon"><img src="https://developer.stackblitz.com/img/logo.svg" alt="StackBlitz"></span></a>

---

<!-- # NgRx Selectors -->

.white-box[
<img style="height: 550px;" src="https://ngrx.io/generated/images/guide/store/state-management-lifecycle.png"/>
]

---

class: big

# Tasks of NgRx Selectors

- select slice of data from Store object

- enrich and prepare data

- reusable artifacts

- prevent view updates by <ins>memoization</ins>

---

class: big, center, middle

# Live Demo

<a class="white-box" target="_blank" href="https://stackblitz.com/github/dhhyi/meetup-ngrx-selector-memoization/tree/example-app?file=src%2Fapp%2Fintroduction%2Fintroduction.component.ts">introduction @ <span class="icon"><img src="https://developer.stackblitz.com/img/logo.svg" alt="StackBlitz"></span></a>

---

class: big

# Anatomy of a Selector

- <a target="_blank" href="https://github.com/ngrx/platform/blob/12.1.0/modules/store/src/selector.ts#L560-L565"><code class="remark-inline-code">createSelector</code></a>

- at least one **input**

- exactly one **projector**

- provides **memoization**

---

class: big

# Anatomy of a Selector #2

- `createSelector` --- <a target="_blank" href="https://github.com/ngrx/platform/blob/b3e2b103582f0e6e533f25091614a7ea02409e0c/modules/store/src/selector.ts#L691"><code class="remark-inline-code">createSelectorFactory(defaultMemoize)</code></a>

- `function createSelectorFactory(memoize: MemoizeFn)` --> <a target="_blank" href="https://ngrx.io/api/store/createSelectorFactory">doc</a>

- `type MemoizeFn = (t: AnyFn) => MemoizedProjection` --> <a target="_blank" href="https://ngrx.io/api/store/MemoizedProjection">doc</a>

- <a target="_blank" href="https://ngrx.io/api/store/defaultMemoize"><code class="remark-inline-code">defaultMemoize</code></a>

---

class: big, center, middle

# Live Demo

<a class="white-box" target="_blank" href="https://stackblitz.com/github/dhhyi/meetup-ngrx-selector-memoization/tree/example-app?file=src%2Fapp%2Fstore%2Fbook-view%2Findex.ts">example-app @ <span class="icon"><img src="https://developer.stackblitz.com/img/logo.svg" alt="StackBlitz"></span></a>

---

class: big

# Memoization Clues

- Don't use selector with props!

- Selector with many inputs

  - Partition into smaller memoizable selectors

- Projector that always creates new objects

  - `resultMemoize`

- Preserve immutability at all costs!

---

class: big, center, middle

# Live Demo 🤪

<a class="white-box" target="_blank" href="https://stackblitz.com/github/dhhyi/meetup-ngrx-selector-memoization/tree/example-app-fixed?file=src%2Fapp%2Fstore%2Fbook-view%2Findex.ts">custom memoize @ <span class="icon"><img src="https://developer.stackblitz.com/img/logo.svg" alt="StackBlitz"></span></a>

---

class: middle, center

# Thank You!

## ⭐ ❤️ 💬 ✉️

### slides and examples available at

## https://github.com/dhhyi/meetup-ngrx-selector-memoization
