// import { Routes, Route } from "react-router-dom";

import Class from "../../../Components/Classes/Class";
import classes from "./Classes.module.css";

const Classes = () => {
  const CLASSES = [
    {
      name: "BSIT-Mor-Fall (2019-23)",
      supervisors: 12,
      projects: 17,
      students: 47,
      id: 1,
    },
    {
      name: "BSIT-Mor-Fall (2019-23)",
      supervisors: 12,
      projects: 17,
      students: 47,
      id: 2,
    },
    {
      name: "BSIT-Mor-Fall (2019-23)",
      supervisors: 12,
      projects: 17,
      students: 47,
      id: 3,
    },
    {
      name: "BSIT-Mor-Fall (2019-23)",
      supervisors: 12,
      projects: 17,
      students: 47,
      id: 4,
    },
  ];

  const addClassHandler = () => {};
  const passHandler = () => {};
  const classHandler = () => {};
  const deleteHandler = () => {};

  const classesLinks = CLASSES.map((item, index) => {
    return (
      <Class
        key={index}
        item={item}
        classHandler={classHandler}
        passHandler={passHandler}
        deleteHandler={deleteHandler}
      />
    );
  });

  return (
    <div className={classes.container}>
      <div className={classes["add-class"]} onClick={addClassHandler}>
        <span className={classes.plus}>+</span>
      </div>
      {classesLinks}
    </div>
  );
};

export default Classes;
