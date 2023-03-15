import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdOutlineDeleteForever } from "react-icons/md";

import { ApiCall } from "../../../api/apiCall";

import TeacherComponent from "../../../Components/Teachers/TeacherComponent";
import NoticeBoardComponent from "../../../Components/NoticeBoards/NoticeBoardComponent";
import ProjectTable from "../../../Components/Tables/ProjectTable";
import SpinnerModal from "../../../Components/UI/SpinnerModal";
import CustomCard from "../../../Components/UI/CustomCard";

import classes from "./Teacher.module.css";

const Teacher = () => {
  const [pageState, setPageState] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const { teacherId } = useParams();

  useEffect(() => {
    const loadPage = async () => {
      const response = await ApiCall({
        params: {},
        route: `admin/teachers/${teacherId}`,
        verb: "get",
        token: "jwt_token",
        baseurl: true,
      });

      if (response && response.status === 200) {
        setPageState(response.response);
        setIsLoading(false);
      } else {
        console.log(response);
        setIsLoading(false);
      }
    };
    loadPage();
  }, [teacherId]);

  const deleteUnderSupervisionHandler = (id) => {};

  const deleteUnderExaminationHandler = (id) => {};

  return (
    <div>
      {!isLoading && (
        <div className={classes["main-container"]}>
          <div className={classes.left}>
            <div className={classes.top}>
              <div className={classes.container}>
                <TeacherComponent button={false} teacher={pageState.teacher} />
                <CustomCard>
                  <div className={classes.limit}>
                    <p>Projects Limit</p>
                    <h4>
                      {pageState.teacher.projectsLimit
                        .toString()
                        .padStart(2, "0")}
                    </h4>
                  </div>
                </CustomCard>
                <CustomCard>
                  <div className={classes.limit}>
                    <p>Projects Undertaken</p>
                    <h4>
                      {pageState.teacher.assignedProjectsCount
                        .toString()
                        .padStart(2, "0")}
                    </h4>
                  </div>
                </CustomCard>
              </div>
              <div className={classes.container}>
                <CustomCard>
                  <div className={classes.box}>
                    <p className={classes.headline}>
                      Classes Under Supervision
                    </p>

                    {pageState.assignedForSupervision.map((classa) => {
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
                    <p className={classes.headline}>
                      Classes Under Examination
                    </p>
                    {pageState.assignedForExamination.map((classa) => {
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
            <hr />
            <ProjectTable
              projects={pageState.projects}
              label={"Under Supervision Projects"}
              button={false}
              columnName={"Class"}
            />
          </div>
          <NoticeBoardComponent reciever={false} notices={pageState.notices} />
        </div>
      )}
      {isLoading && <SpinnerModal />}
    </div>
  );
};

export default Teacher;
