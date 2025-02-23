import "../styles/Welcome.css";

const Welcome = () => {
    return(
        <div id="home" className="homeContainer">
            <p className="personalDescription">Hi! I'm <span >Luis</span>, on my way to become a <span>full-stack developer</span></p>
            <img className="yoHome" src="/yo.jpeg"/>
        </div>
    )
}


export default Welcome;