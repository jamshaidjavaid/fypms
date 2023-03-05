// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import NoticeBoardComponent from "../../../Components/NoticeBoards/NoticeBoardComponent";
import ProjectTable from "../../../Components/Tables/ProjectTable";
import StudentsTable from "../../../Components/Tables/StudentTable";
import SupervisorsTable from "../../../Components/Tables/SupervisorsTable";
import ExaminersTable from "../../../Components/Tables/ExaminersTable";
import CustomCard from "../../../Components/UI/CustomCard";
import Button from "../../../Components/UI/Button";

import classes from "./Class.module.css";
const NOTICE_BOARD = [
  {
    headline: "Presentations will be held on Friday, 09-02-23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    recieverEntity: "Class",
    reciever: "BSIT-Mor-Fall (2019-23)",
    id: 1,
  },
  {
    headline: "Presentations will be held on Friday, 09-02-23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    recieverEntity: "Class",
    reciever: "BSIT-Mor-Fall (2019-23)",
    id: 2,
  },
  {
    headline: "Presentations will be held on Friday, 09-02-23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    recieverEntity: "Class",
    reciever: "BSIT-Mor-Fall (2019-23)",
    id: 3,
  },
];

const Class = () => {
  //   const { classId } = useParams();

  const className = "BSIT-Mor-Fall (2019-23)";

  return (
    <div className={classes["main-container"]}>
      <div>
        <p>Class: {className}</p>
        <ProjectTable label={"Projects"} button={true} />
        <SupervisorsTable />
        <StudentsTable />
        <ExaminersTable />
      </div>

      <div className={classes.right}>
        <CustomCard>
          <div className={classes["card-container"]}>
            <div className={classes.card}>
              <p>Minimum No. of Allowed Students</p>
              <h4>01</h4>
            </div>
            <div className={classes.card}>
              <p>Maximum No. of Allowed Students</p>
              <h4>03</h4>
            </div>
          </div>
        </CustomCard>

        <CustomCard>
          <div className={classes.container}>
            <p className={classes.headline}>Deadlines and Submissions</p>
            <div className={classes.item}>
              <p>Project Title:</p>
              <h6>03-02-2023</h6>
            </div>
            <div className={classes.item}>
              <p>Proposal Submission:</p>
              <h6>03-02-2023</h6>
            </div>
            <div className={classes.item}>
              <p>Proposal Defense:</p>
              <h6>03-02-2023</h6>
            </div>
            <div className={classes.item}>
              <p>Deliverable 1:</p>
              <h6>03-02-2023</h6>
            </div>
            <div className={classes.item}>
              <p>Deliverable 1 Evaluation:</p>
              <h6>03-02-2023</h6>
            </div>
            <div className={classes.item}>
              <p>Deliverable 2:</p>
              <h6>03-02-2023</h6>
            </div>
            <div className={classes.item}>
              <p>Deliverable 2 Evaluation:</p>
              <h6>03-02-2023</h6>
            </div>
            <Link to={`./edit-timetable`}>
              <Button>
                <p className={classes.edit}>Edit</p>
              </Button>
            </Link>
          </div>
        </CustomCard>
        <NoticeBoardComponent reciever={false} notices={NOTICE_BOARD} />
      </div>
    </div>
  );
};

export default Class;
