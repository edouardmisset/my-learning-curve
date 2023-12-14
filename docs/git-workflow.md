# Git branch strategies

The following strategies are the most popular strategies used.
In order of complexity, they are:

- [GitHub Flow Guide](https://guides.github.com/introduction/flow/) & [GitHub Flow](https://githubflow.github.io/)
- [GitLab Flow Guide](https://about.gitlab.com/blog/2023/07/27/gitlab-flow-duo/)
- [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/) by
  Vincent Driessen (Original blog post) & [GitFlow on GitHub](https://github.com/nvie/gitflow)

## GitFlow Branch Strategy:

1. **Overview:** GitFlow is a branching model that defines a strict branching structure.
2. **Branches:**
   - **main:** Represents production-ready code.
   - **develop:** Integration branch for ongoing development.
   - **feature:** Individual features developed in separate branches.
   - **release:** Prepares for a new production release.
   - **hotfix:** Addresses critical issues in the production code.
3. **Workflow:** Features merge into develop, releases merge into main and develop, hotfixes merge into main and develop.
4. **Pros:** Well-defined structure, suitable for larger projects.
5. **Cons:** Can be complex for smaller projects, and feature branches may lead to longer development cycles.

[GitFlow cheatsheet & **tool** (_avh_)](https://danielkummer.github.io/git-flow-cheatsheet/)

![GitFlow Diagram](uploads/git-branching-model.png)

## GitHub Flow Branch Strategy:

1. **Overview:** GitHub Flow is a lightweight, simplified branching model.
2. **Branches:**
   - **main:** Represents the main development line.
   - **feature:** Features developed in individual branches.
3. **Workflow:** Developers create feature branches, open pull requests for discussion, and merge directly into the main branch after review.
4. **Pros:** Simple and streamlined, encourages continuous delivery.
5. **Cons:** May not be suitable for complex release management.

## GitLab Flow Branch Strategy:

1. **Overview:** GitLab Flow is similar to GitHub Flow with a focus on CI/CD and collaboration.
2. **Branches:**
   - **main:** Represents the main development line.
   - **feature:** Features developed in individual branches.
   - **Production:** Represents the production-ready code.
3. **Workflow:** Developers create feature branches, open merge requests for discussion, and merge into the main and production branches after review.
4. **Pros:** Emphasizes CI/CD, seamless collaboration, and production tracking.
5. **Cons:** May require additional setup for CI/CD pipelines.

## More resources:

- Comparing
  workflows by
  [Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows) and [GitKraken](https://www.gitkraken.com/learn/git/best-practices/git-branch-strategy)
- GitFlow
  by
  [Atlassian](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
  and by [GitKraken](https://www.gitkraken.com/learn/git/git-flow)
