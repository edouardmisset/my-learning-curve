"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[8603],{5012:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var s=t(4848),i=t(8453);const r={},o="Merge / Pull Request Recommandations",a={id:"documentation/Project Collaboration/merge-request-recommandations",title:"Merge / Pull Request Recommandations",description:"Creating the perfect MR",source:"@site/docs/documentation/Project Collaboration/06-merge-request-recommandations.md",sourceDirName:"documentation/Project Collaboration",slug:"/documentation/Project Collaboration/merge-request-recommandations",permalink:"/my-learning-curve/docs/documentation/Project Collaboration/merge-request-recommandations",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/documentation/Project Collaboration/06-merge-request-recommandations.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Conventional Commits",permalink:"/my-learning-curve/docs/documentation/Project Collaboration/conventional-commits"},next:{title:"Git branch strategies",permalink:"/my-learning-curve/docs/documentation/Project Collaboration/git-workflow"}},c={},l=[{value:"Creating the perfect MR",id:"creating-the-perfect-mr",level:2},{value:"Receiving review comments",id:"receiving-review-comments",level:2},{value:"Writing review comments using &quot;<em>Conventional Comments</em>&quot;",id:"writing-review-comments-using-conventional-comments",level:2},{value:"Abstract",id:"abstract",level:3},{value:"Format",id:"format",level:3},{value:"Labels",id:"labels",level:3},{value:"Decorations",id:"decorations",level:3},{value:"Best Practices",id:"best-practices",level:3}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"merge--pull-request-recommandations",children:"Merge / Pull Request Recommandations"}),"\n",(0,s.jsx)(n.h2,{id:"creating-the-perfect-mr",children:"Creating the perfect MR"}),"\n",(0,s.jsx)(n.p,{children:"There is no such thing as a perfect MR, but there are some things you can do to\nmake it easier to review your MR. This will not only help reviewers but also you\nas a contributor to having your change merged quicker, and the end-user getting\nyour improvement faster."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Make your MRs as small as possible"}),". A MR should only refactor one thing,\nfix one thing, add one feature, or adjust a single subject in the\ndocumentation. If you want to change multiple things, please create multiple\nMRs. Smaller MRs have a smaller scope, need less time to review, conflict\nless often, and generally need fewer review iterations."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Only change one thing at a time"}),". This is the same as the previous point\nbut a bit more specific. It is tempting to improve those one or two lines\nyou've noticed nearby, but please don't. Put those in a separate MR.\nUnrelated changes in your MR are distracting and often lead to questions. In\ncontrast, in an independent MR, it would be a quick and simple review and\nmerge."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Test your changes before creating a MR"}),". This sounds obvious, but we often\nsee MRs that contain impossible code that could never have worked or\ndocumentation changes that aren't visible on the resulting page. Of course, a\nwaste of energy for both you and the reviewer; it adds an unneeded review\niteration. Make sure you at least run and physically test your changes.\nEnsure they work (or, in the case of documentation: look) as intended."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Ensure your MR is based on the latest version of the main upstream\nbranch"}),". Make sure to pull in the latest upstream changes before creating\nyour MR. While you wrote your changes, upstream may have changed. This can\nlead to merge conflicts, failing tests, or your changes not working as\nexpected."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Create a (feature) branch"}),". When you create a MR, it is based on a branch\n(usually the main branch). You must create a new feature branch for each MR\nyou create. This makes it easier to keep your main branch up to date with the\nupstream branch, and it makes it easier to delete the branch after the MR has\nbeen merged."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Motivate your MR by adding a clear title & extensive description"}),". When\nyou open up a MR, you will be provided a MR template. Use the template, fill\nout as many fields as possible, take your time to write a good, clear, and\nconcise title, and add an extensive description of your change. Be sure to\nadd a motivation (or use case) to your MR, so the reviewer can understand why\nyou are making this change (or why you make certain decisions)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"receiving-review-comments",children:"Receiving review comments"}),"\n",(0,s.jsx)(n.p,{children:"When your MR is open, someone will look at your code at some point. The reviewer\nlikely has some comments on your code or even some requests for changes to your\ncode."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Be very aware these review comments are not personal"}),". The reviewer is not\ntrying to insult you or make you feel bad. They are trying to help you improve\nyour MR, so it can be merged."]}),"\n",(0,s.jsx)(n.p,{children:"No matter how experienced you are, there is always something to learn from\nothers, so don't hate it, embrace it. \ud83d\ude04 Don't be afraid to ask questions, or\nask for clarification. If you don't understand something, ask!"}),"\n",(0,s.jsxs)(n.h2,{id:"writing-review-comments-using-conventional-comments",children:['Writing review comments using "',(0,s.jsx)(n.a,{href:"https://conventionalcomments.org/",children:(0,s.jsx)(n.em,{children:"Conventional Comments"})}),'"']}),"\n",(0,s.jsx)(n.h3,{id:"abstract",children:"Abstract"}),"\n",(0,s.jsxs)(n.p,{children:["Conventional Comments is a standardized approach for formatting comments in\nvarious review and feedback processes, such as code reviews, peer reviews, and\nediting. The goal is to create comments that are easy to understand and search.\nLabeling comments with specific tags helps communicate the intention clearly,\nencourages collaboration, and facilitates machine parsing.",(0,s.jsx)(n.br,{}),"\n","To sum up, this system encourages clear communication, collaboration, and\nefficient review processes."]}),"\n",(0,s.jsx)(n.h3,{id:"format",children:"Format"}),"\n",(0,s.jsx)(n.p,{children:"Comments adhere to a consistent format:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:"<label> [decorations]: <subject>\n\n[discussion]\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"label"}),": Signifies the type of comment."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"subject"}),": The main message of the comment."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"decorations (optional)"}),": Extra labels for the comment, comma-separated."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"discussion (optional)"}),": Supporting statements, context, reasoning, and next\nsteps."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:"question (non-blocking): At this point, does it matter which thread has won?\n\nMaybe to prevent a race condition we should keep looping until they've all won?\n"})}),"\n",(0,s.jsx)(n.p,{children:"Can be parsed into:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "label": "question",\n  "subject": "At this point, does it matter which thread has won?",\n  "decorations": ["non-blocking"],\n  "discussion": "Maybe to prevent a race condition we should keep looping until they\'ve all won?"\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"labels",children:"Labels"}),"\n",(0,s.jsx)(n.p,{children:"Recommended labels for comments:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Label"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"praise"}),(0,s.jsx)(n.td,{children:"Highlight positive aspects."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nitpick"}),(0,s.jsx)(n.td,{children:"Trivial, preference-based requests."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"suggestion"}),(0,s.jsx)(n.td,{children:"Propose improvements, be explicit."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"issue"}),(0,s.jsx)(n.td,{children:"Highlight specific problems, pair with suggestions."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"todo"}),(0,s.jsx)(n.td,{children:"Small, necessary changes before acceptance."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"question"}),(0,s.jsx)(n.td,{children:"Seek clarification or investigation."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"thought"}),(0,s.jsx)(n.td,{children:"Share valuable ideas."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"chore"}),(0,s.jsx)(n.td,{children:"Simple tasks for official acceptance."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"note"}),(0,s.jsx)(n.td,{children:"Non-blocking, highlights something for the reader."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:"issue (ux,non-blocking): These buttons should be red, but let's handle this in a follow-up.\n"})}),"\n",(0,s.jsx)(n.h3,{id:"decorations",children:"Decorations"}),"\n",(0,s.jsx)(n.p,{children:"Decorations provide additional context for comments:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Decoration"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"(non-blocking)"}),(0,s.jsx)(n.td,{children:"Should not prevent acceptance."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"(blocking)"}),(0,s.jsx)(n.td,{children:"Should prevent acceptance until resolved."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"(if-minor)"}),(0,s.jsx)(n.td,{children:"Resolve only if changes are minor or trivial."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:"suggestion (security): I'm concerned about implementing our own DOM purifying function here\u2026\n\nCould we consider using the framework instead?\n"})}),"\n",(0,s.jsx)(n.h3,{id:"best-practices",children:"Best Practices"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Mentoring pays off exponentially"}),"\n",(0,s.jsx)(n.li,{children:"Leave actionable comments"}),"\n",(0,s.jsx)(n.li,{children:"Combine similar comments"}),"\n",(0,s.jsx)(n.li,{children:"Replace \u201cyou\u201d with \u201cwe\u201d"}),"\n",(0,s.jsx)(n.li,{children:"Replace \u201cshould\u201d with \u201ccould\u201d"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-markdown",children:"nitpick: little star => little bat\n\nCan we update the other references as well?\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);