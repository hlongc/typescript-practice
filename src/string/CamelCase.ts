export {};

import type { CapitalizeString } from "./CapitalizeString";
// 横杠命名转化为驼峰命名
type CamelCase<
  T extends string,
  U extends string = ""
> = T extends `${infer L}-${infer R1}${infer R2}`
  ? CamelCase<R2, `${U}${L}${Uppercase<R1>}`>
  : CapitalizeString<`${U}${T}`>;

type a1 = CamelCase<"handle-open-flag">; // HandleOpenFlag
type a2 = CamelCase<"open-flag">; // OpenFlag
type a3 = CamelCase<"a-b-c-d">; // ABCD
