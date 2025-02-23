import { useState } from 'react'
import Header from './components/Header'
import DisplayedMenu from './components/DisplayedMenu'
import Home from './components/Welcome'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'


function App() {  

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className='mainContainer'>
      <Header setIsMenuOpened={setIsMenuOpened} isMenuOpened={isMenuOpened}/>
      {isMenuOpened && <DisplayedMenu/>}
      <Home/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
