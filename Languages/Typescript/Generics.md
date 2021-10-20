# Generics

## Example with a class

```typescript
class HoldAnything<TypeOfData> {
  data: TypeOfData
}

const holdNumber = new HoldAnything<number>()
holdNumber.data = 123
const holdString = new HoldAnything<string>()
holdString.data = 'Hello Wall-e'
```
