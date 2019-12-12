import React, { Component } from 'react';
import PropTypes from 'prop-types'

class HashRouter extends Component {
  static childContextTypes = {
    location: PropTypes.object,
    history: PropTypes.object
  }
  constructor(props) {
    super(props)
    this.state = {
      location: {
        pathname: window.location.hash.slice(1) || '/',
      },
    }
  }
  getChildContext() {
    return {
      location: this.state.location,
      history: {
        push (hash){
          window.location.hash = hash
        }
      }
    }
  }
  componentDidMount() {
    const render = () => {
      this.setState({
        location: {
          pathname: window.location.hash.slice(1) || '/'
        }
      })
    }
    window.addEventListener('hashchange', render)
  }
  render() {
    return this.props.children ? React.Children.only(this.props.children) : null
  }
}

export default HashRouter;