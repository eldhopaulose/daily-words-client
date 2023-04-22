import { useState } from 'react'
// import Dic from './pages/Search'
import WordsD from './pages/Words'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     {/* <Dic/> */}
     <WordsD/>
    </div>
  )
}

export default App
