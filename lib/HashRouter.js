import React, { Component } from "react";
import PropTypes from "prop-types";

class HashRouter extends Component {
  static childContextTypes = {
    location: PropTypes.object,
    history: PropTypes.object
  };
  constructor(props) {
    super(props);
    this.state = {
      location: {
        pathname: window.location.hash.slice(1) || "/"
      }
    };
  }
  getChildContext() {
    const that = this;
    return {
      location: this.state.location,
      history: {
        push(hash) {
          if (typeof hash === "object") {
            const { pathname, state } = hash;
            that.setState(
              { location: { ...that.state.location, state } },
              () => (window.location.hash = pathname)
            );
          } else {
            window.location.hash = hash;
          }
        }
      }
    };
  }
  componentDidMount() {
    const render = () => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1) || "/"
        }
      });
    };
    window.addEventListener("hashchange", render);
  }
  render() {
    return this.props.children
      ? React.Children.only(this.props.children)
      : null;
  }
}

export default HashRouter;
