/*
 * This is the root file of the application.
 * Here, the root component (Root) is rendered under the DOM element with id root.
 * Root basically wraps the application (App) with Redux.
 */
import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";

import configureStore from "./config/storeConfig";

import App from "./App";
import "./styles/reset.css";
import "./index.scss";

const {store, persistor} = configureStore();

const Root = () =>
{
  return (
    <Provider store={store}>
      <PersistGate loading={null}
                   persistor={persistor}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
