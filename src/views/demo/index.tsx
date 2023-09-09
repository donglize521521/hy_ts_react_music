//【注意】
// ①只要文件中用到jsx语法, 那该文件就应是.tsx。
// ②只要是.tsx文件都要引入import React from 'react',没用到也需要引入,否则jsx语法会报错
import React, { memo } from 'react'
import type { ReactNode, FC } from 'react' //此处ReactNode当成类型来用, 可防止不同格式化工具引起的变化

//①早期的react版本默认有children这个属性（React.FC声明方式), 新版本更加下严格，需开发者显示声明
//②子组件类型children类型可以ReactElement、string、number等类型, 查看ReactNode源码, 所以ReactNode作为子组件类型比较合适
interface IProps {
  children?: ReactNode
  name: string
  age: number
  height?: number
}

// 第一种对函数式组件的类型进行约束,通过泛型的方式约束props类型(推荐)
const DownLoad: FC<IProps> = (props) => {
  return (
    <div>
      <div>name:{props.name}</div>
      <div>age:{props.age}</div>
      <div>height{props.height}</div>
      <div>{props.children}</div>
    </div>
  )
}
// 通过这种方式给函数式组件DownLoad写defaultProps会有提示。
// DownLoad.defaultProps = {
//   name: '999',
//   age: 18
// }

// 第二种：直接对props进行约束
// const DownLoad = (props: IProps) => {
//   return (
//     <div>
//       <div>name:{props.name}</div>
//       <div>age:{props.age}</div>
//       <div>height{props.height}</div>
//     </div>
//   )
// }
// 通过这种方式给函数组件写默认值defaultProps,编辑器没提示
// DownLoad.defaultProps = {
//   height: 1.88
// }

// export default DownLoad  //①直接导出性能不高，通过memo包裹
export default memo(DownLoad)
