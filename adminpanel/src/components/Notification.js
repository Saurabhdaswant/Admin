import { Switch, Route } from "react-router-dom";

import Note from "./Note";
import Fut from "./Fut";

const Notification = () => {
  return (
    <div className="notification">
      <div className="main-child-two">
        <div className="head">
          <img src="svg/Bell.svg" alt="" />
          <h3>Notifications</h3>
        </div>

        <h3 className="day">Today</h3>
        <Switch>
          <Route exact path="/Note" component={Note} />
          <Route path="/Fut" component={Fut} />
        </Switch>
      </div>
    </div>
  );
};

export default Notification;
