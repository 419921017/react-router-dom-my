import React, { Component } from "react";
import PropTypes from "prop-types";
import { pathToRegexp } from "path-to-regexp";

class Switch extends Component {
  static contextTypes = {
    location: PropTypes.object
  };
  render() {
    const { pathname } = this.context.location;
    const { children } = this.props;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      const { path } = child;
      if (pathToRegexp(path, [], { end: false }).text(pathname)) {
        return child;
      }
    }
    return null;
  }
}

export default Switch;
