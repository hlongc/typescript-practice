export {};

export type Equal<L, R> = [L] extends [R]
  ? [R] extends [L]
    ? keyof L extends keyof R
      ? keyof R extends keyof L
        ? true
        : false
      : false
    : false
  : false;

// 判断两个类型是否相等

type A1 = Equal<any, any>; // true
type A2 = Equal<any, 1>; // false
type A3 = Equal<never, never>; // true
type A4 = Equal<"BFE", "BFE">; // true
type A5 = Equal<"BFE", string>; // false
type A6 = Equal<1 | 2, 2 | 1>; // true
type A7 = Equal<{ a: number }, { a: number }>; // true

type A = keyof 1;
type B = keyof any;
