import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import web3 from "../assets/img/web3.webp";
import algo from "../assets/img/algo.jpg";
import Stopwatch from "../assets/img/stopwatch.jpg";
import blog from "../assets/img/blog.jpg";
import ride from "../assets/img/riding.webp";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Decentralized Lending and Borrowing",
      description: "Loan and Payment",
      imgUrl: web3,
      linkTo: "https://github.com/BishtAmi/Web3.solana",
    },
    {
      title: "Algorithms Based Trading",
      description: "Trading using Algorithms",
      imgUrl: algo,
      linkTo: "https://github.com/BishtAmi/AlgoTrading",
    },
    {
      title: "College Blogging",
      description: "Important Updates in College",
      imgUrl: blog,
      linkTo: "https://github.com/BishtAmi/NITA-BLOG",
    },
    {
      title: "Namma Yatri Project",
      description: "Made Booking Simple",
      imgUrl: ride,
      linkTo: "https://github.com/BishtAmi/Namma-Yatri-Hackathon",
    },
    {
      title: "Stopwatch",
      description: "Do it on Time",
      imgUrl: Stopwatch,
      linkTo: "https://github.com/BishtAmi/Stopwatch-JS",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {/* <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <p>
                        Here are some recent projects I have worked on recently.
                      </p>
                      <Tab.Pane eventKey="first">
                        <div className="project">
                          <Row>
                            {projects.map((project, index) => {
                              return <ProjectCard {...project} />;
                            })}
                          </Row>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
