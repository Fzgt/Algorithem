//   ### Question
//   Implement the type version of ```Array.unshift```
//   For example:
//   ```typescript
//   type Result = Unshift<[1, 2], 0> // [0, 1, 2]
//   ```
/* _____________ Your Code Here _____________ */
// type Unshift<T, U> = any;
type Unshift<T extends unknown[], U> = [U, ...T];
