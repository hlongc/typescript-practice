export {};

type LengthOfTuple<T extends any[]> = T["length"];

// 计算元组类型的长度

type A = LengthOfTuple<["B", "F", "E"]>; // 3
type B = LengthOfTuple<[]>; // 0
