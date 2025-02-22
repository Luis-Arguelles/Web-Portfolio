import { useState } from 'react'
import Header from './components/Header'
import TestComponent from './components/TestComponent'
import DisplayedMenu from './components/DisplayedMenu'
import './App.css'


function App() {

  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className='mainContainer'>
      <Header setIsMenuOpened={setIsMenuOpened} isMenuOpened={isMenuOpened}/>
      {
        isMenuOpened && <DisplayedMenu/>
      }
      <TestComponent/>
    </div>
  )
}

export default App
