import React from "react"
import { Link } from "gatsby"
import _ from "lodash.throttle"
import logo from "../images/Marsh-logo.png"
import DrawerToggleButton from "./DrawerToggleButton"

import "../styles/Toolbar.scss"

const toolbar = props => {
  const toggleHandler = () => {
    if (typeof window !== "undefined") {
      const button = document.querySelector("button")

      button.classList.toggle("active")
    }
  }

  // Nav opacity on scroll - throttled w/ lodash
  try {
    window.addEventListener(
      "scroll",
      _(() => {
        if (window.scrollY > 80) {
          document.querySelector(".toolbar").style.opacity = 0.8
        } else {
          document.querySelector(".toolbar").style.opacity = 1
        }
      }, 300)
    )
  } catch (err) {
    console.log("error message: ", err)
  }

  return (
    <div className="toolbar">
      <nav className="toolbar__navigation">
        <div className="toolbar__logo">
          <Link to="/">
            <img src={logo} className="logo" alt="TA Marsh Roofing"></img>
          </Link>
        </div>
        <div className="spacer"></div>
        <div className="toolbar__navigation-items">
          <ul>
            <li>
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" activeClassName="active">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" activeClassName="active">
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                activeClassName="active"
                className="contact-btn"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div
          className="toolbar__toggle"
          onClick={toggleHandler}
          onKeyDown={toggleHandler}
        >
          <DrawerToggleButton click={props.click} />
        </div>
      </nav>
    </div>
  )
}

export default toolbar
