export {};

type Flat<T extends any[], U extends any[] = []> = T extends [
  infer L,
  ...infer R
]
  ? L extends any[]
    ? Flat<[...L, R], U>
    : Flat<R, [...U, L]>
  : U;

// 扁平化元组

type A = Flat<[1, 2, 3]>; // [1,2,3]
type B = Flat<[1, [2, 3], [4, [5, [6]]]]>; // [1,2,3,4,5,6]
type C = Flat<[]>; // []
type D = Flat<[1, [2, 6, [3, [4]]]]>; // [1]
