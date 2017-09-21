import React from "react"

export default class ToolbarContainer extends React.Component {

  render() {
    return (
      <nav className="pt-navbar pt-dark">
        <div className="pt-navbar-group pt-align-left">
          <div className="pt-navbar-heading">Todogit</div>
          <input className="pt-input" placeholder="Search on GitHub..." type="text" />
        </div>
        <div className="pt-navbar-group pt-align-right">
          <span className="pt-navbar-divider"></span>
          <button className="pt-button pt-minimal pt-icon-notifications"></button>
          <button className="pt-button pt-minimal pt-icon-cog"></button>
        </div>
      </nav>
    )
  }

}
