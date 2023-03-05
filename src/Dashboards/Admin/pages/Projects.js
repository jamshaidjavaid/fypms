import DetailedProjectTable from "../../../Components/Tables/DetailedProjectTable";

import classes from "./Projects.module.css";

const PROJECTS = [
  {
    id: "IT-22-01",
    title: "Final Year Project Management System",
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
    supervisor: "John Doe",
    class: "BSIT-Mor-Fall (2019-23)",
  },
  {
    id: "IT-22-01",
    title: "Final Year Project Management System",
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
    supervisor: "John Doe",
    class: "BSIT-Mor-Fall (2019-23)",
  },
  {
    id: "IT-22-01",
    title: "Final Year Project Management System",
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
    supervisor: "John Doe",
    class: "BSIT-Mor-Fall (2019-23)",
  },
  {
    id: "IT-22-01",
    title: "Final Year Project Management System",
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
    supervisor: "John Doe",
    class: "BSIT-Mor-Fall (2019-23)",
  },
  {
    id: "CS-22-01",
    title: "Hello Year Project Management System",
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
    supervisor: "John Doe",
    class: "BSIT-Mor-Fall (2019-23)",
  },
];

const Projects = (props) => {
  return (
    <div className={classes.container}>
      <DetailedProjectTable
        projects={PROJECTS}
        label={"All Projects"}
        button={true}
      />
      <DetailedProjectTable
        projects={PROJECTS}
        label={"All Projects"}
        button={false}
      />
    </div>
  );
};

export default Projects;
