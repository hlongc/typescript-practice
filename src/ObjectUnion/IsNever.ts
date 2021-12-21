export {};

type IsNever<T extends any> = [T] extends [never] ? true : false;
// 判断是否为never类型
type A = IsNever<never>; // true
type B = IsNever<string>; // false
type C = IsNever<undefined>; // false
type D = IsNever<any>; // false
