---
date: 2025-10-02
title: "Common RegExp"
description: "Array of commonly used regular expressions and explanations (cheatsheet)."
tags:
  - regexp
  - regex
  - typescript
  - snippets
  - cheatsheet
---

```ts
// Exported array of common regex snippets
export const commonRegExp = [
  {
    id: "exact-string-match",
    title: "Exact string match",
    description: "Match the exact string using ^ and $ anchors.",
    pattern: "^abc$",
    flags: "",
    example: "const regexp = /^abc$/"
  },
  {
    id: "empty-string",
    title: "Match empty string",
    description: "Match an empty string with start and end anchors.",
    pattern: "^$",
    flags: "",
    example: "const regexp = /^$/"
  },
  {
    id: "whitespace-sequences",
    title: "Match whitespace sequences",
    description: "Match one or more whitespace characters.",
    pattern: "\\s+",
    flags: "g",
    example: "const regexp = /\\s+/g"
  },
  {
    id: "line-breaks",
    title: "Match line breaks",
    description: "Match CR, LF, or CRLF across lines.",
    pattern: "\\r|\\n|\\r\\n",
    flags: "gm",
    example: "const regexp = /\\r|\\n|\\r\\n/gm"
  },
  {
    id: "email",
    title: "Match email",
    description: "A reasonably strict email validation with case-insensitive flag.",
    pattern: "^(?!\\.)(?!.*\\.\\.)([A-Z0-9_'\\+\\-\\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\\-]*\\.)+[A-Z]{2,}$",
    flags: "i",
    example: "const regexp = /^(?!\\.)(?!.*\\.\\.)([A-Z0-9_'\\+\\-\\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\\-]*\\.)+[A-Z]{2,}$/i"
  },
  {
    id: "non-word-characters",
    title: "Match non-word characters",
    description: "Match any character that is not a word character or whitespace.",
    pattern: "[^\\w\\s]",
    flags: "gi",
    example: "const regexp = /[^\\w\\s]/gi"
  },
  {
    id: "alphanumeric-dashes",
    title: "Match alphanumeric, dashes and hyphens",
    description: "Useful for URL slugs.",
    pattern: "^[a-zA-Z0-9-_]+$",
    flags: "",
    example: "const regexp = /^[a-zA-Z0-9-_]+$/"
  },
  {
    id: "letters-and-whitespace",
    title: "Match letters and whitespaces",
    description: "Allow letters and space characters only.",
    pattern: "^[A-Za-z\\s]+$",
    flags: "",
    example: "const regexp = /^[A-Za-z\\s]+$/"
  },
  {
    id: "pattern-not-included",
    title: "Pattern not included",
    description: "Negative lookahead to ensure certain sub-patterns are not present.",
    pattern: "^((?!(abc|bcd)).)*$",
    flags: "g",
    example: "const regexp = /^((?!(abc|bcd)).)*$/g"
  },
  {
    id: "text-inside-brackets",
    title: "Text inside parentheses",
    description: "Capture text inside parentheses. Swap delimiters for other bracket types.",
    pattern: "\\(([^)]+)\\)",
    flags: "g",
    example: "const regexp = /\\(([^)]+)\\)/g"
  },
  {
    id: "validate-uuid",
    title: "Validate GUID/UUID (v4)",
    description: "Validate a v4 UUID format.",
    pattern: "^[0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-4[0-9a-fA-F]{3}\\-(8|9|a|b)[0-9a-fA-F]{3}\\-[0-9a-fA-F]{12}$",
    flags: "",
    example: "const regexp = /^[0-9a-fA-F]{8}\\-[0-9a-fA-F]{4}\\-4[0-9a-fA-F]{3}\\-(8|9|a|b)[0-9a-fA-F]{3}\\-[0-9a-fA-F]{12}$/"
  },
  {
    id: "validate-date-ddmmyyyy",
    title: "Validate date format (DD/MM/YYYY)",
    description: "Validate day, month and year with / or - separators.",
    pattern: "^(0?[1-9]|[12][0-9]|3[01])[\\/\\-](0?[1-9]|1[012])[\\/\\-]\\d{4}$",
    flags: "",
    example: "const regexp = /^(0?[1-9]|[12][0-9]|3[01])[\\/\\-](0?[1-9]|1[012])[\\/\\-]\\d{4}$/"
  },
  {
    id: "chunk-string",
    title: "Chunk string into n-size chunks",
    description: "Match between 1 and n characters; replace 2 with desired chunk size.",
    pattern: ".{1,2}",
    flags: "g",
    example: "const regexp = /.{1,2}/g // where 2 is the chunk size"
  }
];
```

```js
const regexp = /\(([^)]+)\)/g
```

### Validate GUID/UUID

- Use the `^` and `$` anchors to match the **start** and **end** of the string, respectively.
- Validate each segment of the GUID/UUID separately using numeric character ranges and quantifiers.

```js
const regexp =
  /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-4[0-9a-fA-F]{3}\-(8|9|a|b)[0-9a-fA-F]{3}\-[0-9a-fA-F]{12}$/
```

### Validate date format (DD/MM/YYYY)

- Use the `^` and `$` anchors to match the **start** and **end** of the string, respectively.
- Validate each segment of the date separately using numeric character ranges and quantifiers.
- Alter the order of the segments and separators to match different formats.

```js
const regexp = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
```

### Chunk string into n-size chunks

- Use the `.{1,n}` quantifier to match any character between **1 and n times**.
- Add the global flag `g` to match **all occurrences** of the pattern in the string.

```js
const regexp = /.{1,2}/g
// Where '2' is the number of characters per chunk
```
