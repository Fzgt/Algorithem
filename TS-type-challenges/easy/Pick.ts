// ### Question

//   Implement the built-in `Pick<T, K>` generic without using it.

//   Constructs a type by picking the set of properties `K` from `T`

//   For example:

//   ```ts
//   interface Todo {
//     title: string
//     description: string
//     completed: boolean
//   }

//   type TodoPreview = MyPick<Todo, 'title' | 'completed'>

//   const todo: TodoPreview = {
//       title: 'Clean room',
//       completed: false,
//   }
//   ```

/* _____________ Your Code Here _____________ */

// type MyPick<T, K> = any

type myPick<T, K extends keyof T> = {
	[Key in K]: T[Key];
};
