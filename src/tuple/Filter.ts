export {};

type Filter<T extends any[] = [], U, P extends any[] = []> = T extends [
  infer L,
  ...infer R
]
  ? Filter<R, U, L extends U ? [...P, L] : P>
  : P;

// 保留元组类型T中的A类型

type A = Filter<[1, "BFE", 2, true, "dev"], number>; // [1, 2]
type B = Filter<[1, "BFE", 2, true, "dev"], string>; // ['BFE', 'dev']
type C = Filter<[1, "BFE", 2, any, "dev"], string>; // ['BFE', any, 'dev']
