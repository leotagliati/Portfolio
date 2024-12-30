import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Page1 from './Pages/Page1'
function App() {
  const [count, setCount] = useState(0)


  /* To Dos:
      - Contact Icons (X)
      - Header
      - Intro 
      - Project Gallery
      - Footer
  
  */
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/page1' element={<Page1/>} />

        </Routes>
      </div>

    </>
  )
}

export default App
