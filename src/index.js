import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Module from "./Module/Module";

import './normalize.css';
import './styles.css';
const About = () => <div>About</div>;

const App = () => (
  <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Module} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
