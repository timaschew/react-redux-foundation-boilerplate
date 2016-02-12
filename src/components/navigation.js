import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class Navigation extends Component {
  render() {
    const instance = this
    return (
      <div>
        <div className="title-bar" data-responsive-toggle="example-menu" data-hide-for="medium">
          <button className="menu-icon" type="button" data-toggle></button>
          <div className="title-bar-title">Menu</div>
        </div>

        <div className="top-bar" id="example-menu">
          <div className="top-bar-left">
            <ul className="dropdown menu" data-dropdown-menu ref={(elem) => {console.log(instance)}}>
              <li className="menu-text-name">
                <Link to='/' title="Dashboard"><i className="fa fa-th-large"></i></Link>
              </li>
              <li><Link to='/table'>Table</Link></li>
              <li><Link to='/some-not-existing-page'>Nowhere</Link></li>
              <li>
                <a href="javascript:;">More</a>
                <ul className="vertical menu" data-dropdown-menu>
                  <li><a href="https://github.com/reactjs/redux" target="_blank">Redux</a></li>
                  <li><a href="http://foundation.zurb.com/sites/docs/" target="_blank" >Foundation</a></li>
                </ul>
              </li>
              <li style={{width: '20px'}}></li>
              <li>
                <button className="button secondary" onClick={() => {
                  this.props.createCallout()
                }}>create a callout</button>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <ul className="menu">
              <li><input type="search" placeholder="Search" /></li>
              <li><button type="button" className="button">Find</button></li>
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

Navigation.propTypes = {
  createCallout: PropTypes.func.isRequired
}
