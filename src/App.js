import React from "react";
import HomePage from "./components/Home/HomePage";
import GeneratorPage from "./components/generator/GeneratorPage";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import ProviderComp from "./Store/Provide";

function App() {
  return (
    <ProviderComp>
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/generator">
            <GeneratorPage />
          </Route>
        </Switch>
      </Router>
    </ProviderComp>
  );
}

export default App;
