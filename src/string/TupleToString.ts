export {};

// 将字符串类型的元素转换为字符串字面量类型

type TupleToString<T, U extends string = ""> = T extends [infer L, ...infer R]
  ? L extends string
    ? TupleToString<R, `${U}${L}`>
    : never
  : U;

type A = TupleToString<["a", "b", "c"]>; // 'abc'
type B = TupleToString<[]>; // ''
type C = TupleToString<["a"]>; // 'a'
