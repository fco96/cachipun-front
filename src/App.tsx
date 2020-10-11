import React from "react";
import "bulma";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./containers/Layout/Layout";
import StoreProvider from "./containers/StoreProvider/StoreProvider";
import store from "./store";
import NameSetup from "./containers/NameSetup/NameSetup";
import GameView from "./containers/GameView/GameView";
import Home from "./containers/Home/Home";
import CustomRules from "./containers/CustomRules/CustomRules";
import GamesHistoryView from "./containers/GamesHistoryView/GamesHistoryView";

function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <StoreProvider store={store}>
            <Route path="/game">
              <GameView />
            </Route>
            <Route path="/name_setup">
              <NameSetup />
            </Route>
            <Route path="/custom_rules">
              <CustomRules />
            </Route>
            <Route path="/games_history">
              <GamesHistoryView />
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
