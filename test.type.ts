// // interface IFnCall {
// //   (name: string, age: number): string
// // }

// // const foo: IFnCall = function (name, age) {
// //   return 'aaaa'
// // }
// // foo('why', 18)
// // 定义函数的调用签名
// interface IFnCall {
//   <TWhy>(fn: () => TWhy, age: number): TWhy
// }

// // 定义函数对象
// const foo: IFnCall = function (fn, age) {
//   return fn()
// }
// // 调用函数
// foo<string>(() => {
//   return 'aaa'
// }, 18)

// // 不传入明确的调用时的函数,类型推断
// const res = foo((aaa) => {
//   return 'aaa'
// }, 18)
