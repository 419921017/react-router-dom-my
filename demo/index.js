import React, {Component} from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "./../lib";
// import { HashRouter as Router, Route } from "react-router-dom";
import App from './app';

class Home extends Component {
  render() {
    return <div>Home</div>
  }
}
class Info extends Component {
  render() {
    return <div>Info</div>
  }
}
class Context extends Component {
  render() {
    return <div>Context</div>
  }
}

ReactDOM.render(
  <Router>
    <App>
      <Route path={"/home"} component={Home}>Home</Route>
      <Route path={"/info"} component={Info}>Info</Route>
      <Route path={"/context"} component={Context}>context</Route>
    </App>
  </Router>,
  document.querySelector("#app")
);
