import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Infinite league landing page.png";
import projImg2 from "../assets/img/Infinite league about page.png";
import projImg3 from "../assets/img/Infinite league source sample.png";
import projImg4 from "../assets/img/por
import projImg6 from "../assets/img/LoadingLucidAI2.gif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const project1 = [
    {
      title: "Infinite League Landing Page",
      description: "Landing Page for Event Promotion Website",
      imgUrl: projImg1,
    },
    {
      title: "About Page",
      description: "About Page for Event Promotion Website",
      imgUrl: projImg2,
    },
    {
      title: "HTML, CSS, JS Source Code Example",
      description: "Example of source code used to build Event Promotion Website",
      imgUrl: projImg3,
    },
  ];

  const project2 = [
    {
      title: "AYAlytics Inc. Startup",
      description: "Web Development, Branding, and Marketing",
      imgUrl: projImg4,
    },
  ];

  const project3 = [
    {
      title: "Lucid AI",
      description: "Web Development, Branding, and Marketing",
      imgUrl: projImg6,
    },
  ];



  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Event Coordination Website</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">AYAlytics Inc. Landing Page</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Lucid AI Journal</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>Tournament event promotion website with embedded livestream player, calendar, and contact page - built with JavaScript, HTML, and CSS.</p>
                    <Row className="d-flex justify-content-center">
                        {
                          project1.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <p>Website for a personal startup built with JavaScript, HTML, CSS, and the LAMP service stack (Linux, Apache, MySQLi, PHP). BitBucket and Trello used for project organization and management.</p>
                    <Row className="d-flex justify-content-center">
                        {
                          project2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    
                      </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lucid dream journal utilizing DALL·E API to bring dreams to life. Currently in development.</p>
  <Row className="d-flex justify-content-center">
                        {
                          project3.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}