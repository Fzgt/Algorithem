//   ### Question

//   Implement the JavaScript `Array.concat` function in the type system.
//  A type takes the two arguments. The output should be a new array that
// includes inputs in ltr order

//   For example:

//   ```ts
//   type Result = Concat<[1], [2]> // expected to be [1, 2]
//   ```
/* _____________ Your Code Here _____________ */

// type Concat<T, U> = any
type Tuple = readonly unknown[];
type Concat<T extends Tuple, U extends Tuple> = [...T, ...U];
