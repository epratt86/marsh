/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Toolbar from "./Toolbar"
import SideDrawer from "./SideDrawer"
import Header from "./header"
import Footer from "./Footer"
import Backdrop from "./Backdrop"
import "../styles/layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const [sideDrawerOpen, setSideDrawerOpen] = useState(false)

  const openHandler = () => {
    if (!sideDrawerOpen) {
      setSideDrawerOpen(true)
    } else {
      setSideDrawerOpen(false)
    }
  }

  const backdropClickHandler = () => {
    setSideDrawerOpen(false)
  }

  let sideDrawer
  let backdrop
  if (sideDrawerOpen) {
    sideDrawer = <SideDrawer />
    backdrop = <Backdrop click={backdropClickHandler} />
  }

  return (
    <div style={{ height: "100%" }}>
      <Toolbar click={openHandler} />
      {sideDrawer}
      {backdrop}
      <Header siteTitle={data.site.siteMetadata.title} />
      {children}
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
