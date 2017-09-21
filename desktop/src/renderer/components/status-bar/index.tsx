import React from "react"
import { Colors } from "@blueprintjs/core"

const StatusBar = (props: object): JSX.Element => {
  return <div style={{
    flex: 1,
    maxHeight: 24,
    WebkitAppRegion: "drag",
    alignSelf: "stretch",
    backgroundColor: Colors.DARK_GRAY3
  }}/>
}
export default StatusBar