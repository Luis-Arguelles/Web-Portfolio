import "../styles/Card.css";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="card">
        <div className="cardFront">
            <img src="/dadsBarber.png" className="projectImage"/>
            <h2 className="projectTitle">{title}</h2>
            <p className="projectDescription">{description}</p>
        </div>
        <div className="cardBack">
            <h2 className="cardTechTitle">Technologies used</h2>
            <div className="cardTechContainer">
                <img src="/react.png" className="cardTech"/>
                <img src="/JavaScript.png" className="cardTech"/>
                <img src="/tailwind.png" className="cardTech"/>
                <img src="/express.png" className="cardTech"/>
                <img src="/SQL.png" className="cardTech"/>
                <img src="/docker.png" className="cardTech"/>
            </div>
        </div>
    </div>
  );
};

export default Card;