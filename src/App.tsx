import React from "react";
import "bulma";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./containers/home/Home";
import Layout from "./containers/Layout/Layout";
import StoreProvider from "./containers/StoreProvider/StoreProvider";

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <StoreProvider>
            <Route path="/history">
              <div>Viendo el historial</div>
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </StoreProvider>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
