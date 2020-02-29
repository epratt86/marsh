import React from "react"
import { Link } from "gatsby"

import "../styles/SideDrawer.scss"
const sideDrawer = props => (
  <nav className="side-drawer">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </nav>
)

export default sideDrawer
