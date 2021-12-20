export {};
import type { Equal } from "./Equal";

export type FindIndex<
  T extends any[],
  I extends any,
  U extends any[] = []
> = T extends [infer L, ...infer R]
  ? Equal<L, I> extends true
    ? U["length"]
    : FindIndex<R, I, [...U, L]>
  : never;

// 找出E类型在元组类型T中的下标

type A = [any, never, 1, "2", true];
type B = FindIndex<A, 1>; // 2
type C = FindIndex<A, 3>; // never
