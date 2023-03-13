import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

import Button from "../UI/Button";
import classes from "./SupervisorsTable.module.css";

const SupervisorsTable = () => {
  const SUPERVISORS = [
    {
      name: "Muhammad Nawaz",
      empId: "bsf1900334",
      undertaken: 3,
      projectLimit: 5,
    },
    {
      name: "Muhammad Nawaz",
      empId: "bsf1900334",
      undertaken: 3,
      projectLimit: 5,
    },
    {
      name: "Muhammad Nawaz",
      empId: "bsf1900334",
      undertaken: 3,
      projectLimit: 5,
    },
    {
      name: "Muhammad Nawaz",
      empId: "bsf1900334",
      undertaken: 3,
      projectLimit: 5,
    },
    {
      name: "Muhammad Nawaz",
      empId: "bsf1900334",
      undertaken: 3,
      projectLimit: 5,
    },
  ];

  const [limit, setLimit] = useState(3);

  const loadMoreHandler = () => {
    setLimit((prevlimit) => prevlimit + 3);
  };

  const tableBody = SUPERVISORS.slice(0, limit).map((supervisor, index) => {
    return (
      <tr key={index}>
        <td>{supervisor.name}</td>
        <td className={classes.center}>{supervisor.empId}</td>
        <td className={classes.center}>{supervisor.undertaken}</td>
        <td className={classes.center}>{supervisor.projectLimit}</td>
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

      <Table responsive hover className={classes.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th className={classes.center}>Emp ID</th>
            <th className={classes.center}>Undertaken</th>
            <th className={classes.center}>Limit</th>
          </tr>
        </thead>
        <tbody>
          {SUPERVISORS.length > 0 ? (
            tableBody
          ) : (
            <p>There are no item to show!</p>
          )}
        </tbody>
        {limit < SUPERVISORS.length && (
          <p className={classes.load} onClick={loadMoreHandler}>
            Load More
          </p>
        )}
      </Table>
    </div>
  );
};

export default SupervisorsTable;
