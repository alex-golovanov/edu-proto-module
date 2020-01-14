import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Module from "./Module/";
import Task from "./Task/";

import './normalize.css';
import './styles.css';
const Index = () => <div>Index</div>;

const App = () => (
  <Router>
      <div className="app">
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/module/:step?" component={Module} />
          <Route path="/task" component={Task} />
        </Switch>
      </div>
  </Router>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
