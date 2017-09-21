import { storiesOf } from "@kadira/storybook"
import React from "react"
import { App } from "../src/renderer/components/app"
import ToolbarContainer from "../src/renderer/components/toolbar"
import SideMenuContainer from "../src/renderer/components/side-menu"

storiesOf("Home", module)
.add("App", () => {
  return (
    <App></App>
  )
})

storiesOf("Toolbar", module)
  .add("Toolbar", () => {
    return (
      <ToolbarContainer/>
    )
  })

storiesOf("Side Menu", module)
  .add("SideMenu", () => {
    return (
      <SideMenuContainer/>
    )
  })