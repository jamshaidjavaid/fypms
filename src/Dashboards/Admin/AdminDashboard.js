import { Route, Routes } from "react-router-dom";

import Classes from "./pages/Classes";
import Teachers from "./pages/Teachers";
import Projects from "./pages/Projects";
import NoticeBoard from "./pages/NoticeBoard";
import GenerateLists from "./pages/GenerateLists";
import PersonalNotes from "./pages/PersonalNotes";
// import Miscellaneous from "./pages/Miscellaneous";
import Settings from "./pages/Settings";
import Class from "./pages/Class";
import Teacher from "./pages/Teacher";
import NewProject from "./pages/NewProject";
import Project from "./pages/Project";
import Sidebar from "../../Components/Navbar/Sidebar";
import NoticeBoardComponent from "../../Components/NoticeBoards/NoticeBoardComponent";
import NotificationsComponent from "../../Components/Notifications/NotificationsComponent";
import EditTimeTable from "../../Components/Forms/EditTimeTable";
import CustomCard from "../../Components/UI/CustomCard";
import classes from "./AdminDashboard.module.css";

const AdminDashboard = (props) => {
  return (
    <Sidebar links={props.links}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/classes/" element={<Classes />} />
        <Route path="/classes/:classId" element={<Class />} />
        <Route
          path="/classes/:classId/edit-timetable"
          element={<EditTimeTable />}
        />
        <Route path="/teachers/" element={<Teachers />} />
        {/* <Route path="/teachers/add-examiner" element={<AddExaminer />} /> */}
        <Route path="/teachers/:teacherId" element={<Teacher />} />
        <Route path="/projects/" element={<Projects />} />
        <Route path="/projects/new-project" element={<NewProject />} />
        <Route path="/projects/:projectId" element={<Project />} />
        <Route path="/notice-board" element={<NoticeBoard />} />
        <Route path="/generate-list" element={<GenerateLists />} />
        <Route path="/personal-notes" element={<PersonalNotes />} />
        {/* <Route path="/miscellaneous" element={<Miscellaneous />} /> */}
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Sidebar>
  );
};

const NOTIFICATIONS = [
  {
    headline: "Assign Another Teacher",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    sender: "Munawar Hussain",
    id: 1,
  },
  {
    headline: "Assign Another Teacher",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    sender: "Munawar Hussain",
    id: 2,
  },
  {
    headline: "Assign Another Teacher",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    sender: "Munawar Hussain",
    id: 3,
  },
  {
    headline: "Assign Another Teacher",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    sender: "Munawar Hussain",
    id: 4,
  },
  {
    headline: "Assign Another Teacher",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    sender: "Munawar Hussain",
    id: 5,
  },
  {
    headline: "Assign Another Teacher",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    sender: "Munawar Hussain",
    id: 6,
  },
  {
    headline: "Assign Another Teacher",
    description:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    sender: "Munawar Hussain",
    id: 7,
  },
];

const NOTICE_BOARD = [
  {
    headline: "Ustad g will be held on Friday, 09-02-23",
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
  {
    headline: "Presentations will be held on Friday, 09-02-23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    recieverEntity: "Class",
    reciever: "BSIT-Mor-Fall (2019-23)",
    id: 4,
  },
  {
    headline: "Presentations will be held on Friday, 09-02-23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    recieverEntity: "Class",
    reciever: "BSIT-Mor-Fall (2019-23)",
    id: 5,
  },
  {
    headline: "Presentations will be held on Friday, 09-02-23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    recieverEntity: "Class",
    reciever: "BSIT-Mor-Fall (2019-23)",
    id: 6,
  },
  {
    headline: "Presentations will be held on Friday, 09-02-23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    recieverEntity: "Class",
    reciever: "BSIT-Mor-Fall (2019-23)",
    id: 7,
  },
];

export const Dashboard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes["card-container"]}>
          <CustomCard>
            <div className={classes.card}>
              <p>Total Projects</p>
              <h1>22</h1>
            </div>
          </CustomCard>
          <CustomCard>
            <div className={classes.card}>
              <p>Assiged Projects</p>
              <h1 style={{ color: "green" }}>02</h1>
            </div>
          </CustomCard>
          <CustomCard>
            <div className={classes.card}>
              <p>Unassigned Projects</p>
              <h1 style={{ color: "red" }}>20</h1>
            </div>
          </CustomCard>
          <CustomCard>
            <div className={classes.card}>
              <p>Total Supervisors</p>
              <h1>22</h1>
            </div>
          </CustomCard>
        </div>
        <div>
          <NotificationsComponent notifications={NOTIFICATIONS} />
        </div>
      </div>
      <div>
        <NoticeBoardComponent reciever={true} notices={NOTICE_BOARD} />
      </div>
    </div>
  );
};

export default AdminDashboard;
