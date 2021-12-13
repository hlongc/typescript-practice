// 首字母大写
export type CapitalizeString<T> = T extends `${infer L}${infer R}`
  ? `${Uppercase<L>}${R}`
  : T;

type A = CapitalizeString<"abc">;

export {};
