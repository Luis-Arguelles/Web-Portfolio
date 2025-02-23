import Card from "./Card";
import "../styles/Projects.css"

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projectsContainer">
        <div className="projectContainer">
            <Card title="Dad's Barber Shop" description="Booking, contact and info Website for a barber shop."/>
            <a href="https://dadsbarber-shop.com/" target="_blank">
                <button className="projectButton">Go to Website</button>
            </a>
        </div>
      </div>
    </div>
  );
};


export default Projects;