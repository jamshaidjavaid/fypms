import classes from "./NotificationItem.module.css";

const NotificationItem = (props) => {
  return (
    <div className={classes.text}>
      <p className={classes.headline}>{props.item.headline}</p>
      <p className={classes.description}>{props.item.description}</p>
      <p className={classes.sender}>
        Sender: <span>{props.item.sender}</span>
      </p>
      <hr />
    </div>
  );
};

export default NotificationItem;
