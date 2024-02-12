# Folder structure

```
component-name
├── helpers.ts               // Contains the handler functions and all the other function specifically needed in the component
├── index.ts                 // Only exports the component (`export * from './component-name'`)
├── component-name.tsx       // Contains the actual component
├── styles.ts                // Contains the component's style
├── constants.ts             // Contains the specific constants used in the component
├── types.ts                 // Contains the types (props ans others) used in the component and helper functions, hooks, etc.
├── hooks.ts                 // Contains the hooks used in the component
└── component-name.tests.ts  // Contains the (unit / snapshot) tests for the component
```

⚠️: `default export`s are used for lazy loading components (mainly pages and very large components). This is to increase first load speed. In this case, we do not use `index.ts` files.

> Like in the example above, in a perfect world, we would be using a kebab-case naming convention for all folders and files, because PascalCase named folders/files are handled differently in the diversity of operating systems which may lead to bugs when working with teams using different OSs.
> ~ [Robin Wieruch](https://www.robinwieruch.de/react-folder-structure/)
