import React from "react";
import "bulma";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./containers/Layout/Layout";
import StoreProvider from "./containers/StoreProvider/StoreProvider";
import store from "./store";
import NameSetup from "./containers/NameSetup/NameSetup";
import GameView from "./containers/GameView/GameView";

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <StoreProvider store={store}>
            <Route path="/game">
              <GameView />
            </Route>
            <Route exact path="/">
              <NameSetup />
            </Route>
          </StoreProvider>
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
