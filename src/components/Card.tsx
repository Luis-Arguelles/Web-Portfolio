import { useState } from "react";
import "../styles/Card.css";

interface CardProps {
  title: string;
  description: string;
  projectImage: string;
  projectTech: string[];
}

const Card: React.FC<CardProps> = ({ title, description, projectImage, projectTech }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`card ${isFlipped ? 'cardClicked' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="cardFront">
        <img src={projectImage} className="projectImage"/>
        <h2 className="projectTitle">{title}</h2>
        <p className="projectDescription">{description}</p>
      </div>
      <div className="cardBack">
        <h2 className="cardTechTitle">Technologies used</h2>
        <div className="cardTechContainer">
          {projectTech.map((tech) => {
            return <img src={tech} className="cardTech"/>
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;