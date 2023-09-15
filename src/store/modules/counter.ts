import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// 方式一：类型推导
// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: {
//     count: 100,
//     message: 'Hello Redux',
//     address: '广州市',
//     height: 1.88
//   },
//   reducers: {
//     changeMessageAction(state, { payload }) {
//       state.message = payload
//     }
//   }
// })
// 方式二：类型约束
interface IState {
  count: number
  message: string
  address: string
  height: number
  direction: 'left' | 'right' | 'up' | 'down'
  names: string[]
}
const initialState: IState = {
  count: 100,
  message: 'Hello Redux',
  address: '广州市',
  height: 1.88,
  direction: 'left',
  names: []
}
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMessageAction(state, { payload }: PayloadAction<string>) {
      state.message = payload
    }
  }
})
export const { changeMessageAction } = counterSlice.actions
export default counterSlice.reducer
