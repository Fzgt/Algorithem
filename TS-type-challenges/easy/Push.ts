/*
### Question
Implement the generic version of `Array.push`
For example:
```typescript
type Result = Push<[1, 2], '3'> // [1, 2, '3']
```
*/
/* _____________ Your Code Here _____________ */
// type Push<T, U> = any

type Push<T extends unknown[], U> = [...T, U];

/*
The unknown type represents any value.
This is similar to the any type, but is safer because
it's not legal to do anything with an unknown value:
*/
