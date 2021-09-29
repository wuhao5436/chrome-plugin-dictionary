import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './header/index'
import Content from './conent/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  )
}

export default App
