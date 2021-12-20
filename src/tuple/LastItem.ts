export {};

type LastItem<T extends any[] = []> = T extends [...infer L, infer R]
  ? R
  : never;

// 得到元组类型中的最后一个元素

type A = LastItem<[string, number, boolean]>; // boolean
type B = LastItem<["B", "F", "E"]>; // 'E'
type C = LastItem<[]>; // never
