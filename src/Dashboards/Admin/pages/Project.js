import { Link } from "react-router-dom";

import CustomCard from "../../../Components/UI/CustomCard";
import Button from "../../../Components/UI/Button";

import classes from "./Project.module.css";

const Project = () => {
  const PROJECT = {
    title: "Web-Based Final Year Project Management System",
    id: "IT-22-01",
    class: "BSIT-Mor-Fall (2019-23)",
    members: [
      {
        first: "Jamshaid",
        last: "Javaid",
      },
      {
        first: "Mubashar",
        last: "Ali",
      },
      {
        first: "Muhammad",
        last: "Ahtesham",
      },
    ],
    supervisor: "Muhammad Nawaz",
    examiner: "John Doe",
    description:
      "A web-based that aids students, supervisors, and Project Management Office during the whole process of final year projects. This system has three primary users with different logins and different user interfaces.",
  };

  const members = PROJECT.members.map((member, index) => {
    return (
      <span key={index}>
        {member.first} {member.last} <br />
      </span>
    );
  });

  return (
    <div className={classes.container}>
      <CustomCard>
        <div className={classes.project}>
          <p className={classes.headline}>{PROJECT.title}</p>
          <div className={classes.item}>
            <p>Project ID:</p>
            <span> {PROJECT.id}</span>
          </div>
          <div className={classes.item}>
            <p>Class:</p>
            <span> {PROJECT.class}</span>
          </div>

          <div className={classes.item}>
            <p>Project Members:</p>
            <span>{members}</span>
          </div>

          <div className={classes.item}>
            <p>Project Supervisor:</p>
            <span>{PROJECT.supervisor}</span>
          </div>
          <div className={classes.item}>
            <p>Project Examiner:</p>
            <span>{PROJECT.examiner}</span>
          </div>
          <div className={classes.item}>
            <p>Project Description:</p>
            <span>{PROJECT.description}</span>
          </div>
          <div className={`${classes.item} ${classes.buttons}`}>
            <Link to={"./delete"}>
              <Button>Delete Project</Button>
            </Link>
            <Link to={"./edit"}>
              <Button>Edit Project</Button>
            </Link>
          </div>
        </div>
      </CustomCard>
    </div>
  );
};

export default Project;
