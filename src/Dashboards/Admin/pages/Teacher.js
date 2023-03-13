// import { TbEdit } from "react-icons/tb";
import { MdOutlineDeleteForever } from "react-icons/md";

import TeacherComponent from "../../../Components/Teachers/TeacherComponent";
import NoticeBoardComponent from "../../../Components/NoticeBoards/NoticeBoardComponent";
import ProjectTable from "../../../Components/Tables/ProjectTable";
import CustomCard from "../../../Components/UI/CustomCard";

import classes from "./Teacher.module.css";
import { useState } from "react";

const NOTICE_BOARD = [
  {
    headline: "Presentations will be held on Friday, 09-02-23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    recieverEntity: "Teacher",
    reciever: "Abdul Jabbar Khan",
    id: 1,
  },
  {
    headline: "Presentations will be held on Friday, 09-02-23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    recieverEntity: "Teacher",
    reciever: "Abdul Jabbar Khan",
    id: 2,
  },
  {
    headline: "Presentations will be held on Friday, 09-02-23",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    recieverEntity: "Teacher",
    reciever: "Abdul Jabbar Khan",
    id: 3,
  },
];

const UNDER_SUPERVISION = [
  {
    className: "BSIT-Mor-Fall (2019-23)",
    classId: 1,
  },
  {
    className: "BSIT-Mor-Fall (2019-23)",
    classId: 2,
  },
  {
    className: "BSIT-Mor-Fall (2019-23)",
    classId: 3,
  },
];

const UNDER_EXAMINATION = [
  {
    className: "BSIT-Mor-Fall (2019-23)",
    classId: 1,
  },
  {
    className: "BSIT-Mor-Fall (2019-23)",
    classId: 2,
  },
  {
    className: "BSIT-Mor-Fall (2019-23)",
    classId: 3,
  },
];

const TEACHER = {
  profile: {
    name: "Abdul Jabbar Khan",
    designation: "Ass. Professor",
    empId: "2019-UE-00670",
    imgSrc: "/images/teachers.jpg",
  },
};

const Teacher = () => {
  const [underSupervision, setUnderSupervision] = useState(UNDER_SUPERVISION);
  const [underExamination, setUnderExamination] = useState(UNDER_EXAMINATION);

  const deleteUnderSupervisionHandler = (id) => {
    const updatedUnderSupervision = underSupervision.filter(
      (classa) => classa.classId !== id
    );
    setUnderSupervision(updatedUnderSupervision);
  };

  const deleteUnderExaminationHandler = (id) => {
    const updatedUnderExamination = underExamination.filter(
      (classa) => classa.classId !== id
    );
    setUnderExamination(updatedUnderExamination);
  };

  return (
    <div className={classes["main-container"]}>
      <div className={classes.left}>
        <div className={classes.top}>
          <div className={classes.container}>
            <TeacherComponent button={false} teacher={TEACHER.profile} />
            <CustomCard>
              <div className={classes.limit}>
                <p>Projects Limit</p>
                <h4>10</h4>
              </div>
            </CustomCard>
            {/* <TbESdit className={classes.icon} /> */}
            <CustomCard>
              <div className={classes.limit}>
                <p>Projects Undertaken</p>
                <h4>10</h4>
              </div>
            </CustomCard>
          </div>
          <div className={classes.container}>
            <CustomCard>
              <div className={classes.box}>
                <p className={classes.headline}>Classes Under Supervision</p>

                {underSupervision.map((classa) => {
                  return (
                    <div className={classes.class} key={classa.classId}>
                      <p>{classa.className}</p>
                      <MdOutlineDeleteForever
                        onClick={() =>
                          deleteUnderSupervisionHandler(classa.classId)
                        }
                        className={classes.icon}
                      />
                    </div>
                  );
                })}
              </div>
            </CustomCard>
            <CustomCard>
              <div className={classes.box}>
                <p className={classes.headline}>Classes Under Examination</p>
                {underExamination.map((classa) => {
                  return (
                    <div className={classes.class} key={classa.classId}>
                      <p>{classa.className}</p>
                      <MdOutlineDeleteForever
                        onClick={() =>
                          deleteUnderExaminationHandler(classa.classId)
                        }
                        className={classes.icon}
                      />
                    </div>
                  );
                })}
              </div>
            </CustomCard>
          </div>
        </div>
        <ProjectTable label={"Under Supervision Projects"} button={false} />
        <ProjectTable label={"Under Supervision Projects"} button={false} />
      </div>
      <NoticeBoardComponent reciever={false} notices={NOTICE_BOARD} />
    </div>
  );
};

export default Teacher;
