import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import {
  removeCallout
} from '../actions'

import Dashboard from '../components/dashboard'

class PageDashboard extends Component {

  render() {
    return (
      <Dashboard
        url={this.props.url}
        callouts={this.props.callouts}
        removeCallout={this.props.removeCallout}
      />
    )
  }
}

PageDashboard.propTypes = {
  url: PropTypes.string.isRequired,
  callouts: PropTypes.array.isRequired,
  removeCallout: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    url: state.routing.location.pathname,
    callouts: state.notifications.callouts
  }
}

export default connect(mapStateToProps, {
  removeCallout
})(PageDashboard)
