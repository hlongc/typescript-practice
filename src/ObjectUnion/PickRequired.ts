export {};

import type { OptionalKeys } from "./OptionalKeys";

type PickRequired<T extends Record<string, any>> = Omit<T, OptionalKeys<T>>;

// 保留一个对象中的必须属性

type a1 = PickRequired<{
  foo: number | undefined;
  bar?: string;
  flag: boolean;
}>; // {foo:number|undefined,flag:boolean}
type a2 = PickRequired<{ foo: number; bar?: string }>; // {foo:number}
type a3 = PickRequired<{ foo: number; flag: boolean }>; // {foo:number,flag:boolean}
type a4 = PickRequired<{ foo?: number; flag?: boolean }>; // {}
type a5 = PickRequired<{}>; // {}
