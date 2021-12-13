export {};

// 删除第一个字符
type RemoveFirst<T> = T extends `${infer L}${infer R}` ? R : T;

// 驼峰命名转横杠命名
type KebabCase<T, U extends string = ""> = T extends `${infer L}${infer R}`
  ? KebabCase<R, `${U}${L extends Uppercase<L> ? `-${Lowercase<L>}` : L}`>
  : RemoveFirst<U>;

type a1 = KebabCase<"HandleOpenFlag">; // handle-open-flag
type a2 = KebabCase<"OpenFlag">; // open-flag
type a3 = KebabCase<"ABCdefG">; // open-flag
