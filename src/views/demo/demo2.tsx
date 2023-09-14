import React, { PureComponent } from 'react'

/**
 *state
 *props
 */
interface IProps {
  name: string
  age?: number
}

interface IState {
  message: string
  counter: number
}
interface ISnapshot {
  address: string
}
class Demo2 extends PureComponent<IProps, IState, ISnapshot> {
  // 方式二：成员变量的方式
  name = 'aaaa'
  // 由IState约束
  state = {
    message: 'Hello World',
    counter: 100
  }
  //在组件更新之前做一次快照(由ISnapshot约束)
  getSnapshotBeforeUpdate() {
    return { address: 'uuuu' }
  }
  // 方式一：
  // constructor(props: IProps) {
  //   super(props) //不写默认也会进行继承操作
  //   this.state = {
  //     message: 'Hello World',
  //     counter: 100
  //   }
  // }

  render(): React.ReactNode {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.age}</div>
        <div>{this.state.message}</div>
        <div>{this.state.counter}</div>
      </div>
    )
  }
}

export default Demo2
