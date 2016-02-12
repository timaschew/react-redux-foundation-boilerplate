import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

export default class Dashboard extends Component {

  renderCalout(data) {
    const refName = `callout-${data.id}`
    return (
      <div className={"callout "+data.type} ref={refName} key={refName}>
        <h5>{data.header}</h5>
        <p>{data.message}</p>
        <button className="close-button" aria-label="Dismiss alert" type="button" onClick={() => {
          const elem = ReactDOM.findDOMNode(this.refs[refName])
          $(elem).fadeOut().trigger('closed.zf')
          // trigger action after fade transition finished
          setTimeout(() => {
            this.props.removeCallout(data.id)
          }, 500)
        }}>
        <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }

  render() {
    const calloutElements = this.props.callouts.map((data) => {
      return this.renderCalout(data);
    })
    return (
      <div className="dashboard">
      <h3><i className="fa fa-4 fa-comments"></i> Notifications</h3>
      {[...calloutElements]}
      </div>
    )
  }
}

Dashboard.propTypes = {
  callouts: PropTypes.array.isRequired,
  removeCallout: PropTypes.func.isRequired
}
