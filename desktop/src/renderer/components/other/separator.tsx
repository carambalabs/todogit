import React from "react"
import color from "../../style/color"

interface SeparatorProps {
  thickness: string,
  type: "vertical" | "horizontal"
}

const Separator = (props: SeparatorProps): JSX.Element =>  {
  if (props.type === "vertical") {
    return <div style={{
      width: props.thickness,
      backgroundColor: color.todogit.gray
    }}/>
  } else {
    return <div style={{
      height: props.thickness,
      backgroundColor: color.todogit.gray
    }}/>
  }
}

const VerticalSeparator = (props: {thickness: string}): JSX.Element => {
  return Separator({
    type: "vertical",
    thickness: props.thickness
  })
}

const HorizontalSeparator = (props: {thickness: string}): JSX.Element => {
  return Separator({
    type: "vertical",
    thickness: props.thickness
  })
}

export { VerticalSeparator, HorizontalSeparator }