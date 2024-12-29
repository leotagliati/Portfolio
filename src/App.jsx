import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './components/Intro' 
import About from './components/About' 
function App() {
  const [count, setCount] = useState(0)


  /* To Dos:
      - Header
      - Intro
      - Project Gallery
      - Footer
  
  */
  return (
    <>
    <div className='px-12'>
      <Intro></Intro>
      <About></About>
    </div>
      
    </>
  )
}

export default App
