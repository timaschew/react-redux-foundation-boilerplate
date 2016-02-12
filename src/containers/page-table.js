import React, { Component } from 'react'
import { connect } from 'react-redux'

import Table from '../components/table'

class PageTable extends Component {

  render() {
    return (
      <Table />
    )
  }

}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, {
})(PageTable)
