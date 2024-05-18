# Tech Stack

## Linting and Formatting

We use [`ESLint`](https://eslint.org/) and [`Prettier`](https://prettier.io/)
for code linting and formatting, respectively.
`ESLint` helps us catch bugs, bad practices, etc., during development rather
than in production.
`Prettier` allows us to format our entire codebase uniformly, simplifying code
readability and team integration.

Before each commit, we automatically lint and format the code using
[`husky`](https://typicode.github.io/husky/) and
[`lint-staged`](https://github.com/lint-staged/lint-staged).

## Bundler

The bundler serves the following purposes:

> A module bundler provides a method for arranging and merging multiple
> JavaScript files into a unified single file. Using a JavaScript bundler
> becomes necessary when your project outgrows a single file or when dealing
> with libraries with numerous dependencies. As a result, the end-user's browser
> or client doesn't have to fetch numerous files individually.
>
> [source](https://dev.to/sayanide/the-what-why-and-how-of-javascript-bundlers-4po9)

After initializing this project with `CRA` (create-react-app), which uses the
`webpack` bundler, we switched to `Vite`, which uses `esbuild` and
`rollup` depending on the environment (`dev` or `production`).

This change has **dramatically** sped up the start time
(and productivity) in dev mode.

[More info](https://vitejs.dev/guide/why.html)

## Error Handling

Use `react-error-boundary` as a wrapper functional component
[react-error-boundary](https://github.com/bvaughn/react-error-boundary) +
[article](https://kentcdodds.com/blog/use-react-error-boundary-to-handle-errors-in-react)

## Router

- [react-router-dom](https://reactrouter.com/en/main) (industry standard)

## Complex State Management

- Redux + react-redux + [redux-toolkit](https://redux-toolkit.js.org/introduction/getting-started)

## UI Framework

### Different Types of Framework

- CSS module in React => **+** scoped styles
- Preprocessor (SASS) => **+** nesting, mixins, functions
- Utility class library => **+** unified UI | **-** verbose HTML code (many
  classes), risk with the cascade nature of `CSS`
- CSS-in-JS => **+** style components programmatically, create dynamic styles,
  scopes styles
- CSS framework (`Bulma`) => **+** prebuilt components | **-** large bundle size
- Component Library (`Mantine`, `Ant Design`, `MUI`, `Chakra`)

### Selection

- [Tailwind CSS](https://tailwindcss.com/) - [examples](https://tailwindui.com/) some are paid
- [Daisy UI](https://daisyui.com/) (Tailwind plugin) - [examples](https://daisyui.com/components/)
- [Material UI](https://mui.com/) - [examples](https://mui.com/components/tables/)
- [Styled Components](https://styled-components.com/) - [examples](https://styled-components.com/docs/basics#styling-any-component)
- [Emotion](https://emotion.sh/docs/introduction) - [examples](https://emotion.sh/docs/styled)

### Pros / Cons

|                        |          **Tailwind CSS** &nbsp; _Utility_          | **Daisy UI** &nbsp; _Utility + Components_  |         **Material UI** &nbsp; _Components_         |      **Styled Components** &nbsp; _CSS-in-JS_      | **Emotion** &nbsp; _CSS-in-JS_ |
| :--------------------: | :-------------------------------------------------: | :-----------------------------------------: | :-------------------------------------------------: | :------------------------------------------------: | :----------------------------: |
|         **+**          |     modular, rapid proto, lightweight, tooling      | same as Tailwind + components, cleaner HTML |                components, animation                | programmatic css, dynamic & scopes styles, dev exp |   same as Styled Components    |
|         **-**          | no components, learning curve, config, verbose HTML |           learning curve, config            | config, complex, heavy, learning curve, nested HTML |               syntax, learning curve               |   same as Styled Components    |
|         npm ↓          |                        2.5 M                        |                    25 k                     |                        900 k                        |                       3.7 M                        |             5.2 M              |
|       GitHub ⭐        |                        54 k                         |                     9 k                     |                        75 k                         |                        36 k                        |              15 k              |
|        # dev👩‍💻         |                         200                         |                     27                      |                         2 k                         |                        300                         |              270               |
|        License         |                         MIT                         |                     MIT                     |                         MIT                         |                        MIT                         |              MIT               |
|          Size          |                        4 MB                         |                   740 kB                    |                        9 MB                         |                        3 MB                        |             270 kB             |
| Initial Learning Curve |          moderate &nbsp; easy with tooling          |      moderate &nbsp; easy with tooling      |                        easy                         |                        hard                        |        moderate / hard         |
| Ease of customization  |                        easy                         |                    easy                     |                   moderate / hard                   |            easy with good CSS knowledge            |  easy with good CSS knowledge  |

=> The decision is made for a Material UI component library to save development time.

The two compared libraries are:

- [KendoUI](https://www.telerik.com/kendo-react-ui/components/)
- [SyncFusion](https://www.syncfusion.com/react-ui-components)

See the [Excel file](spec/kendoUIvsSyncFusion.xlsx)

**tldr**  
~~The SyncFusion library is more advanced and could help us avoid being stuck when customizing components.
The downside is that it is more expensive in the long run.~~
After trying `SyncFusion`, we opted for `Kendo` for more stable components, easier consumption, and faster development (components and documentation in "Functional Components").

=> `Styled Components` to restyle `Kendo` components and make `InView` components configurable.

### Theme / Graphic Charter

All support themes to unify the UI.

## Form

- **`react-hook-form`** [link](https://react-hook-form.com/)

## Graphs

- **`Kendo`** [link](https://www.telerik.com/kendo-react-ui/components/charts/)

## Table

- **`Kendo`** [link](https://www.telerik.com/kendo-react-ui/components/grid/)

## Notifications

- **`react-toastify`** [link](https://fkhadra.github.io/react-toastify/introduction/)

## Translation / Localization

- **`i18n`** [link](https://www.i18next.com/)

## Real-time Bidirectional Communication

- **`SignalR`** [link](https://learn.microsoft.com/en-us/aspnet/signalr/overview/getting-started/introduction-to-signalr)

## HTTP Request

- **`RTK Query`** [link](https://redux-toolkit.js.org/rtk-query/overview)

## API Interface (development tool)

- We use [Swagger](https://swagger.io/) to publish available endpoints
  from the API and describe their types.
- To ensure that we receive the correct data format, we validate the
  received data using [zod](https://zod.dev/), which allows inferring the
  type of the data at the same time (no duplication between types and schema).
