import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
export const ProjectCard = ({ title, description, imgUrl, linkTo }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br></br>
          <a href={linkTo} target="_blank" rel="noopener noreferrer">
            <button>Link</button>
          </a>
        </div>
      </div>
    </Col>
  );
};
