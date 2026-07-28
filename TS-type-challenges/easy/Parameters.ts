// ### Question
//   Implement the built-in Parameters<T> generic without using it.
//   For example:
//   ```ts
//   const foo = (arg1: string, arg2: number): void => {}
//   type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
//   ```
/* _____________ Your Code Here _____________ */
// type MyParameters<T extends (...args: any[]) => any> = any

type MyParameters<T extends (...args: any[]) => any> = T extends (
	...args: infer P
) => any
	? P
	: never;
