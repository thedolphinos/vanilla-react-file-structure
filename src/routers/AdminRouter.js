import React, {Component} from "react";
import {withRouter} from "react-router-dom";

import RouteHelper from "../libs/RouteHelper";

import Admin from "../components/containers/admin/Admin";

class AdminRouter extends Component
{
  constructor (props)
  {
    super(props);

    this.currentRouteKey = "admin"; // this logic is not needed for this case. however, it is implemented to achieve consistency between routers files.

    this.routeMap = {
      admin: {
        routes: [
          RouteHelper.generateRoute("/admin", {
            key: "1",
            exact: true,
            strict: false,
            push: true
          }, false, Admin)
        ],
        redirectRoute: "/admin"
      }
    };
  }

  render ()
  {
    return RouteHelper.renderRoute(this.routeMap[this.currentRouteKey]);
  }
}

export default withRouter(AdminRouter);
