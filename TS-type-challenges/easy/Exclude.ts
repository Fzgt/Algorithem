//   ### Question

//   Implement the built-in `Exclude<T, U>`

//   > Exclude from `T` those types that are assignable to `U`

//   For example:

//   ```ts
//   type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
//   ```

/* _____________ Your Code Here _____________ */

// type MyExclude<T, U> = any

type MyExclude<T, U> = T extends U ? never : T;

// T extends U ? never : T 能实现"排除"效果，靠的不是普通的一次性判断，
// 而是 TS 的分布式条件类型机制：T 是裸露泛型参数 + 传入联合类型 → 自动拆开逐个判断
//  → never 在联合类型中被自动过滤掉。这是 TS 类型系统里最反直觉但也最重要的机制之一，
//  官方的 Exclude、Extract、NonNullable 全都是靠它实现的，务必彻底理解，后面会反复用到。
// ('a' extends 'a' ? never : 'a')   // 'a' 能赋给 'a' → never
// | ('b' extends 'a' ? never : 'b') // 'b' 不能赋给 'a' → 'b'
// | ('c' extends 'a' ? never : 'c') // 'c' 不能赋给 'a' → 'c'
// 结果是 never | 'b' | 'c'
// never 在联合类型里会自动消失
