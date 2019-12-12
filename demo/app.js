import React, { Component } from "react";
import { Link } from "./../lib";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>
          <Link to={'/home'}>home</Link>
          <br/>
          <Link to={'/info'}>info</Link>
          <br/>
          <Link to={'/context'}>context</Link>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>

        {this.props.children}
      </div>
    );
  }
}

export default App;
