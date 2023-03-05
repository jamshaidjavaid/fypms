import { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
import { Form } from "react-bootstrap";

import TeacherComponent from "../../../Components/Teachers/TeacherComponent";
import Button from "../../../Components/UI/Button";
import classes from "./Teachers.module.css";

const TEACHERS = [
  {
    name: "Abdul Jabbar Khan",
    designation: "Ass. Professor",
    empId: "2019-UE-00670",
    imgSrc: "/images/teachers.jpg",
  },
  {
    name: "Abdul Jabbar Khan",
    designation: "Ass. Professor",
    empId: "2019-UE-00670",
    imgSrc: "/images/teachers.jpg",
  },
  {
    name: "Abdul Jabbar Khan",
    designation: "Ass. Professor",
    empId: "2019-UE-00670",
    imgSrc: "/images/teachers.jpg",
  },
  {
    name: "Abdul Jabbar Khan",
    designation: "Ass. Professor",
    empId: "2019-UE-00670",
    imgSrc: "/images/teachers.jpg",
  },
  {
    name: "Abdul Jabbar Khan",
    designation: "Ass. Professor",
    empId: "2019-UE-00670",
    imgSrc: "/images/teachers.jpg",
  },
  {
    name: "Abdul Jabbar Khan",
    designation: "Ass. Professor",
    empId: "2019-UE-00670",
    imgSrc: "/images/teachers.jpg",
  },
  {
    name: "ustad sb kia",
    designation: "Ass. Professor",
    empId: "2019-UE-00670",
    imgSrc: "/images/teachers.jpg",
  },
  {
    name: "Abdul Jabbar Khan",
    designation: "Ass. Professor",
    empId: "2019-UE-00670",
    imgSrc: "/images/teachers.jpg",
  },
  {
    name: "Abdul Jabbar Khan",
    designation: "Ass. Professor",
    empId: "2018-UE-00670",
    imgSrc: "/images/teachers.jpg",
  },
  {
    name: "Abdul Jabbar Khan",
    designation: "Ass. Professor",
    empId: "2019-UE-00670",
    imgSrc: "/images/teachers.jpg",
  },
  {
    name: "Abdul Jabbar Khan",
    designation: "Ass. Professor",
    empId: "2019-UE-00670",
    imgSrc: "/images/teachers.jpg",
  },
  {
    name: "Abdul Jabbar Khan",
    designation: "Ass. Professor",
    empId: "2019-UE-00670",
    imgSrc: "/images/teachers.jpg",
  },
];

const Teachers = (props) => {
  const searchHandler = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };
  const [searchQuery, setSearchQuery] = useState("");

  const onSubmitSearchHandler = (e) => {
    e.preventDefault();
  };

  const filteredTeachers = TEACHERS.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.empId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const teachersProfiles =
    filteredTeachers.length > 0 ? (
      filteredTeachers.map((teacher, index) => {
        return <TeacherComponent key={index} teacher={teacher} />;
      })
    ) : (
      <p>No teachers to show</p>
    );

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <h4>All Teachers</h4>
        <Form className="d-flex" onSubmit={onSubmitSearchHandler}>
          <Form.Control
            className={`${classes.search} mr-2`}
            type="search"
            placeholder="Search ID or Name"
            onChange={searchHandler}
          />
          <Button type="submit">
            <BiSearchAlt />
          </Button>
        </Form>
      </div>
      <div className={classes.teachers}>{teachersProfiles}</div>
    </div>
  );
};

export default Teachers;
