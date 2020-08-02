/*
 * https://redux.js.org/basics/actions#action-creators
 * Keep in mind all action creator files should be placed under `/store/actions` folder. The file name should be `fooActionCreator.js`.
 *
 * Actions should have the following signature:
 * @param {*} x_0 - It will be put inside `payload`.
 * .
 * .
 * .
 * @param {*} x_n - It will be put inside `payload`.
 * @return {{type: string, payload: object }} - Actions that contain type and payload. Type should be one of the action types under `/actions/actionTypes.js` file. Payload is data container.
 */
import * as actionTypes from "./actionTypes";

export const setLanguage = (language) =>
{
  return {
    type: actionTypes.SET_LANGUAGE,
    payload: {
      language: language
    }
  };
};

export const setUser = (user) =>
{
  return {
    type: actionTypes.SET_USER,
    payload: {
      user: user
    }
  };
};
