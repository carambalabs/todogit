import React from "react"
import color from "../../style/color"

interface HeaderProps {
  avatarUrl: string
}

const style: React.CSSProperties = {
  backgroundColor: color.github.green,
  height: "200px"
}

const Header = (props: HeaderProps): JSX.Element => {
  return (
    <div style={style}>
      Avatar
    </div>
  )
}
export default Header