import "../styles/Welcome.css";

const Welcome = () => {
    return(
        <div id="home" className="homeContainer">
            <p className="personalDescription">Hi! I'm <span >Luis</span>, a Web and mobile <span>full-stack developer</span></p>
            <img className="yoHome" src="/yo.jpeg"/>
        </div>
    )
}


export default Welcome;