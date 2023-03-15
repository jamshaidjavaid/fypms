import { Route, Routes } from "react-router-dom";

import Classes from "./pages/Classes";
import Teachers from "./pages/Teachers";
import Projects from "./pages/Projects";
import NoticeBoard from "./pages/NoticeBoard";
import GenerateLists from "./pages/GenerateLists";
import PersonalNotes from "./pages/PersonalNotes";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Class from "./pages/Class";
import Teacher from "./pages/Teacher";
import NewProject from "./pages/NewProject";
import Project from "./pages/Project";
import Sidebar from "../../Components/Navbar/Sidebar";
import EditTimeTable from "../../Components/Forms/EditTimeTable";

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
        <Route path="/teachers/:teacherId" element={<Teacher />} />
        <Route path="/projects/" element={<Projects />} />
        <Route path="/projects/new-project" element={<NewProject />} />
        <Route path="/projects/:projectId" element={<Project />} />
        <Route path="/notice-board" element={<NoticeBoard />} />
        <Route path="/generate-list" element={<GenerateLists />} />
        <Route path="/personal-notes" element={<PersonalNotes />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Sidebar>
  );
};

export default AdminDashboard;
