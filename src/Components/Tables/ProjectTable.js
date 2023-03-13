import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

import Button from "../UI/Button";
import classes from "./ProjectTable.module.css";

const ProjectTable = (props) => {
  const projects = [
    {
      id: "IT-22-01",
      title: "Final Year Project Management System",
      memberCount: 3,
      supervisor: "John Doe",
    },
    {
      id: "IT-22-02",
      title: "Project 2",
      memberCount: 5,
      supervisor: "Jane Smith",
    },
    {
      id: "IT-22-03",
      title: "Project 3",
      memberCount: 2,
      supervisor: "Bob Johnson",
    },
    {
      id: "IT-22-04",
      title: "Final Year Project Management System",
      memberCount: 3,
      supervisor: "John Doe",
    },
    {
      id: "IT-22-05",
      title: "Final Year Project Management System",
      memberCount: 3,
      supervisor: "John Doe",
    },
  ];

  const [limit, setLimit] = useState(6);

  const loadMoreHandler = () => {
    setLimit((prevlimit) => prevlimit + 3);
  };

  const tableBody = projects.slice(0, limit).map((project, index) => {
    return (
      <tr key={index}>
        <td>{project.id}</td>
        <td>{project.title}</td>
        <td className={classes.center}>{project.memberCount}</td>
        <td className={classes.center}>{project.supervisor}</td>
      </tr>
    );
  });

  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <p className={classes.name}>{props.label}</p>
        {props.button && (
          <Link to={"/projects/new-project"}>
            <Button>Add Project</Button>
          </Link>
        )}
      </div>

      <Table responsive hover className={classes.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th className={classes.center}>Members</th>
            <th className={classes.center}>Supervisor</th>
          </tr>
        </thead>
        <tbody>
          {projects.length > 0 ? tableBody : <p>There are no item to show!</p>}
        </tbody>
        {limit < projects.length && (
          <p className={classes.load} onClick={loadMoreHandler}>
            Load More
          </p>
        )}
      </Table>
    </div>
  );
};

export default ProjectTable;
