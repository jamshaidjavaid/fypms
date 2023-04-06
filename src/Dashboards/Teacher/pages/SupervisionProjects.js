import { useState } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import styles from "./SupervisionProjects.module.css";

function SupervisionProjects() {
  const classes = ["Class 1", "Class 2", "Class 3"];
  const [allProjects, setAllProjects] = useState([
    {
      className: "BSIT-Mor-Fall(2019-23)",
      classProjects: [
        {
          name: "FYP Management System with University 1",
          members: 5,
          status: "in_progress",
        },
        {
          name: "FYP ",
          members: 3,
          status: "completed",
        },
        {
          name: "FYP Management System with University 3",
          members: 4,
          status: "passed",
        },
        {
          name: "FYP Management System with University 4",
          members: 2,
          status: "failed",
        },
        // Add more projects here
      ],
    },
    {
      className: "BSIT-Eve-Fall(2019-23)",
      classProjects: [
        {
          name: "FYP Management System with University 1",
          members: 5,
          status: "in_progress",
        },
        {
          name: "FYP ",
          members: 3,
          status: "completed",
        },
        {
          name: "FYP Management System with University 3",
          members: 4,
          status: "passed",
        },
        {
          name: "FYP Management System with University 4",
          members: 2,
          status: "failed",
        },
        // Add more projects here
      ],
    },
  ]);

  return (
    <Container fluid>
      <Row>
        <Col sm={8}>
          {allProjects.map((data, index) => (
            <Project
              key={index}
              projects={data.classProjects}
              className={"BSIT-Mor-Fall (2019-23)"}
            />
          ))}
        </Col>
        <Col sm={4}>
          <div className={styles.classesCard}>
            <Card.Title>Class Under Supervision</Card.Title>
            <ListGroup className={styles.classesList}>
              {classes.map((className, index) => (
                <ListGroup.Item className={styles.listItem} key={index}>
                  {className}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

function Project({ projects, className }) {
  const showProjects = projects.map((project, index) => {
    return (
      <Col key={index}>
        <Card className={styles.projectCard}>
          <Card.Body>
            <Card.Title className={styles.projectName}>
              {project.name}
            </Card.Title>
            <span className={styles.members}>{project.members} Members</span>
            <p className={styles.status}>{project.status}</p>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <div className={styles.projectsList}>
      <h2 className={styles.heading}>{className} Projects</h2>
      <Row>{showProjects}</Row>
      <hr />
    </div>
  );
}

export default SupervisionProjects;
