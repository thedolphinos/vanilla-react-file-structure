/*
 * This file contains the routing logic. It decides the appropriate router to be rendered according to URL.
 * Keep in mind all router files should be placed under `/routers` folder. The file name should be `FooService.js`.
 */
import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

import CommonHelper from "../libs/CommonHelper";
import i18nRepo from "../i18n-repo/i18nRepo";

import HomeRouter from "./HomeRouter";
import AdminRouter from "./AdminRouter";

class Router extends Component
{
  constructor (props)
  {
    super(props);

    i18nRepo.setLanguage(props.language); // before the render execution in each router, the current language should be set in i18n-repo.
  }

  /**
   * Decides the appropriate router to be rendered according to URL.
   *
   * @return {Component} - It is one of the routers under `routers` folder.
   * @private
   */
  _decideRouter = () =>
  {
    const pathNames = this.props.location.pathname.split("/"); // it sets all path names between / to an array.
    pathNames.shift(); // ignore the first element. since, it is always an empty string.

    const firstPathName = pathNames[0];

    if (CommonHelper.isExist(firstPathName) && firstPathName === "admin")
    {
      return <AdminRouter />;
    }
    else
    {
      return <HomeRouter />;
    }
  };

  render ()
  {
    return this._decideRouter();
  }
}

const mapStateToProps = (state) =>
{
  return {
    language: state.appReducer.language
  };
};

export default withRouter(connect(mapStateToProps)(Router));
