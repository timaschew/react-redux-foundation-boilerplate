import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

class PageNotFound extends Component {

  render() {
    return (
      <div>
        <h3>Page not found</h3>
        <div>The page "<strong>{this.props.url}</strong>" does not exist.</div>
      </div>
    )
  }
}

PageNotFound.propTypes = {
  url: PropTypes.string.isRequired
}

function mapStateToProps(state) {
  return {
    url: state.routing.location.pathname
  }
}

export default connect(mapStateToProps, {
})(PageNotFound)
