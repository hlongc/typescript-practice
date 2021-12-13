type IF<T, U, K> = T extends true ? U : K;

type a = IF<1 extends 1 | 2 ? true : false, "aaa", "bbb">;

export {};
