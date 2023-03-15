import { useState } from "react";

import { ApiCall } from "../../../api/apiCall";

import Class from "../../../Components/Classes/Class";
import classes from "./Classes.module.css";

// const CLASSES = [
//   {
//     name: "BSIT-Mor-Fall (2019-23)",
//     supervisors: 12,
//     projects: 17,
//     students: 47,
//     id: 1,
//   },
//   {
//     name: "BSIT-Mor-Fall (2019-23)",
//     supervisors: 12,
//     projects: 17,
//     students: 47,
//     id: 2,
//   },
//   {
//     name: "BSIT-Mor-Fall (2019-23)",
//     supervisors: 12,
//     projects: 17,
//     students: 47,
//     id: 3,
//   },
//   {
//     name: "BSIT-Mor-Fall (2019-23)",
//     supervisors: 12,
//     projects: 17,
//     students: 47,
//     id: 4,
//   },
// ];

const Classes = () => {
  const [allClasses, setClasses] = useState([]);

  const loadClasses = async () => {
    const response = await ApiCall({
      params: {},
      route: "admin/classes",
      verb: "get",
      token: "jwt_token",
      baseurl: true,
    });

    if (response && response.status === 200) {
      setClasses(response.response.classes);
      return response.response.classes;
    } else {
      console.log(response);
    }
  };

  loadClasses();

  const deleteClassHandler = async (id) => {
    const response = await ApiCall({
      params: {},
      route: `admin/classes/${id}/delete`,
      verb: "delete",
      token: "jwt_token",
      baseurl: true,
    });

    if (response && response.status === 200) {
      console.log(response);
      return await loadClasses();
    } else {
      console.log(response);
    }
  };

  const addClassHandler = () => {};
  const passHandler = () => {};

  const classesLinks = allClasses.map((item) => {
    return (
      <Class
        key={item.id}
        item={item}
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
