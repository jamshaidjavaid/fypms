import { useState } from "react";
import NoticeBoardItem from "./NoticeBoardItem";
import CustomCard from "../UI/CustomCard";

import classes from "./NoticeBoardComponent.module.css";

const NoticeBoardComponent = (props) => {
  const [limit, setLimit] = useState(3);

  const loadMoreHandler = () => {
    setLimit((prevlimit) => prevlimit + 3);
  };

  const customclass = props.wide ? classes.wide : "";

  const noticeItems = props.notices.slice(0, limit).map((item, index) => {
    return (
      <NoticeBoardItem reciever={props.reciever} key={index} item={item} />
    );
  });

  return (
    <CustomCard>
      <div className={`${classes["notice-container"]} ${customclass}`}>
        <p className={classes.head}>Notice Board</p>
        {noticeItems}
        {limit < props.notices.length && (
          <p className={classes.load} onClick={loadMoreHandler}>
            Load More
          </p>
        )}
      </div>
    </CustomCard>
  );
};

export default NoticeBoardComponent;
