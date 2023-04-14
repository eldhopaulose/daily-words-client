import { useState } from 'react'
import Dic from './pages/Dic'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Dic/>
    </div>
  )
}

export default App
