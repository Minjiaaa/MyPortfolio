import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import tickets from "../../Assets/Projects/tickets.jpg"
import shell from "../../Assets/Projects/shell.jpg"
import bilibili from "../../Assets/Projects/bilibili.png"
import promotion from "../../Assets/Projects/promotion.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tickets}
              hasWeb={false}
              title="Tickets"
              description="A ticketing trading full stack web application using Node.js, React.js and MongoDB"
              link="https://github.com/ChenchengY/ticketing_app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bilibili}
              hasWeb={false}
              title="Bilibili-Backend"
              description="A backend project of a video streaming website."
              link="https://github.com/ChenchengY/Bilibili"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={promotion}
              hasWeb={true}
              title="Promotion.com"
              description="A promotion website with microfrontend architecture"
              link="https://d1ui0zavfrnohb.cloudfront.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shell}
              hasWeb={false}
              title="Mini Shell"
              description="A linux mini shell."
              link="https://github.com/ChenchengY/mini-shell"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
