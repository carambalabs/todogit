import React from "react"
import StatusBar from "../status-bar"
import { Spinner } from "@blueprintjs/core"

interface LoadingProps {
  title: string
}

const Loading = (props: LoadingProps): JSX.Element =>  {
  return (
    <div style={{
      flexDirection: "column",
      display: "flex",
      flex: 1,
      alignItems: "center",
      justifyContent: "space-between"
      }}>
      <StatusBar/>
      <div style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center"}}>
        <Spinner/>
        {props.title}
      </div>
    </div>
  )
}
export default Loading