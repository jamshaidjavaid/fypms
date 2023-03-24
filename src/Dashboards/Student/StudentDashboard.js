import React from "react";
import Sidebar from "../../Components/Navbar/Sidebar";

const StudentDashboard = (props) => {
  return (
    <Sidebar links={props.links}>
      <h1>Student Dashboard</h1>
    </Sidebar>
  );
};

export default StudentDashboard;
