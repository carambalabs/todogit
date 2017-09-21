import React from "react"
import ToolbarContainer from "../toolbar"
import SideMenuContainer from "../side-menu"
import MainContainer from "../main"
import { VerticalSeparator } from "../other/separator"

export default class HomeContainer extends React.Component {
  render() {
    return (
      <div style={{flex: 1, display: "flex", flexDirection: "column"}}>
        <ToolbarContainer/>
        <div style={{flex: 1, display: "flex", flexDirection: "row", alignItems: "stretch"}}>
            <SideMenuContainer/>
            <VerticalSeparator thickness="1px"/>
            <MainContainer/>
        </div>
      </div>
    )
  }
}