import { useState } from 'react'
import Header from './components/Header'
import TestComponent from './components/TestComponent'
import DisplayedMenu from './components/DisplayedMenu'
import Home from './components/Welcome'
import Experience from './components/Experience'
import './App.css'


function App() {

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className='mainContainer'>
      <Header setIsMenuOpened={setIsMenuOpened} isMenuOpened={isMenuOpened}/>
      {isMenuOpened && <DisplayedMenu/>}
      <Home/>
      <Experience/>
      <TestComponent/>
    </div>
  )
}

export default App
