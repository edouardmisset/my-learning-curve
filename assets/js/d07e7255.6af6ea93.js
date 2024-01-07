"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[4963],{1429:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var r=t(5893),o=t(1151),a=t(9286);const i='/** Credits Stephanie Eckles\n* https://smolcss.dev\n*/\n\n/** Responsive CSS Grid (RAM v2) */\n.css-grid {\n  --min: 15ch;\n  --gap: 1rem;\n\n  display: grid;\n  grid-gap: var(--gap);\n  /* min() with 100% prevents overflow\n  in extra narrow spaces */\n  grid-template-columns: repeat(auto-fit, minmax(min(100%, var(--min)), 1fr));\n}\n\n/** Responsive Flexbox Grid */\n.flexbox-grid {\n  --min: 10ch;\n  --gap: 1rem;\n\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--gap);\n}\n\n.flexbox-grid > * {\n  flex: 1 1 var(--min);\n}\n\n/** Intrinsic Container */\n.container {\n  width: min(100% - 3rem, var(--container-max, 60ch));\n  margin-inline: auto;\n}\n\n/** Breakout Grid */\n.breakout-grid {\n  --max-content-width: 50ch;\n  --breakout-difference: 0.2;\n\n  /*  Compute total allowed grid width to `--breakout-difference` \n      larger than content area  */\n  --breakout-grid-width: calc(\n    var(--max-content-width) +\n      (var(--max-content-width) * var(--breakout-difference))\n  );\n\n  display: grid;\n  grid-template-columns:\n    [grid-start] 1fr\n    [content-start] minmax(min(100%, var(--max-content-width)), 1fr)\n    [content-end] 1fr\n    [grid-end];\n  width: min(100% - 2rem, var(--breakout-grid-width));\n  row-gap: 1rem;\n  margin: 5vb auto;\n}\n\n.breakout-grid > *:not(.breakout) {\n  grid-column: content;\n}\n\n.breakout-grid > .breakout {\n  grid-column: grid;\n}\n\n/** Responsive Padding */\n.responsive-padding {\n  padding: 1.5rem clamp(1rem, 5%, 3rem);\n}\n\n/** Responsive Sidebar Layout */\n.sidebar {\n  display: grid;\n  grid-template-columns: fit-content(20ch) minmax(min(50vw, 30ch), 1fr);\n}\n\n/** Aspect Ratio Gallery */\n.aspect-ratio-gallery {\n  --min: 15rem;\n  --aspect-ratio: 4/3;\n  --gap: 0;\n}\n\n.aspect-ratio-gallery li {\n  height: max(25vh, 15rem);\n}\n\n@supports (aspect-ratio: 1) {\n  .aspect-ratio-gallery li {\n    aspect-ratio: var(--aspect-ratio);\n    height: auto;\n  }\n}\n\n.aspect-ratio-gallery img {\n  display: block;\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n/** Flexible Unbreakable Boxes */\n.unbreakable-box {\n  --color-light: #e0d4f6;\n  --color-dark: #675883;\n\n  margin: 2rem auto;\n  color: var(--color-dark);\n  background-color: var(--color-light);\n  font-size: 1.15rem;\n  /* Smol Responsive Padding FTW! */\n  padding: clamp(0.75rem, 3%, 2rem);\n  /* Provide a max-width and prevent overflow */\n  width: min(50ch, 90%);\n  /* Help prevent overflow of long words/names/URLs */\n  word-break: break-word;\n  /* Optional, not supported for all languages */\n  hyphens: auto;\n}\n\n.unbreakable-box footer {\n  padding: 0.25em 0.5em;\n  margin-top: 1rem;\n  color: var(--color-light);\n  background-color: var(--color-dark);\n  font-size: 0.9rem;\n  /* Creates a visual box shrunk to `max-content` */\n  width: fit-content;\n}\n\n/** Background Picture */\n.background-picture img {\n  --background-img-brightness: 0.45;\n  --background-img-saturate: 1.25;\n\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n  /* decrease brightness to improve text contrast */\n  filter: brightness(var(--background-img-brightness))\n    saturate(var(--background-img-saturate));\n}\n\n/* Necessary if not already within a reset */\n.background-picture :is(img, picture) {\n  display: block;\n}\n\n.background-picture__content {\n  /* ensure stacking context above the picture */\n  position: relative;\n  align-self: center;\n  color: #fff;\n  text-align: center;\n  padding: 1rem;\n}\n\n.background-picture__content p {\n  font-size: clamp(1.35rem, 5vw, 1.75rem);\n  line-height: 1.3;\n}\n\n/** Composable Card Component */\n.card-component {\n  --img-ratio: 3/2;\n\n  display: flex;\n  flex-direction: column;\n  /* Supported for flexbox in modern browsers since April 2021 */\n  gap: 1rem;\n  box-shadow: 0 0 0.5rem hsl(0 0% 0% / 35%);\n  border-radius: 0.5rem;\n}\n\n.card-component > img {\n  aspect-ratio: var(--img-ratio);\n  object-fit: cover;\n  width: 100%;\n}\n\n.card-component > img:first-child {\n  border-radius: 0.5rem 0.5rem 0 0;\n}\n\n.card-component > img:last-child {\n  border-radius: 0 0 0.5rem 0.5rem;\n  margin-top: auto;\n}\n\n.card-component > :not(img) {\n  margin-left: 1rem;\n  margin-right: 1rem;\n\n  /* Prevent typography "orphans" */\n  text-wrap: pretty;\n}\n\n.card-component > :not(img):first-child {\n  margin-top: 1rem;\n}\n\n/* Enhanced `:not()` accepts a selector list,\nbut as a fallback you can chain `:not()` instead */\n.card-component > :last-of-type:not(img, h2, h3, h4) {\n  margin-bottom: 1rem;\n}\n\n.card-component > :not(h2, h3, h4) {\n  font-size: 0.9rem;\n}\n\n.card-component > a {\n  align-self: start;\n}\n\n/** Avatar List Component */\n.avatar-list {\n  --avatar-size: 3rem;\n  --avatar-count: 3;\n\n  display: grid;\n  /* Default to displaying most of the avatar to\n  enable easier access on touch devices, ensuring\n  the WCAG touch target size is met or exceeded */\n  grid-template-columns: repeat(\n    var(--avatar-count),\n    max(44px, calc(var(--avatar-size) / 1.15))\n  );\n  /* `padding` matches added visual dimensions of\n  the `box-shadow` to help create a more accurate\n  computed component size */\n  padding: 0.08em;\n  font-size: var(--avatar-size);\n}\n\n@media (any-hover: hover) and (any-pointer: fine) {\n  .avatar-list {\n    /* We create 1 extra cell to enable the computed \n    width to match the final visual width */\n    grid-template-columns: repeat(\n      calc(var(--avatar-count) + 1),\n      calc(var(--avatar-size) / 1.75)\n    );\n  }\n}\n\n.avatar-list li {\n  width: var(--avatar-size);\n  height: var(--avatar-size);\n}\n\n.avatar-list li:hover ~ li a,\n.avatar-list li:focus-within ~ li a {\n  transform: translateX(33%);\n}\n\n.avatar-list img,\n.avatar-list a {\n  display: block;\n  border-radius: 50%;\n}\n\n.avatar-list a {\n  transition: transform 180ms ease-in-out;\n}\n\n.avatar-list img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  background-color: #fff;\n  box-shadow:\n    0 0 0 0.05em #fff,\n    0 0 0 0.08em rgba(0, 0, 0, 0.15);\n}\n\n.avatar-list a:focus {\n  outline: 2px solid transparent;\n  /* Double-layer trick to work for dark and light backgrounds */\n  box-shadow:\n    0 0 0 0.08em #29344b,\n    0 0 0 0.12em white;\n}\n\n/** Scroll Snap */\n.scroll-snap {\n  /* Set up container positioning */\n  display: grid;\n  grid-auto-flow: column;\n  grid-gap: 1.5rem;\n  /* Enable overflow along our scroll axis */\n  overflow-x: auto;\n  /* Define axis and scroll type, where\n  `mandatory` means any scroll attempt will\n  cause a scroll to the next item */\n  scroll-snap-type: x mandatory;\n  padding: 0 0 1.5rem;\n  -webkit-overflow-scrolling: touch;\n}\n\n.scroll-snap > * {\n  width: min(45ch, 60vw);\n  /* Choose how to align children on scroll */\n  scroll-snap-align: center;\n  /* Prevents scrolling past more than one child */\n  scroll-snap-stop: always;\n}\n\n/** Focus Style */\n/* For "real-world" usage, you do not need to scope\nthese custom properties */\n.focus-styles :is(a, button, input, textarea, summary) {\n  /* Using max() ensures at least a value of 2px, \n  while allowing the possibility of scaling \n  relative to the component */\n  --outline-size: max(2px, 0.08em);\n  --outline-style: solid;\n  --outline-color: currentColor;\n}\n\n/* Base :focus styles for fallback purposes */\n.focus-styles :is(a, button, input, textarea, summary):focus {\n  outline: var(--outline-size) var(--outline-style) var(--outline-color);\n  outline-offset: var(--outline-offset, var(--outline-size));\n}\n\n/* Final :focus-visible styles */\n.focus-styles :is(a, button, input, textarea):focus-visible {\n  outline: var(--outline-size) var(--outline-style) var(--outline-color);\n  outline-offset: var(--outline-offset, var(--outline-size));\n}\n\n/* Remove base :focus styles when :focus-visible is available */\n.focus-styles :is(a, button, input, textarea):focus:not(:focus-visible) {\n  outline: none;\n}\n\n/* Demonstration of customizing */\n.focus-styles li:nth-of-type(2) a {\n  --outline-style: dashed;\n}\n\n.focus-styles input {\n  --outline-color: red;\n}\n\n.focus-styles textarea {\n  --outline-size: 0.25em;\n  --outline-style: dotted;\n  --outline-color: green;\n}\n\n.focus-styles li:nth-of-type(4) button {\n  font-size: 2.5rem;\n}\n\n/** Visited Styles */\nul.visited-styles {\n  --color-background: #fff;\n  --color-accent: green;\n\n  display: grid;\n  grid-gap: 0.5rem;\n  width: fit-content;\n  padding: 1rem;\n  border-radius: 0.5rem;\n  background-color: var(--color-background);\n  border: 1px solid var(--color-accent);\n}\n\n.visited-styles a {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-end;\n  color: #222;\n  text-decoration-color: var(--color-accent);\n  text-decoration-style: dotted;\n  text-underline-offset: 0.15em;\n}\n\n.visited-styles a span {\n  margin-right: 0.25em;\n  /* Remove from normal document flow\n  which excludes it from receiving \n  the underline \u2728 */\n  float: left;\n}\n\n.visited-styles a span::after {\n  content: \'\u2714\';\n  color: var(--color-background);\n}\n\n.visited-styles a:visited span::after {\n  color: var(--color-accent);\n}\n\n/** Document Styles */\n* {\n  box-sizing: border-box;\n  margin: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  padding: 5vh clamp(1rem, 5vw, 3rem) 1rem;\n  font-family: system-ui, sans-serif;\n  line-height: 1.5;\n  color: #222;\n}\n\nbody > * {\n  --layout-spacing: max(8vh, 3rem);\n  --max-width: 70ch;\n  width: min(100%, var(--max-width));\n  margin-left: auto;\n  margin-right: auto;\n}\n\nmain {\n  margin-top: var(--layout-spacing);\n}\n\nfooter {\n  margin-top: auto;\n  padding-top: var(--layout-spacing);\n}\n\nfooter p {\n  border-top: 1px solid #ccc;\n  padding-top: 0.25em;\n  font-size: 0.9rem;\n  color: #767676;\n}\n\n:is(h1, h2, h3) {\n  line-height: 1.2;\n}\n\n:is(h2, h3):not(:first-child) {\n  margin-top: 2em;\n}\n\narticle * + * {\n  margin-top: 1em;\n}\n\na {\n  color: navy;\n  text-underline-offset: 0.15em;\n}\n\n/** Transitions */\n.transitions > * {\n  --transition-property: transform;\n  --transition-duration: 180ms;\n\n  transition: var(--transition-property) var(--transition-duration) ease-in-out;\n}\n\n.rise:hover > * {\n  transform: translateY(-25%);\n}\n\n.rotate:hover > * {\n  transform: rotate(15deg);\n}\n\n.zoom:hover > * {\n  transform: scale(1.1);\n}\n\n.fade > * {\n  --transition-property: opacity;\n  --transition-duration: 500ms;\n}\n\n.fade:hover > * {\n  opacity: 0;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  .transitions > * {\n    --transition-duration: 0.01ms;\n  }\n}\n\n/** Article Anchor */\n.article-anchor {\n  display: grid;\n  grid-template-columns: min-content auto;\n  position: relative;\n  margin-top: 2em;\n  /* You could pull this property out and\n  generalize it under the selector `[id]` as\n  it won\'t affect flow layout or regular margins */\n  scroll-margin-top: 2em;\n}\n\n.article-anchor:target::before {\n  content: "Is it me you\'re looking for?";\n  position: absolute;\n  font-size: 0.9rem;\n  top: -1.25rem;\n  left: 0;\n  font-style: italic;\n  color: currentColor;\n}\n\n.article-anchor a {\n  grid-row-start: 1;\n  align-self: start;\n  font-size: 1rem;\n  line-height: 1;\n  /* We\'re using `transform` vs. margins */\n  transform: translateX(-50%) translateY(25%);\n  text-decoration: none;\n  /* Be sure to check that your own colors still meet\n  or exceed 4.5:1 contrast when using lowering opacity */\n  opacity: 0.75;\n}\n\n.article-anchor a:hover {\n  text-decoration: underline;\n  text-underline-offset: 0.25em;\n  opacity: 1;\n}\n\n.article-anchor a:focus {\n  outline: 2px solid currentColor;\n  outline-offset: 0.15em;\n}\n\n/* Visually hidden while remaining accessible to\nassistive tech like screen readers */\n.article-anchor-hidden {\n  width: 0;\n  height: 0;\n  overflow: hidden;\n  position: absolute;\n}\n\n/** List Markers */\n.list-markers {\n  --marker-color: #a150fb;\n\n  padding: 0;\n  margin: 0 0 0 2em;\n}\n\n.list-markers li {\n  padding-left: 0.5em;\n}\n\n.list-markers li + li {\n  margin-top: 0.5em;\n}\n\n.list-markers li::marker {\n  color: var(--marker-color);\n}\n\nul.list-markers li::marker {\n  content: attr(data-icon);\n  font-size: 1.15em;\n}\n\nol.list-markers li::marker {\n  /* The `list-item`  counter is provided by \n  the browser for lists */\n  content: counter(list-item);\n  font-family: cursive;\n  font-size: 1.5em;\n}\n',s={},l="Smol CSS Layouts",c={id:"snippets/CSS/smol-css-layouts",title:"Smol CSS Layouts",description:"",source:"@site/docs/snippets/CSS/smol-css-layouts.mdx",sourceDirName:"snippets/CSS",slug:"/snippets/CSS/smol-css-layouts",permalink:"/my-learning-curve/docs/snippets/CSS/smol-css-layouts",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/snippets/CSS/smol-css-layouts.mdx",tags:[],version:"current",frontMatter:{},sidebar:"snippetsSidebar",previous:{title:"Reset",permalink:"/my-learning-curve/docs/snippets/CSS/reset"},next:{title:"Superposition Grid",permalink:"/my-learning-curve/docs/snippets/CSS/superposition-grid"}},d={},m=[];function u(n){const e={h1:"h1",...(0,o.a)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"smol-css-layouts",children:"Smol CSS Layouts"}),"\n",(0,r.jsx)(a.Z,{language:"css",children:i})]})}function p(n={}){const{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(u,{...n})}):u(n)}}}]);