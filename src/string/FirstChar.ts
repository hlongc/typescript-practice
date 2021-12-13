// 获取首字符
export {};

type FirstChar<T> = T extends `${infer L}${infer R}` ? L : never;

type A = FirstChar<"abc">;
type B = FirstChar<"">;
