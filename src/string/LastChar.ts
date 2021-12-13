export {};

// 返回最后一个字符
type LastChar<T, Prev = T> = T extends `${infer L}${infer R}`
  ? LastChar<R, L>
  : Prev;

type A = LastChar<"abc">;
type B = LastChar<"a">;
type C = LastChar<"">;
type D = LastChar<number>;
