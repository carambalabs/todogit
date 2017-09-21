import * as React from "react"
import color from "../../style/color"
import Header from "./header"

const style: React.CSSProperties = {
  backgroundColor: color.todogit.lightGray,
  width: "250px",
  display: "flex",
  flexDirection: "column"
}

export default class SideMenuContainer extends React.Component {
  render() {
    return (
      <div style={style}>
        <Header avatarUrl=""/>
      </div>
    )
  }
}