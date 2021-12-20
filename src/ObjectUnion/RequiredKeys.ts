export {};
import type { OptionalKeys } from "./OptionalKeys";

type RequiredKeys<T extends Record<string, any>> = keyof Omit<
  T,
  OptionalKeys<T>
>;

// 获取对象类型中的必须属性的联合类型

type a1 = RequiredKeys<{
  foo: number | undefined;
  bar?: string;
  flag: boolean;
}>; // foo|flag
type a2 = RequiredKeys<{ foo: number; bar?: string }>; // foo
type a3 = RequiredKeys<{ foo: number; flag: boolean }>; // foo|flag
type a4 = RequiredKeys<{ foo?: number; flag?: boolean }>; // never
type a5 = RequiredKeys<{}>; // never
