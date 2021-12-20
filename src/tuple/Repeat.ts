export {};

type Repeat<
  T extends any,
  C extends number,
  U extends T[] = []
> = U["length"] extends C ? U : Repeat<T, C, [...U, T]>;

// 复制类型T为C个元素的元组类型

type A = Repeat<number, 3>; // [number, number, number]
type B = Repeat<string, 2>; // [string, string]
type C = Repeat<1, 1>; // [1]
type D = Repeat<0, 0>; // []
