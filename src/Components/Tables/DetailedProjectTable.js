import { useState } from "react";
import { Table, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";

import Button from "../UI/Button";
import classes from "./DetailedProjectTable.module.css";

const DetailedProjectTable = (props) => {
  const { label, projects } = props;

  const [limit, setLimit] = useState(7);
  const [searchQuery, setSearchQuery] = useState("");

  const loadMoreHandler = () => {
    setLimit((prevlimit) => prevlimit + 3);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const onSubmitSearchHandler = (e) => {
    e.preventDefault();
  };

  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const tableBody = filteredProjects.slice(0, limit).map((project, index) => {
    const members = project.members.map((member, index) => {
      return <span key={index}>{member.first}, </span>;
    });
    return (
      <tr key={index}>
        <td>{project.id}</td>
        <td>{project.title}</td>
        <td className={classes.center}>{members}</td>
        <td className={classes.center}>{project.supervisor}</td>
        <td className={classes.center}>{project.class}</td>
        <td className={classes.center}>
          <Link to={`./${project.id}`}>
            <Button>Details</Button>
          </Link>
        </td>
      </tr>
    );
  });

  return (
    <div className={classes.container}>
      <div className={classes.head}>
        <p className={classes.name}>{label}</p>
        <Form className="d-flex" onSubmit={onSubmitSearchHandler}>
          <Form.Control
            className={`${classes.search} mr-2`}
            type="search"
            placeholder="Search Project ID/Title"
            onChange={searchHandler}
          />
          <Button type="submit">
            <BiSearchAlt />
          </Button>
        </Form>
        {props.button && (
          <Link to={"/projects/new/project"}>
            <Button>Add Project</Button>
          </Link>
        )}
      </div>

      <Table responsive hover className={classes.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th className={classes.center}>Members</th>
            <th className={classes.center}>Supervisor</th>
            <th className={classes.center}>Class</th>
            <th className={classes.center}></th>
          </tr>
        </thead>
        <tbody>
          {projects.length > 0 ? tableBody : <p>There are no item to show!</p>}
        </tbody>
        {limit < projects.length && (
          <p className={classes.load} onClick={loadMoreHandler}>
            Load More
          </p>
        )}
      </Table>
    </div>
  );
};

export default DetailedProjectTable;
