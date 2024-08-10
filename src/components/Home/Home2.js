import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram, AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={8} className="home-about-description">
              <h1 style={{ fontSize: "2.6em" }}>
                LET ME <span className="purple"> INTRODUCE </span> MYSELF
              </h1>
              <p className="home-about-body">
                I fell in love with programming and have developed a strong expertise in it. 🤷‍♂️
                <br />
                <br />I am fluent in languages like
                <i>
                  <b className="purple"> Java, JavaScript, and TypeScript. </b>
                </i>
                <br />
                <br />
                My fields of interest include building modern &nbsp;
                <i>
                  <b className="purple">Web Applications</b> and developing robust
                  <b className="purple"> Microservices architectures.</b>
                </i>
                <br />
                <br />
                I also have a strong passion for working with
                <b className="purple"> Spring Boot</b> and
                <i>
                  <b className="purple">
                    {" "}
                    Modern Frontend Frameworks
                  </b>
                </i>
                &nbsp; like
                <i>
                  <b className="purple"> Angular</b>
                </i>
              </p>
            </Col>
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-about-social">
              <h1>FIND ME ON</h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
              <ul className="home-about-social-links">
                <li className="social-icons">
                  <a
                      href="https://github.com/Aladdinne"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <AiFillGithub />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://twitter.com/AH99435185"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <AiOutlineTwitter />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://www.linkedin.com/in/alaeddine-hammouda-93927415b/"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                  >
                    <FaLinkedinIn />
                  </a>
                </li>
                <li className="social-icons">
                  <a
                      href="https://www.facebook.com/100007999275447"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour home-social-icons"
                  >
                    <AiFillFacebook />
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
  );
}
export default Home2;
