import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { ApiCall } from "../../../api/apiCall";

import NoticeBoardComponent from "../../../Components/NoticeBoards/NoticeBoardComponent";
import ProjectTable from "../../../Components/Tables/ProjectTable";
import StudentsTable from "../../../Components/Tables/StudentTable";
import SupervisorsTable from "../../../Components/Tables/SupervisorsTable";
import ExaminersTable from "../../../Components/Tables/ExaminersTable";
import CustomCard from "../../../Components/UI/CustomCard";
import Button from "../../../Components/UI/Button";

import classes from "./Class.module.css";
// const NOTICE_BOARD = [
//   {
//     headline: "Presentations will be held on Friday, 09-02-23",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     recieverEntity: "Class",
//     reciever: "BSIT-Mor-Fall (2019-23)",
//     id: 1,
//   },
//   {
//     headline: "Presentations will be held on Friday, 09-02-23",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     recieverEntity: "Class",
//     reciever: "BSIT-Mor-Fall (2019-23)",
//     id: 2,
//   },
//   {
//     headline: "Presentations will be held on Friday, 09-02-23",
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     recieverEntity: "Class",
//     reciever: "BSIT-Mor-Fall (2019-23)",
//     id: 3,
//   },
// ];

const Class = () => {
  const [pageState, setPageState] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { classId } = useParams();

  let timetable;
  useEffect(() => {
    const loadPage = async () => {
      const response = await ApiCall({
        params: {},
        route: `admin/classes/${classId}`,
        verb: "get",
        token: "jwt_token",
        baseurl: true,
      });

      if (response && response.status === 200) {
        setPageState(response.response);
        setIsLoading(false);
      } else {
        console.log(response);
      }
    };
    loadPage();
  }, [classId]);

  if (!isLoading) {
    timetable = pageState.myClass.timetable;
    const formatDate = (timestamp) => {
      const options = { month: "short", day: "numeric", year: "numeric" };
      const date = new Date(timestamp);
      return date.toLocaleDateString("en-US", options);
    };

    for (const key in timetable) {
      if (timetable.hasOwnProperty(key)) {
        const value = timetable[key];
        timetable[key] = formatDate(value);
      }
    }
  }

  console.log("page rendered");

  // const className = "BSIT-Mor-Fall (201lll9-23)";

  return (
    <div>
      {!isLoading && (
        <div className={classes["main-container"]}>
          <div>
            <p>Class: {pageState.myClass.name}</p>
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
                  <h4>
                    {pageState.myClass.minAllowed.toString().padStart(2, "0")}
                  </h4>
                </div>
                <div className={classes.card}>
                  <p>Maximum No. of Allowed Students</p>
                  <h4>
                    {pageState.myClass.maxAllowed.toString().padStart(2, "0")}
                  </h4>
                </div>
              </div>
            </CustomCard>

            <CustomCard>
              <div className={classes.container}>
                <p className={classes.headline}>Deadlines and Submissions</p>
                <div className={classes.item}>
                  <p>Project Title:</p>
                  <h6>{timetable.titleSubmission}</h6>
                </div>
                <div className={classes.item}>
                  <p>Proposal Submission:</p>
                  <h6>{timetable.proposalSubmission}</h6>
                </div>
                <div className={classes.item}>
                  <p>Proposal Defense:</p>
                  <h6>{timetable.proposalDefense}</h6>
                </div>
                <div className={classes.item}>
                  <p>Deliverable 1:</p>
                  <h6>{timetable.deliverable1}</h6>
                </div>
                <div className={classes.item}>
                  <p>Deliverable 1 Evaluation:</p>
                  <h6>{timetable.deliverable1Evalutaion}</h6>
                </div>
                <div className={classes.item}>
                  <p>Deliverable 2:</p>
                  <h6>{timetable.deliverable2}</h6>
                </div>
                <div className={classes.item}>
                  <p>Deliverable 2 Evaluation:</p>
                  <h6>{timetable.deliverable2Evalutaion}</h6>
                </div>
                <Link to={`./edit-timetable`}>
                  <Button>
                    <p className={classes.edit}>Edit</p>
                  </Button>
                </Link>
              </div>
            </CustomCard>
            <NoticeBoardComponent
              reciever={false}
              notices={pageState.notices}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Class;
