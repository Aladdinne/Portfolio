import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgScreen} from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import {FaLock } from "react-icons/fa";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
          {props.isGit && !props.confidential && (
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>)}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && !props.confidential && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgScreen /> &nbsp;
            {"Demo"}
          </Button>
        )}
          {props.confidential && (
              <Button
                  variant="primary"
                  // target="_blank"
                  style={{ marginLeft: "10px" }}
                  disabled={true}
              >
                  <FaLock /> &nbsp;
                  {"Confidential Project"}
              </Button>
          )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
