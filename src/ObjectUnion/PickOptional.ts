export {};
import type { OptionalKeys } from "./OptionalKeys";

type PickOptional<T extends Record<string, any>, K = OptionalKeys<T>> = Omit<
  T,
  Exclude<keyof T, K>
>;

// 保留一个对象中的可选属性类型

type a1 = PickOptional<{
  foo: number | undefined;
  bar?: string;
  flag: boolean;
}>; // {bar?:string|undefined}
type a2 = PickOptional<{ foo: number; bar?: string }>; // {bar?:string}
type a3 = PickOptional<{ foo: number; flag: boolean }>; // {}
type a4 = PickOptional<{ foo?: number; flag?: boolean }>; // {foo?:number,flag?:boolean}
type a5 = PickOptional<{}>; // {}
