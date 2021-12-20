export {};

type Splice<
  T extends any[],
  S extends number,
  Count extends number, // 要删除的个数
  Add extends any[] = [], // 要新增的元素
  StartArr extends any[] = [], // 开始
  U extends any[] = [], // 保留下来的元素
  D extends any[] = [] // 删除的类型
> = T extends [infer L, ...infer R]
  ? StartArr["length"] extends S // 是否到了开始位置
    ? D["length"] extends Count // 到了开始位置再确认删除的个数是否够了
      ? [...U, ...Add, ...T] // 删除个数够了，就把之前保留的，新增的，剩下的全部聚合
      : Splice<R, S, Count, Add, StartArr, U, [...D, L]> // 没够递归删除，但是不能动StartArr,否则无法再次进入递归
    : Splice<R, S, Count, Add, [...StartArr, L], [...U, L], D> // 没到就把元素存起来，并且叠加开始位置
  : [...U, ...Add];

// 删除并且替换部分元素
type A1 = Splice<[string, number, boolean, null, undefined, never], 0, 2>; // [boolean,null,undefined,never]               从第0开始删除，删除2个元素

type A2 = Splice<[string, number, boolean, null, undefined, never], 1, 3>; // [string,undefined,never]                     从第1开始删除，删除3个元素
type A3 = Splice<
  [string, number, boolean, null, undefined, never],
  1,
  2,
  [1, 2, 3]
>; // [string,1,2,3,null,undefined,never]          从第1开始删除，删除2个元素，替换为另外三个元素1,2,3
