import { useState } from 'react'
import Navbar from './Navbar'
import Middle from './Middle'
import './modules/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
      <Navbar></Navbar>
      <Middle></Middle>
    </main>
  )
}

export default App
