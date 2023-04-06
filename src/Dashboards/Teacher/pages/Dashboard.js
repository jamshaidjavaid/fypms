import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { AiOutlineEdit } from "react-icons/ai";

import NoticeBoardComponent from "../../../Components/NoticeBoards/NoticeBoardComponent";
import NotificationsComponent from "../../../Components/Notifications/NotificationsComponent";

import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [classesSupervision, setClassesSupervision] = useState(10);
  const [classesExamination, setClassesExamination] = useState(15);
  const [projectsSupervision, setProjectsSupervision] = useState(5);
  const [projectsSupervisionLimit, setProjectsSupervisionLimit] = useState(10);
  const [projectsExamination, setProjectsExamination] = useState(7);

  const handleEditProjectsSupervisionLimit = () => {
    // code to handle editing the projects supervision limit
  };

  return (
    <Container className="mt-3">
      <Row className={styles.container}>
        <Col>
          <Row className={`mt-1 ${styles.row}`}>
            <Col>
              <Card className={styles.card}>
                <Card.Body>
                  <Card.Title>Classes for Supervision</Card.Title>
                  <Card.Text>{classesSupervision}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={styles.card}>
                <Card.Body>
                  <Card.Title>Classes for Examination</Card.Title>
                  <Card.Text>{classesExamination}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className={`mt-3 ${styles.row}`}>
            <Col>
              <Card className={styles.card}>
                <Card.Body>
                  <Card.Title>Projects for Supervision</Card.Title>
                  <Card.Text>{projectsSupervision}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className={styles.card}>
                <Card.Body>
                  <Card.Title>Projects for Examination</Card.Title>
                  <Card.Text>{projectsExamination}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className={`mt-3  ${styles.row}`}>
            <Col>
              <Card className={styles.card}>
                <Card.Body>
                  <Card.Title>Supervision Limit</Card.Title>
                  <Card.Text className={styles.limit}>
                    {projectsSupervisionLimit}
                    <Button
                      variant="link"
                      onClick={handleEditProjectsSupervisionLimit}
                    >
                      <AiOutlineEdit />
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className={`mt-5  ${styles.row}`}>
            <NotificationsComponent notifications={[]} />
          </Row>
        </Col>
        <Col>
          <NoticeBoardComponent isAdmin={false} reciever={false} notices={[]} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
