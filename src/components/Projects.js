import { useState, useEffect, useMemo } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import projImg4 from "../assets/img/ecommerce.png";
import projImg5 from "../assets/img/openai.png";
import projImg6 from "../assets/img/food-ordering.png";
import projImg7 from "../assets/img/threejsmain.png";
import projImg8 from "../assets/img/responsive-landpage.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = useMemo(() => [
    {
      title: "E-Commerce Online shop",
      imgUrl: projImg4,
      link: "https://ecommerce-front-end-tan.vercel.app/",
      linkDescription: "Visit E-Commerce Online shop",
    },
    {
      title: "Image Generation AI",
      imgUrl: projImg5,
      link: "https://image-generation-ten.vercel.app/",
      linkDescription: "Visit Image Generation AI",
    },
    {
      title: "Food Ordering App",
      imgUrl: projImg6,
      link: "https://food-ordering-app-henna.vercel.app/",
      linkDescription: "Visit Food Ordering App",
    },
    {
      title: "3D Tee Shop",
      imgUrl: projImg7,
      link: "https://project-threejs-ai-omega.vercel.app/",
      linkDescription: "Visit 3D Tee Shop",
    },
    {
      title: "Full Responsive LandPage",
      imgUrl: projImg8,
      link: "https://full-responsive-landpage.netlify.app/",
      linkDescription: "Visit Responsive Landpage",
    },
  ], []);

  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    Here are some projects:
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                        {projects.map((project, index) => (
                          <Col key={index} sm={6} md={4}>
                            <div className="proj-imgbx">
                              <img
                                src={project.imgUrl}
                                alt=""
                                style={{ width: '100%', height: 'auto' }}
                              />
                              <div className="proj-txtx">
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={{ color: 'white', textDecoration: 'none' }}
                                  onMouseEnter={e => e.target.style.color = 'blue'}
                                  onMouseLeave={e => e.target.style.color = 'white'}
                                >
                                  {project.linkDescription}
                                </a>
                              </div>
                            </div>
                          </Col>
                        ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
