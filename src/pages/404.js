import React from "react"
import { Link } from "gatsby"
import StyledHero from "../components/StyledHero"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/about.scss"

const NotFoundPage = () => {
  return (
    <Layout>
      <SEO title="Page Not Found" />
      <section className="about">
        <StyledHero>
          <h1 className="page-title">Page Not Found</h1>
        </StyledHero>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="display">Whoops!</h2>
                <p>
                  Sorry but the page you were looking for cannot be found.
                  Please return <Link to="/">Home</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default NotFoundPage
