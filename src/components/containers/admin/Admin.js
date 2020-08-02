import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

import i18nRepo from "../../../i18n-repo/i18nRepo";

import {setLanguage} from "../../../store/actions/appActionCreator";
import styles from "./Admin.module.scss";

class Admin extends Component
{
  onClickButton = () =>
  {
    switch (this.props.language)
    {
      case i18nRepo.languages.en:
        this.props.setLanguage(i18nRepo.languages.tr);
        break;
      case i18nRepo.languages.tr:
        this.props.setLanguage(i18nRepo.languages.en);
        break;
      default:
        throw new Error("Invalid arguments.");
    }
  };

  render ()
  {
    return (
      <div className={styles["admin-page"]}>
        <p className={styles["admin-page__paragraph"]}>
          {i18nRepo.getWord("adminPage")}
        </p>

        <button onClick={this.onClickButton}>{i18nRepo.getWord("changeLanguage")}</button>
      </div>
    );
  }
}

const mapStateToProps = (state) =>
{
  return {
    language: state.appReducer.language,
    user: state.appReducer.user
  };
};

const mapDispatchToProps = (dispatch) =>
{
  return {
    setLanguage: (language) => dispatch(setLanguage(language))
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin));
