import React from "react"

import "../styles/Backdrop.scss"

const backdrop = props => (
  <div className="backdrop" onClick={props.click} onKeyDown={props.click}></div>
)

export default backdrop
