/*
 * This file contains the application logic.
 * App basically renders Router.
 */
import React, {Component} from "react";

import Router from "./routers/Router";

class App extends Component
{
  render ()
  {
    return (
      <Router />
    );
  }
}

export default App;
