import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Project1Page from './Pages/Project1Page'
import Project2Page from './Pages/Project2Page'
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
          <Route path='/sword-of-obsessia' element={<Project1Page/>} />
          <Route path='/project2' element={<Project2Page/>} />

        </Routes>
      </div>

    </>
  )
}

export default App
