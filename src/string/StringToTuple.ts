export {};
// 字符串拆分成字符串数组 递归
type StringToTuple<T, U extends any[] = []> = T extends `${infer L}${infer R}`
  ? StringToTuple<R, [...U, L]>
  : U;

type A = StringToTuple<"BFE.dev">; // ['B', 'F', 'E', '.', 'd', 'e','v']
type B = StringToTuple<"">; // []
