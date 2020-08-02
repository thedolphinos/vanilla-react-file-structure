/*
 * https://redux.js.org/basics/reducers
 * Keep in mind all reducer files should be placed under `/store/reducers` folder. The file name should be `fooReducer.js`.
 *
 * Each reducer should have the following signature:
 * @param {object} currentState - The current state.
 * @param {{type: string, payload: object}} action - It contains type and payload. Type should be one of the action types under `/actions/actionTypes.js` file.
 * @return {object} - The new state.
 */
import * as actionTypes from "../actions/actionTypes";
import i18nRepo from "../../i18n-repo/i18nRepo";

const initialState = {
  language: i18nRepo.languages.en,
  user: null
};

const appReducer = (currentState = initialState, action) =>
{
  switch (action.type)
  {
    case actionTypes.SET_LANGUAGE:
      i18nRepo.setLanguage(action.payload.language);

      return {
        ...currentState,
        language: action.payload.language
      };
    case actionTypes.SET_USER:
      return {
        ...currentState,
        user: action.payload.user
      };
    default:
      return currentState;
  }
};

export default appReducer;
