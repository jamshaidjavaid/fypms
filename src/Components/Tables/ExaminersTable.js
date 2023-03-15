import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";

import Button from "../UI/Button";
import classes from "./SupervisorsTable.module.css";

const ExaminersTable = (props) => {
  const { examiners } = props;

  const [limit, setLimit] = useState(4);

  const loadMoreHandler = () => {
    setLimit((prevlimit) => prevlimit + 3);
  };

  const tableBody = examiners.slice(0, limit).map((examiner) => {
    return (
      <tr key={examiner.id}>
        <td>{examiner.name}</td>
        <td className={classes.center}>{examiner.empId}</td>
        <td className={classes.center}>{examiner.designation}</td>
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
      {examiners.length > 0 && (
        <Table responsive hover className={classes.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th className={classes.center}>Emp ID</th>
              <th className={classes.center}>Designation</th>
            </tr>
          </thead>
          <tbody>{tableBody}</tbody>
        </Table>
      )}
      {examiners.length === 0 && (
        <p style={{ color: "red" }}>There are no examiners to show!</p>
      )}
      {limit < examiners.length && (
        <p className={classes.load} onClick={loadMoreHandler}>
          Load More
        </p>
      )}
    </div>
  );
};

export default ExaminersTable;
