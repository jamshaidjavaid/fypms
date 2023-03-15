import { useState, useEffect } from "react";
import NoticeBoardItem from "./NoticeBoardItem";
import CustomCard from "../UI/CustomCard";
import Button from "../UI/Button";

import classes from "./NoticeBoardComponent.module.css";

const NoticeBoardComponent = (props) => {
  const [limit, setLimit] = useState(3);

  const [notices, setNotices] = useState(props.notices);

  useEffect(() => {
    setNotices(props.notices);
  }, [props.notices]);

  const deleteNoticeHandler = (id) => {
    const updateNotices = notices.filter((notice) => notice.id !== id);
    setNotices(updateNotices);
  };

  const loadMoreHandler = () => {
    setLimit((prevlimit) => prevlimit + 3);
  };

  const customclass = props.wide ? classes.wide : "";

  const noticeItems = notices.slice(0, limit).map((item) => {
    return (
      <NoticeBoardItem
        onDeleteNotice={deleteNoticeHandler}
        reciever={props.reciever}
        key={item.id}
        item={item}
      />
    );
  });

  return (
    <CustomCard>
      <div className={`${classes["notice-container"]} ${customclass}`}>
        <p className={classes.head}>Notice Board</p>
        <Button>Add Notice</Button>
        {notices.length > 0 && noticeItems}
        {!notices.length && <p>No notices to show here!</p>}
        {limit < notices.length && (
          <p className={classes.load} onClick={loadMoreHandler}>
            Load More
          </p>
        )}
      </div>
    </CustomCard>
  );
};

export default NoticeBoardComponent;
