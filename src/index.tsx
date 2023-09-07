import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/App'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const obj = {
  name: 'coderwhy',
  age: 18
}
root.render(<App />)
