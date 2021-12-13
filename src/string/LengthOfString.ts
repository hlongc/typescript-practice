export {};

// 计算字符串字面量类型的长度

type LengthOfString<
  T,
  U extends string[] = []
> = T extends `${infer L}${infer R}`
  ? LengthOfString<R, [...U, L]>
  : U["length"];

type A = LengthOfString<"BFE.dev">; // 7
type B = LengthOfString<"">; // 0
type C = LengthOfString<"123 456 ">; // 0
