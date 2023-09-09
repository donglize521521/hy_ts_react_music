import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import 'normalize.css'
import './assets/css/index.less'

import App from '@/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const obj = {
  name: 'coderwhy',
  age: 18
}

root.render(
  <HashRouter>
    <App />
  </HashRouter>
)
