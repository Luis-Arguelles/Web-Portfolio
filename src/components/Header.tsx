import React, { useState } from 'react'
import '../styles/Header.css'
import { Menu } from 'react-ionicons';

interface HeaderProps {
    setIsMenuOpened: React.Dispatch<React.SetStateAction<boolean>>;
    isMenuOpened: boolean;
  }

const Header: React.FC<HeaderProps> = ({setIsMenuOpened, isMenuOpened}) => {

    return(
        <header className='header'>
            
                <img className="yo" src='/yo.jpeg'/>
                <div onClick={() => setIsMenuOpened(!isMenuOpened)}>
                    <Menu className="menuIcon" color={"white"}/>
                </div>
            <nav className='nav'>
                <div>
                    <ul>
                        <li><a href='#home'>Welcome</a></li>
                        <li><a href='#experience'>Experience</a></li>
                        <li>Projects</li>
                    </ul>
                </div>
                <div className='links'>
                    <a href='https://www.linkedin.com/in/luis-antonio-arg%C3%BCelles-gonz%C3%A1lez-878a76180/' target='_blank'>
                        <img className="linkedin" src='/linkedin.webp'/>
                    </a>
                    <a href='https://github.com/Luis-Arguelles' target='_blank'>
                        <img className='github' src='/github.png'/>
                    </a>
                    <a href='/cv.pdf' target='_blank'>
                        <button className='cv'>CV</button>
                    </a>
                </div>
            </nav>
        </header>
    )
}

export default Header;