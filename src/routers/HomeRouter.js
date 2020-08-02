import React, {Component} from "react";
import {withRouter} from "react-router-dom";

import RouteHelper from "../libs/RouteHelper";

import Home from "../components/containers/home/Home";

class HomeRouter extends Component
{
  constructor (props)
  {
    super(props);

    this.currentRouteKey = "home"; // this logic is not needed for this case. however, it is implemented to achieve consistency between routers files.

    this.routeMap = {
      home: {
        routes: [
          RouteHelper.generateRoute("/", {
            key: "1",
            exact: true,
            strict: false,
            push: true
          }, false, Home)
        ],
        redirectRoute: "/"
      }
    };
  }

  render ()
  {
    return RouteHelper.renderRoute(this.routeMap[this.currentRouteKey]);
  }
}

export default withRouter(HomeRouter);
