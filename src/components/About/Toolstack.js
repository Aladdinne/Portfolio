import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiIntellijidea ,SiWebstorm , SiVisualstudiocode, SiPostman, SiJira, SiGitlab } from "react-icons/si";
import { S } from "react-icons/fa";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiIntellijidea />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiWebstorm />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGitlab />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiJira />
            </Col>
        </Row>
    );
}

export default Toolstack;
