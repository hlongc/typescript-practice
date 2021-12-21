export {};

// 有且只有一个属性
// T包含所有类型 K用来分发
type UnionToBooleanProps<T extends string, K extends string = T> = K extends T
  ? { [U in K]: true } & { [R in Exclude<T, K>]?: never }
  : never;

// 实现一个叫做 UnionToBooleanProps 的泛型，使得以下需求成立
type MessageStringType = "info" | "success" | "warning" | "error";
type OneMessageTypes = UnionToBooleanProps<MessageStringType>;
type Props = OneMessageTypes & { id: string };
function Component(props: Props) {
  return <></>;
}

const a = <Component id="abc" info />; //correct
const b = <Component id="abc" success />; //correct
const c = <Component id="abc" />; //wrong
const d = <Component id="abc" info success />; //wrong

// 组件Component所接收的属性，有且只有一个 "info" | "success" | "warning" | "error" 中的值；
