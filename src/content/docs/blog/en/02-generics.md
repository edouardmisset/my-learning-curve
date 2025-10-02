---
date: 2023-06-23
title: Generics
excerpt: "Generics provide a way to make components work with any data type and not restrict to one."
tags: ['generics', 'typescript']
lastUpdated: 2025-10-02
---

## Example with a class

```typescript
class HoldAnything<T> {
  // T is the name usually given to the generic 'type of data'
  data: T
}

const holdNumber = new HoldAnything<number>()
holdNumber.data = 123
const holdString = new HoldAnything<string>()
holdString.data = 'Hello Wall-e'
```
<!-- truncate -->