import React from "react"
import { Link } from "gatsby"
import StyledHero from "../components/StyledHero"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/about.scss"

const SuccessPage = () => {
  return (
    <Layout>
      <SEO title="Success" />
      <section className="about">
        <StyledHero>
          <h1 className="page-title">Success</h1>
        </StyledHero>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2 className="display">Message Sent</h2>
                <p>
                  Thank you for your message. Someone should be in touch with
                  you soon. Please return <Link to="/">Home</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default SuccessPage
