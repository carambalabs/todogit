import React from "react"
import color from "../../style/color"

const style = {
  backgroundColor: color.github.blue,
  flex: 1
}

export default class MainContainer extends React.Component {
  render() {
    return (
      <div style={style}>
        MainContainer
      </div>
    )
  }
}