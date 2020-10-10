import React from "react";
import "bulma/css/bulma.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/home/Home";
import Layout from "./containers/Layout/Layout";

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/history">
            <div>Viendo el historial</div>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
