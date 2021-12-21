export {};

type IsAny<T> = [unknown] extends [T] // 只有unknow 和 any可以赋值给any，排除其他类型
  ? [keyof T] extends [never] // 但是any有三个属性 nunber string symbol，而unknow没有属性
    ? false
    : true
  : false;

type A = IsAny<string>; // false
type B = IsAny<any>; // true
type C = IsAny<unknown>; // false
type D = IsAny<never>; // false
