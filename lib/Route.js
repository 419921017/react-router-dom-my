import React, { Component } from "react";
import PropTypes from "prop-types";

class Route extends Component {
  static contextTypes = {
    location: PropTypes.object
  };

  render() {
    const { path, component: Component } = this.props;
    const {
      location: { pathname }
    } = this.context;

    console.log(path, location, pathname)
    if (path === pathname || pathname.startsWith(path)) {
      return <Component location={location}/>
    }
    return null
  }
}

export default Route;
