---
authors: ['Edouard']
tags: ['generics', 'typescript', 'programming']
---

# Generics

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
