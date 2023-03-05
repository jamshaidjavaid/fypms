import { Table } from "react-bootstrap";
import { useState } from "react";

import classes from "./SupervisorsTable.module.css";

const StudentsTable = () => {
  const STUDENTS = [
    {
      name: "Muhammad Nawaz",
      rollNo: "bsf1900334",
      marks: "Nil",
      status: "Pending",
    },
    {
      name: "Muhammad Nawaz",
      rollNo: "bsf1900334",
      marks: "Nil",
      status: "Pending",
    },
    {
      name: "Muhammad Nawaz",
      rollNo: "bsf1900334",
      marks: "Nil",
      status: "Pending",
    },
    {
      name: "Muhammad Nawaz",
      rollNo: "bsf1900334",
      marks: "Nil",
      status: "Pending",
    },
    {
      name: "Muhammad Nawaz",
      rollNo: "bsf1900334",
      marks: "Nil",
      status: "Pending",
    },
    {
      name: "Muhammad Nawaz",
      rollNo: "bsf1900334",
      marks: "Nil",
      status: "Pending",
    },
  ];

  const [limit, setLimit] = useState(10);

  const loadMoreHandler = () => {
    setLimit((prevlimit) => prevlimit + 5);
  };

  const tableBody = STUDENTS.slice(0, limit).map((student, index) => {
    return (
      <tr key={index}>
        <td>{student.name}</td>
        <td className={classes.center}>{student.rollNo}</td>
        <td className={classes.center}>{student.marks}</td>
        <td className={classes.center}>{student.status}</td>
      </tr>
    );
  });

  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <p className={classes.name}>Students</p>
      </div>

      <Table responsive hover className={classes.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th className={classes.center}>Roll No</th>
            <th className={classes.center}>Marks</th>
            <th className={classes.center}>Status</th>
          </tr>
        </thead>
        <tbody>
          {STUDENTS.length > 0 ? tableBody : <p>There are no item to show!</p>}
        </tbody>
        {limit < STUDENTS.length && (
          <p className={classes.load} onClick={loadMoreHandler}>
            Load More
          </p>
        )}
      </Table>
    </div>
  );
};

export default StudentsTable;
