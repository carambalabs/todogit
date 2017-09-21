import * as React from "react"
import StatusBar from "./status-bar"
import HomeContainer from "./home"
import LoginContainer from "./login"
import { Route } from "react-router-dom"

// Forces webpack to add those styles to the index.html
require("@blueprintjs/core/dist/blueprint.css")
require("normalize.css/normalize.css")

export class App extends React.Component {
  public render() {
    return (
      <div style={{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}>
        <StatusBar/>
        <Route path="/" component={HomeContainer}/>
        <Route path="/login" component={LoginContainer}/>
      </div>
    )
  }
}
