import React, { Component } from 'react';
import PropTyeps from 'prop-types';
class Link extends Component {
  static contextTypes = {
    history: PropTyeps.object
  }
  render() {
  return <a onClick={() => this.context.history.push(this.props.to)}>{this.props.children}</a>
  }
}

export default Link;