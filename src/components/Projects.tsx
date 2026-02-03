import Card from "./Card";
import "../styles/Projects.css"

const Projects = () => {
  return (
    <div id="projects" className="projectsMainContainer">
      <h1>Projects</h1>
      <div className="projectsContainer">
        <div className="projectContainer">
            <Card title="MENTORA" description="Mobile study app focused on medicine students that implements RAG and AI." projectImage="/login-brain.png" projectTech={["/ReactNative.svg", "/TypeScript.png", "/supabase.jpg", "/expogo.png", "/Git.png"]}/>
            <a href="https://github.com/Luis-Arguelles/Mentora" target="_blank"> 
                <button className="gitHubButton">GitHub</button>
            </a>
        </div>
        <div className="projectContainer">
            <Card title="Dad's Barber Shop" description="Booking, contact and info Website for a barber shop." projectImage="/dadsBarber.png" projectTech={["/react.png", "/JavaScript.png", "/tailwind.png", "/express.png", "/SQL.png", "/docker.png", "/Git.png"]}/>
            <a href="https://dadsbarber-shop.com/" target="_blank"> 
                <button className="goToWebsiteButton">Go to Website (maintenance)</button>
            </a>
        </div>
        <div className="projectContainer">
            <Card title="PetitGram" description="Mobile app that implements similar Instagram features and design." projectImage="/Instagram.png" projectTech={["/ReactNative.svg", "ReactNavigation.svg", "redux.svg", "/JavaScript.png", "/firebase.png", "expogo.png", "Git.png"]}/>
            <a href="https://github.com/Luis-Arguelles/PetitGram" target="_blank"> 
                <button className="gitHubButton">GitHub</button>
            </a>
        </div>
        <div className="projectContainer">
            <Card title="World countries and flags" description="Mobile app that shows info about the countries of the world in a card format." projectImage="/countriesFlags.jpg" projectTech={["/ReactNative.svg", "ReactNavigation.svg", "redux.svg", "/JavaScript.png", "/Axios.png", "expogo.png", "Git.png"]}/>
            <a href="https://github.com/Luis-Arguelles/Country-Cards" target="_blank"> 
                <button className="gitHubButton">GitHub</button>
            </a>
        </div>
        <div className="projectContainer">
            <Card title="Genetic algorithm" description="This algorithm finds a solution for the Travel salesman problem (TSP) using the genetic approach." projectImage="/genetics.png" projectTech={["/Python.png", "Git.png"]}/>
            <a href="https://github.com/Luis-Arguelles/Genetic-algorithm" target="_blank"> 
                <button className="gitHubButton">GitHub</button>
            </a>
        </div>
        <div className="projectContainer">
            <Card title="RTPM (in progress...)" description="RTPM is a mobile app that shows the public transport routes of H. Matamoros, Mexico." projectImage="/rtpm.avif" projectTech={["/ReactNative.svg", "/TypeScript.png", "expogo.png", "Git.png"]}/>
            <a href="https://github.com/Luis-Arguelles/RTPM" target="_blank"> 
                <button className="gitHubButton">GitHub</button>
            </a>
        </div>
      </div>
    </div>
  );
};


export default Projects;