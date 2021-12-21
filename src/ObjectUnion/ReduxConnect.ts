export {};

// 取出对象中的函数属性
type FunKeys<T extends Record<string, any>, K = keyof T> = K extends keyof T
  ? T[K] extends (...args: any[]) => any
    ? K
    : never
  : never;

type FormatAsync<F> = F extends <T, U>(input: Promise<T>) => Promise<Action<U>>
  ? <T, U>(input: T) => Action<U>
  : F;

type FormatSync<F> = F extends <T, U>(action: Action<T>) => Action<U>
  ? <T, U>(action: T) => Action<U>
  : F;
type FunRecord<T> = Pick<T, FunKeys<T>>;
type Connect<T> = {
  [M in keyof FunRecord<T>]: FormatSync<FormatAsync<FunRecord<T>[M]>>;
};

// 实现Connect类型，能够自动地转化Redux Module对象中的函数类型

interface Module {
  count: number;
  message: string;

  asyncMethod<T, U>(input: Promise<T>): Promise<Action<U>>;

  syncMethod<T, U>(action: Action<T>): Action<U>;
}

interface Action<T> {
  payload?: T;
  type: string;
}

// 这个要求的结果
type Result = {
  asyncMethod<T, U>(input: T): Action<U>;
  syncMethod<T, U>(action: T): Action<U>;
};

type A = Connect<Module>;

const a: A = {} as A;

const c: Action<string> = { payload: "1", type: "a" };

const r = a.asyncMethod(c);

// 实现类型Connect，要求 Connect<Module> 的结果为上面的 Result
// 只要函数类型的属性；
// 如果函数是异步函数，要求自动解析出来Promise中的类型；
