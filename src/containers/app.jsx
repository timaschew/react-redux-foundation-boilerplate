import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Navigation from '../components/navigation'

import {
  createCallout
} from '../actions'

import '../styles/index.css'
import '../styles/foundation.scss'

// load jquery and foundation in the window scope
import 'script!jquery'
import 'script!what-input'
import 'script!foundation-sites'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // children are components which defined in the routes as children of App
    const { children } = this.props
    return (
      <div>
        <Navigation createCallout={this.props.createCallout} />
        <div className='row'>
          <div className='large-12 columns'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    $(document).foundation()
  }
}

App.propTypes = {
  // Injected by React Router
  children: PropTypes.node
}

function mapStateToProps(state) {
  return {
  }
}

export default connect(mapStateToProps, {
  createCallout
})(App)
