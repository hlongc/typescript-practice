export {};

// 复制字符T为字符串类型，长度为C

type RepeatString<
  T extends string,
  K extends number,
  U extends any[] = [],
  R extends string = ""
> = K extends U["length"] ? R : RepeatString<T, K, [...U, null], `${R}${T}`>;

type A = RepeatString<"a", 3>; // 'aaa'
type B = RepeatString<"a", 0>; // ''
type C = RepeatString<"cba", 2>; // 'cbacba'
