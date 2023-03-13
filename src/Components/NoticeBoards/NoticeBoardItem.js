import { MdOutlineDeleteForever } from "react-icons/md";

import classes from "./NoticeBoardItem.module.css";

const NoticeBoardItem = (props) => {
  const deleteNoticeHandler = (id) => {
    props.onDeleteNotice(id);
  };

  return (
    <div className={classes.container}>
      <div className={classes.text}>
        <p className={classes.headline}>{props.item.headline}</p>
        <p className={classes.description}>{props.item.description}</p>
        {props.reciever && (
          <p className={classes.reciever}>
            {props.item.recieverEntity}: <span>{props.item.reciever}</span>
          </p>
        )}
        <hr />
      </div>
      <MdOutlineDeleteForever
        className={classes.icon}
        onClick={() => deleteNoticeHandler(props.item.id)}
      />
    </div>
  );
};

export default NoticeBoardItem;