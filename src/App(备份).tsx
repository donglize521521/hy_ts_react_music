import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'
import { useAppSelector, useAppDispatch, shallowEqualApp } from './store'
import routes from './router'
import Demo2 from './views/demo/demo2'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

import { changeMessageAction } from './store/modules/counter'
// import { IRootState } from './store'

// import store from './store'

// type GetStateFnType = typeof store.getState
// type IRootState = ReturnType<GetStateFnType>

function App() {
  // const { count, message } = useSelector(
  //   (state: IRootState) => ({
  //     count: state.counter.count,
  //     message: state.counter.message
  //   })
  //   // shallowEqual
  // )
  const { count, message } = useAppSelector(
    (state) => ({
      count: state.counter.count,
      message: state.counter.message,
      direction: state.counter.direction,
      names: state.counter.names
    }),
    shallowEqualApp
  )
  //事件处理函数
  const dispatch = useAppDispatch()
  function handleChangeMessage() {
    console.log('handleChangeMessage')
    dispatch(changeMessageAction('哈哈哈哈哈哈'))
  }

  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
      <Demo2 name="whd" age={18} />
      <h2>当前计数: {count}</h2>
      <h2>当前消息: {message}</h2>
      <button onClick={handleChangeMessage}>改变消息</button>
    </div>
  )
}

export default App
