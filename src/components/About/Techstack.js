import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiAngularSimple, DiNodejs, DiJava, DiGit, DiMongodb } from "react-icons/di";
import { SiSpringboot, SiTypescript, SiDocker, SiRabbitmq, SiPostgresql } from "react-icons/si";
import { FaKeycdn, FaAws } from "react-icons/fa";

function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSpringboot />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiAngularSimple />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRabbitmq />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaKeycdn />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDocker />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaAws />
            </Col>
        </Row>
    );
}

export default Techstack;
