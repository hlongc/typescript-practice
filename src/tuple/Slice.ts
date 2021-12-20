export {};

type Slice<
  T extends any[],
  S extends number,
  E extends number = T["length"],
  StartArr extends any[] = [],
  EndArr extends any[] = [],
  U extends any[] = []
> = T extends [infer L, ...infer R]
  ? StartArr["length"] extends S
    ? EndArr["length"] extends E
      ? U
      : Slice<R, S, E, StartArr, [...EndArr, L], [...U, L]> // 到了开始位置还没到结束位置，不能改变StartArr,否则下次递归没办法进入第一个条件
    : Slice<R, S, E, [...StartArr, L], [...EndArr, L], U> // 还没到开始位置时，U里面不能放入元素
  : U;

// 截取元组中的部分元素

type A1 = Slice<[any, never, 1, "2", true, boolean], 0, 2>; // [any,never]
type A2 = Slice<[any, never, 1, "2", true, boolean], 1, 3>; // [never,1]
type A3 = Slice<[any, never, 1, "2", true, boolean], 1, 2>; // [never]
type A4 = Slice<[any, never, 1, "2", true, boolean], 2>; // [1,'2',true,boolean]
type A5 = Slice<[any], 2>; // []
type A6 = Slice<[0, 1, 2, 3, 4], 1, 3>; // [1, 2]
