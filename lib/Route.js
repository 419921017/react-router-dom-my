import React, { Component } from "react";
import PropTypes from "prop-types";
import { pathToRegexp } from "path-to-regexp";

class Route extends Component {
  static contextTypes = {
    location: PropTypes.object,
    history: PropTypes.object
  };

  constructor(props) {
    super(props);
    const { path } = props;
    this.keys = [];
    this.regexp = pathToRegexp(path, this.keys, { end: false });
    this.keys = this.keys.map(val => val.name);
    console.log("this.keys", this.keys);
    console.log("this.regexp", this.regexp);
  }

  render() {
    const { path, component: Component, render, children } = this.props;
    const { location, history } = this.context;
    const { pathname } = location;
    const result = pathname.match(this.regexp);

    let props = {
      location,
      history,
    }

    if (result) {
      const [url, ...values] = result;
      const match = {
        url,
        path,
        params: this.keys.reduce((memo, key, index) => {
          memo[key] = values[index];
          return memo;
        }, {})
      };

      props = {
        ...props,
        match
      };
      
      if (render) {
        return render(props);
      } else if (Component) {
        return <Component {...props} />;
      }
      return null;
    }
    if (children) {
      return children(props)
    }
    return null;
  }
}

export default Route;
