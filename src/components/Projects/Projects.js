import React from "react";
import { Container, Row, Col , Image } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import digismart from "../../Assets/Projects/digi smart.png";
import adas from "../../Assets/Projects/adas.png";
import workflow from "../../Assets/Projects/workflow.png";
import microservice from "../../Assets/Projects/microsservice.png";
import tunisiacamp from "../../Assets/Projects/tunisiacamp.png";
import logement from "../../Assets/Projects/logement.png";
import reclamation from "../../Assets/Projects/reclamation.png";

// Certification Images
import cert1 from "../../Assets/Certifications/certif1.jpg";
import cert2 from "../../Assets/Certifications/certif2.jpg";
import cert3 from "../../Assets/Certifications/certif3.jpg";
import cert4 from "../../Assets/Certifications/certif4.jpg";
import cert5 from "../../Assets/Certifications/certif5.jpg";
import cert6 from "../../Assets/Certifications/certif6.jpeg";

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
                imgPath={ecommerce}
                isBlog={false}
                isGit={true}
                ghLink="https://github.com/Aladdinne/ecommerce-microservices.git"
                confidential={false}
                title=<p>Ecommerce <span class="badge bg-warning text-dark">In Progress</span> </p>
                description="Micro Marketplace is a scalable e-commerce platform built with a microservices architecture using Spring Boot, Spring Cloud Gateway, Eureka, and Keycloak for secure and dynamic service management. It ensures resilience with Resilience4j, enables real-time interactions via Apache Kafka, and offers full observability through Micrometer, Zipkin, Prometheus, and Grafana. Designed for high performance and modularity, it’s an ideal foundation for modern, feature-rich online marketplaces."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={microservice}
              isBlog={false}
              isGit={false}
              confidential={true}
              title="Stock Manager"
              description="I designed and developed a web-based platform for managing inventory , along with an AI model for detecting the positions of tags after processing RFID data. The project was built using Spring Boot, Angular, and a microservices architecture, with PostgreSQL as the database. We utilized Docker for containerization, GitLab for version control, and SonarQube for code quality analysis. Project management was facilitated through Jira, and monitoring and logging were handled by the ELK stack."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logement}
              isUrl={true}
              url={"https://ims.intedgroup.com/"}
              title="IntedGroup"
              description="I am responsible for managing accommodations and reservations for a platform used by Intedgroup, a university group. This project is currently in production and utilizes a modern architecture with Node.js for the backend, Angular for the frontend, and MongoDB as the database. My role involves ensuring the smooth operation and optimization of these features, providing a seamless user experience, and efficiently managing real-time data."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workflow}
              isBlog={false}
              isGit={true}
              title="Workflux"
              description="As part of the development of a module for managing linear and complex Workflow processes, I analyzed the existing system and studied the requirements to propose and develop the best methodologies. Using JEE, Spring, and jBPM, I integrated this module into existing software, optimizing the efficiency and smoothness of the workflows."
              ghLink="https://github.com/Aladdinne/workflow"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={digismart}
              isBlog={false}
              isGit={false}
              confidential={true}
              title="Digi Smart"
              description="I led the study, design, programming, and implementation of a web application to manage the daily activities of a business. This application was developed using technologies such as Spring Boot, Spring Security, Spring Session, Angular, MongoDB, Git, and Bootstrap."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tunisiacamp}
              isBlog={false}
              isGit={true}
              title="Tunisia Gamp"
              description="I participated in an integrated development project at ESPRIT Ariana, where I studied, designed, and developed a full-stack website for managing various camping services. This project involved creating back-end web services and front-end interfaces using technologies such as Java, Spring Boot, Angular, GitHub, and MySQL."
             />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={adas}
              isGit={true}
              isBlog={false}
              title="Advanced Driver Assistance System"
              description="I conducted the study, design, and development of an Advanced Driver Assistance System (ADAS) for lane detection, vehicle detection, and driver fatigue detection. These systems were implemented on embedded processors such as Pynq Z1 and Jetson Xavier NX, utilizing technologies like Python, OpenCV, TensorFlow, Scikit-Learn, and Keras."

            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
                imgPath={reclamation}
                isBlog={false}
                isGit={false}
                confidential={true}
                demoLink={"https://drive.google.com/file/d/13bbMFOoJ-vj0taqySoDbdWERRn1kQKds/view?usp=sharing"}
                title="Reclamation"
                description="I managed user accounts, including creating, updating, and deleting profiles. I also handled complaints, overseeing their reception, processing, and resolution while ensuring an optimal user experience, using Spring Boot, Angular, and MySQL."

            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px", marginTop: "20px" }}>
          <Col md={12} className="project-card">
            <p style={{ color: "white" }}>
              In addition to the projects mentioned, I have also worked on various other tasks and projects, such as integrating development and DevOps projects at ESPRIT, conducting a professional internship at Tunisie Telecom, and completing freelance assignments. These experiences have further expanded my skills in areas like continuous integration, network analysis, and full-stack development across different platforms and technologies.
            </p>
          </Col>
        </Row>

        {/* Certifications Section */}
        {/*<h2 className="project-heading">*/}
        {/*  My <strong className="purple">Certifications</strong>*/}
        {/*</h2>*/}

        <Row className="certifications-row">
          {[cert1, cert2, cert3, cert4, cert5, cert6].map((cert, index) => (
              <Col key={index} xs={2} sm={2} md={1}  className="certification-card">
                <Image src={cert} alt={`Certification ${index + 1}`} fluid rounded />
              </Col>
          ))}
        </Row>


      </Container>
    </Container>
  );
}

export default Projects;
