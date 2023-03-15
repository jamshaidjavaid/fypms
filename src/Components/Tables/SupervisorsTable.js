import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

import Button from "../UI/Button";
import classes from "./SupervisorsTable.module.css";

const SupervisorsTable = (props) => {
  const [limit, setLimit] = useState(3);

  const loadMoreHandler = () => {
    setLimit((prevlimit) => prevlimit + 3);
  };

  const tableBody = props.supervisors
    .slice(0, limit)
    .map((supervisor, index) => {
      return (
        <tr key={index}>
          <td>{supervisor.name}</td>
          <td className={classes.center}>{supervisor.empId}</td>
          <td className={classes.center}>{supervisor.assignedProjectsCount}</td>
          <td className={classes.center}>{supervisor.projectsLimit}</td>
        </tr>
      );
    });

  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <p className={classes.name}>Supervisors</p>
        <Link to={"/assign-supervisor"}>
          <Button>Add Supervisor</Button>
        </Link>
      </div>
      {props.supervisors.length > 0 && (
        <Table responsive hover className={classes.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th className={classes.center}>Emp ID</th>
              <th className={classes.center}>Undertaken</th>
              <th className={classes.center}>Limit</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </Table>
      )}
      {props.supervisors.length === 0 && (
        <p style={{ color: "red" }}>There are no supervisors to show!</p>
      )}
      {limit < props.supervisors.length && (
        <p className={classes.load} onClick={loadMoreHandler}>
          Load More
        </p>
      )}
    </div>
  );
};

export default SupervisorsTable;
