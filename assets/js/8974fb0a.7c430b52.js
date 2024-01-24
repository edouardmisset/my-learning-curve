"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[365],{142:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var o=t(5893),i=t(1151);const a={},s="Conventional Commits",r={id:"documentation/conventional-commits",title:"Conventional Commits",description:"Summary",source:"@site/docs/documentation/04-conventional-commits.md",sourceDirName:"documentation",slug:"/documentation/conventional-commits",permalink:"/my-learning-curve/docs/documentation/conventional-commits",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/documentation/04-conventional-commits.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Component Structure",permalink:"/my-learning-curve/docs/documentation/component-structure"},next:{title:"Merge Request / Pull Request",permalink:"/my-learning-curve/docs/documentation/merge-request-recommandations"}},c={},d=[{value:"Summary",id:"summary",level:2},{value:"Examples",id:"examples",level:2},{value:"Commit message with description and breaking change footer",id:"commit-message-with-description-and-breaking-change-footer",level:3},{value:"Commit message with ! to draw attention to breaking change",id:"commit-message-with--to-draw-attention-to-breaking-change",level:3}];function m(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"conventional-commits",children:"Conventional Commits"}),"\n",(0,o.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/#summary",children:"Conventional Commits v1.0.0"})," specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with ",(0,o.jsx)(n.a,{href:"http://semver.org/",children:"SemVer"}),", by describing the features, fixes, and breaking changes made in commit messages."]}),"\n",(0,o.jsx)(n.p,{children:"The commit message should be structured as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markdown",children:"type[optional scope]: description\n\n[optional body]\n\n[optional footer(s)]\n"})}),"\n",(0,o.jsx)(n.p,{children:"The commit contains the following structural elements, to communicate intent to the consumers of your library:"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"fix"}),": a commit of the type ",(0,o.jsx)(n.code,{children:"fix"})," patches a bug in your codebase (this correlates with ",(0,o.jsx)(n.a,{href:"https://semver.org/#summary",children:(0,o.jsx)(n.strong,{children:"PATCH"})})," in Semantic Versioning)."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"feat"}),": a commit of the type ",(0,o.jsx)(n.code,{children:"feat"})," introduces a new feature to the codebase (this correlates with ",(0,o.jsx)(n.a,{href:"https://semver.org/#summary",children:(0,o.jsx)(n.strong,{children:"MINOR"})})," in Semantic Versioning)."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"BREAKING CHANGE"}),": a commit that has a footer ",(0,o.jsx)(n.code,{children:"BREAKING CHANGE:"}),", or appends a ",(0,o.jsx)(n.code,{children:"!"})," after the type/scope, introduces a breaking API change (correlating with ",(0,o.jsx)(n.a,{href:"https://semver.org/#summary",children:(0,o.jsx)(n.strong,{children:"MAJOR"})})," in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type."]}),"\n",(0,o.jsxs)(n.p,{children:["types other than fix: and feat: are allowed, @commitlint/config-conventional recommends ",(0,o.jsx)(n.strong,{children:"build:, chore:, ci:, docs:, style:, refactor:, perf:, test:"}),", and others.\nfooters other than BREAKING CHANGE: ",(0,o.jsx)(n.code,{children:"description"})," may be provided and follow a convention similar to ",(0,o.jsx)(n.a,{href:"https://git-scm.com/docs/git-interpret-trailers",children:"git trailer format"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Additional types are not mandated by the Conventional Commits specification, and have no implicit effect in Semantic Versioning (unless they include a BREAKING CHANGE). A scope may be provided to a commit\u2019s type, to provide additional contextual information and is contained within parenthesis, e.g., ",(0,o.jsx)(n.code,{children:"feat(parser): add ability to parse arrays."})]}),"\n",(0,o.jsx)(n.h2,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.h3,{id:"commit-message-with-description-and-breaking-change-footer",children:"Commit message with description and breaking change footer"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markdown",children:"feat: allow provided config object to extend other configs\n\nBREAKING CHANGE: `extends` key in config file is now used for extending other config files\n"})}),"\n",(0,o.jsx)(n.h3,{id:"commit-message-with--to-draw-attention-to-breaking-change",children:"Commit message with ! to draw attention to breaking change"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markdown",children:"feat!: send an email to the customer when a product is shipped\n"})}),"\n",(0,o.jsx)(n.p,{children:"Commit message with scope and ! to draw attention to breaking change"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markdown",children:"feat(api)!: send an email to the customer when a product is shipped\n"})}),"\n",(0,o.jsx)(n.p,{children:"Commit message with both ! and BREAKING CHANGE footer"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markdown",children:"chore!: drop support for Node 6\n\nBREAKING CHANGE: use JavaScript features not available in Node 6.\n"})}),"\n",(0,o.jsx)(n.p,{children:"Commit message with no body"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markdown",children:"docs: correct spelling of CHANGELOG\n"})}),"\n",(0,o.jsx)(n.p,{children:"Commit message with scope"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-markdown",children:"feat(lang): add Polish language\n"})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}}}]);