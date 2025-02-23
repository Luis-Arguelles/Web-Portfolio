 import "../styles/DisplayedMenu.css"
 
 const DisplayedMenu = () => {
    return(
        <div className='displayedMenu'>
                <p><a href="#home">Welcome</a></p>
                <p><a href="#experience">Experience</a></p>
                <p>Projects</p>
                <a href='https://www.linkedin.com/in/luis-antonio-arg%C3%BCelles-gonz%C3%A1lez-878a76180/' target='_blank'>
                        <img className="linkedinDisplayed" src='/linkedin.webp'/>
                    </a>
                    <a href='https://github.com/Luis-Arguelles' target='_blank'>
                        <img className='githubDisplayed' src='/github.png'/>
                    </a>
                    <a href='/cv.pdf' target='_blank'>
                        <button className='cvDisplayed'>CV</button>
                    </a>
        </div>
    )
 }

export default  DisplayedMenu;