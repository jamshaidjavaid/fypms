import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import { ApiCall } from "../../../api/apiCall";

import SpinnerModal from "../../../Components/UI/SpinnerModal";
import CustomCard from "../../../Components/UI/CustomCard";
import Button from "../../../Components/UI/Button";

import classes from "./Project.module.css";

const Project = () => {
  const [pageState, setPageState] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { projectId } = useParams();
  let members;

  useEffect(() => {
    const loadPage = async () => {
      const response = await ApiCall({
        params: { projectId },
        route: `admin/projects/${projectId}`,
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
  }, [projectId]);

  if (!isLoading) {
    members = pageState.project.memberNames.map((member) => {
      return (
        <span key={member.id}>
          {member.name}
          <br />
        </span>
      );
    });
  }
  return (
    <div>
      {!isLoading && (
        <div className={classes.container}>
          <CustomCard>
            <div className={classes.project}>
              <p className={classes.headline}>{pageState.project.title}</p>
              <div className={classes.item}>
                <p>Project ID:</p>
                <span> {pageState.project.id}</span>
              </div>
              <div className={classes.item}>
                <p>Class:</p>
                <span> {pageState.project.className}</span>
              </div>

              <div className={classes.item}>
                <p>Project Members:</p>
                <span>{members}</span>
              </div>

              <div className={classes.item}>
                <p>Project Supervisor:</p>
                <span>{pageState.project.supervisorName}</span>
              </div>
              <div className={classes.item}>
                <p>Project Description:</p>
                <span>{pageState.project.description}</span>
              </div>
              <div className={`${classes.item} ${classes.buttons}`}>
                <Button>Delete Project</Button>
                <Button>Edit Project</Button>
              </div>
            </div>
          </CustomCard>
        </div>
      )}
      {isLoading && <SpinnerModal />}
    </div>
  );
};

export default Project;
