import { Switch, Route } from "react-router-dom";

import Fut from "../Fut";

const Notification = () => {
  return (
    <div className="notification">
      <div className="main-child-two">
        <div className="head">
          <img src="svg/Bell.svg" alt="" />
          <p>Notifications</p>
        </div>

        <h3 className="day">Today</h3>
        <Switch>
          <Route exact path="/" component={Fut} />
          <Route path="/Fut" component={Fut} />
        </Switch>
      </div>
    </div>
  );
};

export default Notification;
