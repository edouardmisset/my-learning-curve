"use strict";(self.webpackChunkmy_learning_curve=self.webpackChunkmy_learning_curve||[]).push([[684],{842:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var r=i(4848),t=i(8453);const s={},l="Git branch strategies",o={id:"documentation/Project Collaboration/git-workflow",title:"Git branch strategies",description:"Current workflow",source:"@site/docs/documentation/Project Collaboration/07-git-workflow.md",sourceDirName:"documentation/Project Collaboration",slug:"/documentation/Project Collaboration/git-workflow",permalink:"/my-learning-curve/docs/documentation/Project Collaboration/git-workflow",draft:!1,unlisted:!1,editUrl:"https://github.com/edouardmisset/my-learning-curve/tree/main/docs/documentation/Project Collaboration/07-git-workflow.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Merge / Pull Request Recommandations",permalink:"/my-learning-curve/docs/documentation/Project Collaboration/merge-request-recommandations"},next:{title:"Tech Stack",permalink:"/my-learning-curve/docs/documentation/Project Collaboration/tech-stack"}},c={},a=[{value:"Current workflow",id:"current-workflow",level:2},{value:"Part 1",id:"part-1",level:3},{value:"New feature / Known bug workflow",id:"new-feature--known-bug-workflow",level:4},{value:"Degraded workflow (quick fix)",id:"degraded-workflow-quick-fix",level:4},{value:"Part 2",id:"part-2",level:3},{value:"Changing git workflow",id:"changing-git-workflow",level:2},{value:"GitFlow Branch Strategy",id:"gitflow-branch-strategy",level:3},{value:"GitHub Flow Branch Strategy",id:"github-flow-branch-strategy",level:3},{value:"GitLab Flow Branch Strategy",id:"gitlab-flow-branch-strategy",level:3},{value:"Resources",id:"resources",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"git-branch-strategies",children:"Git branch strategies"}),"\n",(0,r.jsx)(n.h2,{id:"current-workflow",children:"Current workflow"}),"\n",(0,r.jsx)(n.h3,{id:"part-1",children:"Part 1"}),"\n",(0,r.jsx)(n.h4,{id:"new-feature--known-bug-workflow",children:"New feature / Known bug workflow"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["From an issue in gitlab, find the ",(0,r.jsx)(n.code,{children:"Create merge request"})," button. This creates\na branch with the name of the issue"]}),"\n",(0,r.jsxs)(n.li,{children:["In you editor, ",(0,r.jsx)(n.code,{children:"fetch"})," the repos with this new branch ",(0,r.jsx)(n.code,{children:"git fetch --all"})]}),"\n",(0,r.jsxs)(n.li,{children:["Switch to this branch ",(0,r.jsx)(n.code,{children:"git checkout <name-of your-branch>"})]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"degraded-workflow-quick-fix",children:"Degraded workflow (quick fix)"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Switch to a new branch ",(0,r.jsx)(n.code,{children:"git checkout -b <name-of-the-new-branch>"})]}),"\n",(0,r.jsxs)(n.li,{children:["Push this new branch to the server\n",(0,r.jsx)(n.code,{children:"git push --set-upstream origin $(git_current_branch)"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"part-2",children:"Part 2"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Make your changes"}),"\n",(0,r.jsx)(n.li,{children:"Add them to the staging area"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"# Add each file\ngit add <name-of-the-file-to-commit> <name-of-the-file-to-commit-2>\n#  or add every file that changed\ngit add --all\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Commit them ",(0,r.jsx)(n.code,{children:'git commit --message "fix: fix the slider"'})," (please follow\nthe ",(0,r.jsx)(n.a,{href:"/my-learning-curve/docs/documentation/Project%20Collaboration/conventional-commits",children:"conventional commit"})," convention when writing\nyour commit message)"]}),"\n",(0,r.jsxs)(n.li,{children:["Go to github / gitlab's interface and merge from there.","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Feature / bug"}),": everything is already in place"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Quick Fix"}),": you'll see a ",(0,r.jsx)(n.code,{children:"Create merge request"})," button (related to your branch name).\nAlternatively, go the to branches section of gitlab, find your branch and\nclick the ",(0,r.jsx)(n.code,{children:"New"})," (merge request)."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"Ensure that all the checks of the CI pipeline pass"}),"\n",(0,r.jsxs)(n.li,{children:["Merge the content of your branch into ",(0,r.jsx)(n.code,{children:"main"})]}),"\n",(0,r.jsxs)(n.li,{children:["In you editor switch to the ",(0,r.jsx)(n.code,{children:"main"})," branch ",(0,r.jsx)(n.code,{children:"git checkout main"})]}),"\n",(0,r.jsxs)(n.li,{children:["Pull ",(0,r.jsx)(n.code,{children:"git pull"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"changing-git-workflow",children:"Changing git workflow"}),"\n",(0,r.jsx)(n.p,{children:"The following strategies are the most popular strategies used.\nIn order of complexity, they are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://guides.github.com/introduction/flow/",children:"GitHub Flow Guide"})," & ",(0,r.jsx)(n.a,{href:"https://githubflow.github.io/",children:"GitHub\nFlow"})]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://about.gitlab.com/blog/2023/07/27/gitlab-flow-duo/",children:"GitLab Flow Guide"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://nvie.com/posts/a-successful-git-branching-model/",children:"GitFlow"})," by\nVincent Driessen (Original blog post) & ",(0,r.jsx)(n.a,{href:"https://github.com/nvie/gitflow",children:"GitFlow on GitHub"})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"gitflow-branch-strategy",children:"GitFlow Branch Strategy"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Overview:"})," GitFlow is a branching model that defines a strict branching structure."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Branches:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"main:"})," Represents production-ready code."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"develop:"})," Integration branch for ongoing development."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"feature:"})," Individual features developed in separate branches."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"release:"})," Prepares for a new production release."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"hotfix:"})," Addresses critical issues in the production code."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Workflow:"})," Features merge into develop, releases merge into main and\ndevelop, hotfixes merge into main and develop."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Pros:"})," Well-defined structure, suitable for larger projects."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cons:"})," Can be complex for smaller projects, and feature branches may lead\nto longer development cycles."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.a,{href:"https://danielkummer.github.io/git-flow-cheatsheet/",children:["GitFlow cheatsheet & ",(0,r.jsx)(n.strong,{children:"tool"})," (",(0,r.jsx)(n.em,{children:"avh"}),")"]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"GitFlow Diagram",src:i(2299).A+"",width:"1150",height:"1524"})}),"\n",(0,r.jsx)(n.h3,{id:"github-flow-branch-strategy",children:"GitHub Flow Branch Strategy"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Overview:"})," GitHub Flow is a lightweight, simplified branching model."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Branches:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"main:"})," Represents the main development line."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"feature:"})," Features developed in individual branches."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Workflow:"})," Developers create feature branches, open pull requests for\ndiscussion, and merge directly into the main branch after review."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Pros:"})," Simple and streamlined, encourages continuous delivery."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cons:"})," May not be suitable for complex release management."]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"gitlab-flow-branch-strategy",children:"GitLab Flow Branch Strategy"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Overview:"})," GitLab Flow is similar to GitHub Flow with a focus on CI/CD and\ncollaboration."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Branches:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"main:"})," Represents the main development line."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"feature:"})," Features developed in individual branches."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Production:"})," Represents the production-ready code."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Workflow:"})," Developers create feature branches, open merge requests for\ndiscussion, and merge into the main and production branches after review."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Pros:"})," Emphasizes CI/CD, seamless collaboration, and production tracking."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cons:"})," May require additional setup for CI/CD pipelines."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Comparing\nworkflows by\n",(0,r.jsx)(n.a,{href:"https://www.atlassian.com/git/tutorials/comparing-workflows",children:"Atlassian"})," and ",(0,r.jsx)(n.a,{href:"https://www.gitkraken.com/learn/git/best-practices/git-branch-strategy",children:"GitKraken"})]}),"\n",(0,r.jsxs)(n.li,{children:["GitFlow\nby\n",(0,r.jsx)(n.a,{href:"https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow",children:"Atlassian"}),"\nand by ",(0,r.jsx)(n.a,{href:"https://www.gitkraken.com/learn/git/git-flow",children:"GitKraken"})]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},2299:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/git-branching-model-7c44416894d064af9c20c3bc56c643e5.png"}}]);