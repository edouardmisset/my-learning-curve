# Development Checklist

## Before you commit any changes, check your work against these requirements:

1. Config

- Please make sure you have the correct **`env`** variables (`cp .env.dev .env` & modify the required values...)
- Please make sure you have the correct **`cypress.env.json`** variables (`cp
cypress.env.json.dev cypress.env.json` & modify the required values...) for
  end-to-end testing
- (For Windows' users, disable git's `CRLF` line ending: `sh git config --system core.autocrlf false`)

2. Dev

- Please make sure you follow the **[folder](./02-folder-structure.md) and [component](./03-component-structure.md) structure**
- Please make sure you follow the **[naming](./01-naming-conventions.md) conventions**

3. Test

- Please make sure you **manually test** your code
- Please make sure the **unit tests** pass (`yarn test`)
- Please make sure the end-to-end (**e2e**) tests pass (`yarn test:e2e`)

4. Commit

- Please make sure your code is **linted** (`yarn lint`)
- Please make sure you do not have **unused variables** or **unused imports** (check your linter)
- Please make sure your code is **formatted** (`yarn format`)
- Please make sure your code passes **static code analysis** checks (`yarn type:checking`)
- Please make sure your commit message follows the [**conventional commits**](./04-conventional-commits.md) guidelines

5. Merge

- Please make sure you are **up to date with the `main`** branch and there are no conflicts (`git merge main`)

**Closing thoughts**: these can be automated, some already are on save or on commits. Don't hesitate to automate more if you can (weather in your editor or more globally in the workspace for everyone...)
