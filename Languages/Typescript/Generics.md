# Generics

## Example with a class

```typescript
class HoldAnything<TypeOfData> {
  data: TypeOfData
}

const holdeNumbers = new HoldAnything<number>()
```
