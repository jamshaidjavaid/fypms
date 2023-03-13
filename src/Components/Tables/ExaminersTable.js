import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

import Button from "../UI/Button";
import classes from "./SupervisorsTable.module.css";

const ExaminersTable = () => {
  const EXAMINERS = [
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

  const [limit, setLimit] = useState(4);

  const loadMoreHandler = () => {
    setLimit((prevlimit) => prevlimit + 3);
  };

  const tableBody = EXAMINERS.slice(0, limit).map((examiner, index) => {
    return (
      <tr key={index}>
        <td>{examiner.name}</td>
        <td className={classes.center}>{examiner.empId}</td>
        <td className={classes.center}>{examiner.undertaken}</td>
        <td className={classes.center}>{examiner.projectLimit}</td>
      </tr>
    );
  });

  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <p className={classes.name}>Examiners</p>
        <Link to={"./assign-examiner"}>
          <Button>Add Examiner</Button>
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
          {EXAMINERS.length > 0 ? tableBody : <p>There is no items to show!</p>}
        </tbody>
        {limit < EXAMINERS.length && (
          <p className={classes.load} onClick={loadMoreHandler}>
            Load More
          </p>
        )}
      </Table>
    </div>
  );
};

export default ExaminersTable;
