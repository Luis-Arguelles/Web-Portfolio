import "../styles/Experience.css";
import { CodeSlashOutline } from "react-ionicons";

const Experience = () => {
    return(
        <div id="experience" className="experienceContainer">
            <h1>Experience</h1>
            <div className="jobContainer">
                    <div className="one2oneImage">
                        <h3>one2one</h3>
                    </div>
                    <h2>Web developer (trainee)</h2>
                    <h3> H. Matamoros, Mexico | September - December 2024</h3>
                    <p>I was part of a trainee Web developers team . I contributed to the development of several Websites both in the front-end and back-end.</p>
                    <div className="techIcons">
                        <img src="/react.png" className="techIcon"/>
                        <img src="/JavaScript.png" className="techIcon"/>
                        <img src="/tailwind.png" className="techIcon"/>
                        <img src="/express.png" className="techIcon"/>
                        <img src="/SQL.png" className="techIcon"/>
                        <img src="/Git.png" className="techIcon"/>
                        <img src="/docker.png" className="techIcon"/>
                        <img src="/postman.svg" className="techIcon"/>
                    </div>
            </div>
            <div className="verticalLine"/>
            <div className="jobContainer">
                    <img src="/ensiacet.png" className="ensiacetImage"/>
                    <h2>Web development intern</h2>
                    <h3>Toulouse, France | March - June 2024</h3>
                    <p>I developed new features for a Website that handled the arrival of external personnel to the university's facilities.</p>
                    <div className="techIcons">
                        <img src="/react.png" className="techIcon"/>
                        <img src="/TypeScript.png" className="techIcon"/>
                        <img src="/Loopback.png" className="techIcon"/>
                        <img src="/SQL.png" className="techIcon"/>
                        <img src="/Git.png" className="techIcon"/>
                    </div>
            </div>
        </div>
    )
}


export default Experience;