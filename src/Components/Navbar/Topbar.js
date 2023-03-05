import { useDispatch } from "react-redux";

import { authActions } from "../../store/authSlice";
import Button from "../UI/Button";
import classes from "./Topbar.module.css";

const Topbar = () => {
  const dispatch = useDispatch();

  const name = "Jamshaid Javaid";

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <div className={classes.container}>
      <p>
        Welcome,{" "}
        <span
          style={{
            color: "#6759D1",
            fontSize: "18px",
            paddingLeft: "5px",
          }}
        >
          {name}
        </span>
      </p>
      <div className={classes.group}>
        <Button onClick={logoutHandler}>LOGOUT</Button>
      </div>
    </div>
  );
};

export default Topbar;
