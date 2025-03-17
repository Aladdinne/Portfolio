import React, {useEffect, useState} from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiAngularSimple, DiNodejs, DiJava, DiGit, DiMongodb } from "react-icons/di";
import { SiSpringboot, SiTypescript, SiDocker, SiRabbitmq, SiPostgresql, SiGooglecloud, SiApachekafka } from "react-icons/si";
import { FaKeycdn } from "react-icons/fa";

function Techstack() {
    const skills = [
        { skill: "Communication", percentage: 95 },
        { skill: "Team Work", percentage: 90 },
        { skill: "Management", percentage: 86 },
        { skill: "Creativity", percentage: 78 },
    ];
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        setTimeout(() => setAnimated(true), 500); // Delay animation start
    }, []);
    return (
        <div>
            <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
                <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
                <Col xs={4} md={2} className="tech-icons"><SiSpringboot /></Col>
                <Col xs={4} md={2} className="tech-icons"><SiTypescript /></Col>
                <Col xs={4} md={2} className="tech-icons"><DiAngularSimple /></Col>
                <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
                <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
                <Col xs={4} md={2} className="tech-icons"><DiMongodb /></Col>
                <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>
                <Col xs={4} md={2} className="tech-icons"><SiRabbitmq /></Col>
                <Col xs={4} md={2} className="tech-icons"><FaKeycdn /></Col>
                <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
                <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
                <Col xs={4} md={2} className="tech-icons"><SiGooglecloud /></Col>
                <Col xs={4} md={2} className="tech-icons"><SiApachekafka /></Col>
            </Row>

            <div style={styles.skillContainer}>
                {skills.map((item, index) => (
                    <div key={index} style={styles.skillItem}>
                        <svg viewBox="0 0 100 100" style={styles.skillSvg}>
                            <circle cx="50" cy="50" r="45" style={styles.bgCircle} />
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                style={{
                                    ...styles.progressCircle,
                                    strokeDasharray: 283,
                                    strokeDashoffset: animated ? 283 - (283 * item.percentage) / 100 : 283,
                                    transition: "stroke-dashoffset 1.5s ease-in-out",
                                }}
                            />
                            <text x="50" y="55" style={styles.skillText}>
                                {item.percentage}%
                            </text>
                        </svg>
                        <p style={{ color: "white", marginTop: "10px" }}>{item.skill}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const styles = {
    skillContainer: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "30px",
        marginTop: "20px",
    },
    skillItem: {
        textAlign: "center",
        width: "120px",
    },
    skillSvg: {
        width: "120px",
        height: "120px",
        transform: "rotate(0deg)",
    },
    bgCircle: {
        fill: "none",
        stroke: "#333",
        strokeWidth: 8,
    },
    progressCircle: {
        fill: "none",
        stroke: "#ffcc00",
        strokeWidth: 8,
        strokeLinecap: "round",
    },
    skillText: {
        fontSize: "16px",
        fontWeight: "bold",
        fill: "white",
        textAnchor: "middle",
        dominantBaseline: "middle",
    },

};

export default Techstack;
