import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Intro from './components/Intro'
import About from './components/About'
import ContactList from './components/ContactList'
import ProjectGallery from './components/ProjectGallery'
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
      <div className='px-12'>
        <ContactList></ContactList>
        <Intro></Intro>
        <About></About>
        <ProjectGallery></ProjectGallery>
      </div>

    </>
  )
}

export default App
