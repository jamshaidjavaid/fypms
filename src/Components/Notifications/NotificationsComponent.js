import { useState } from "react";
import NotificationItem from "./NotificationItem";
import CustomCard from "../UI/CustomCard";

import classes from "./NotificationsComponent.module.css";

const NotificationsComponent = (props) => {
  const [limit, setLimit] = useState(3);

  const loadMoreHandler = () => {
    setLimit((prevlimit) => prevlimit + 3);
  };

  const notificationItems = props.notifications
    .slice(0, limit)
    .map((item, index) => {
      return <NotificationItem key={index} item={item} />;
    });

  return (
    <CustomCard>
      <div className={classes["notification-container"]}>
        <p className={classes.head}>Notifications</p>
        {notificationItems}
        {limit < props.notifications.length && (
          <p className={classes.load} onClick={loadMoreHandler}>
            Load More
          </p>
        )}
      </div>
    </CustomCard>
  );
};

export default NotificationsComponent;
