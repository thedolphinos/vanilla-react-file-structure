import React from "react";
import {Route, Redirect, Switch} from "react-router-dom";
import _ from "lodash";

class RouteHelper
{
  /**
   * Creates Route tags to pass in to Switch
   *
   * @param path {String}
   * @param config {Object} - props to pass Router tag. (e.g. exact, push, key, ...)
   * @param haveParent {Boolean} - whether given component has a parent or not
   * @param Component {React.Element} - component to render in this route
   * @param ParentComponent {React.Element} - given Component's parent component to wrap in the render method
   * @return {React.Element}
   */
  static generateRoute (path, config, haveParent, Component, ParentComponent = null)
  {
    if (!_.isString(path) ||
        !_.isPlainObject(config) ||
        !_.isBoolean(haveParent) ||
        !React.isValidElement(<Component />) ||
        (haveParent && !React.isValidElement(<ParentComponent />)))
    {
      throw new Error("Invalid arguments.");
    }

    return (
      <Route
        path={path}
        {...config}
        render={(props) =>
        {
          return haveParent
                 ?
                 (
                   <ParentComponent {...props}>
                     <Component {...props} />
                   </ParentComponent>
                 )
                 :
                 <Component {...props} />;
        }
        }
      />
    );
  }

  /**
   * Renders the routes according the given definition of routes.
   *
   * @param {{routes: [Route], redirectRoute: string}} routesDefinition - Contains routes and the route to be redirected if no match. `Route` under `routes` should be generated using `generateRoute` method.
   * @return {Switch}
   */
  static renderRoute (routesDefinition)
  {
    return (
      <Switch>
        {
          [
            ...routesDefinition.routes
          ]
        }

        <Redirect to={routesDefinition.redirectRoute} />
      </Switch>
    );
  }
}

export default RouteHelper;
