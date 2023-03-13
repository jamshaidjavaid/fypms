// import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Class from "../../../Components/Classes/Class";
import classes from "./Classes.module.css";

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

const Classes = () => {
  const [allClasses, setClasses] = useState(CLASSES);

  const deleteClassHandler = (id) => {
    const updateClasses = allClasses.filter((classa) => classa.id !== id);
    setClasses(updateClasses);
  };

  const addClassHandler = () => {};
  const passHandler = () => {};
  const classHandler = () => {};

  const classesLinks = allClasses.map((item, index) => {
    return (
      <Class
        key={index}
        item={item}
        classHandler={classHandler}
        passHandler={passHandler}
        onDeleteClass={deleteClassHandler}
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
