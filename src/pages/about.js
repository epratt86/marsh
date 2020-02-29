import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
import StyledHero from "../components/StyledHero"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/about.scss"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "design-plans.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO
        title="About"
        description="We have been roofing San Diego for over 36 years and counting. We specialize in roof repairs and sheet metal roofing."
      />
      <section className="about">
        <StyledHero>
          <h1 className="page-title">About Us</h1>
        </StyledHero>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col">
                <Fade bottom>
                  <h2 className="display">Who We Are</h2>
                </Fade>
                <p>
                  We specialize in re-roofing, repairs of all types and sheet
                  metal roof systems. TA Marsh Roofing is a roofing company
                  which has been operating in San Diego, CA for the last 36
                  years. We specialize in roof repairs and sheet metal roofing.
                  Throughout our years in business, we have built professional
                  standards of work. You don’t think about a new roof or
                  repairing the old until you have a leak or damage. Roof
                  repairs are something common in our daily work. If the time to
                  fix your roof has come, don’t hesitate to contact TA Marsh
                  Roofing. Our work includes inspecting your roof for leaks,
                  weak areas and broken shingles and roof repairs. You will save
                  more money if you call a professional roofer, instead of
                  trying to fix your roof by yourself. Unprofessional roof
                  repairs may cause more damage to your roof and that will cost
                  more money for sure.
                </p>
                <p>
                  An easy choice for any respectful & reputable roofing needs.
                  Our work includes a visual inspection to determine what
                  repairs or maintenance are required or if your roof is in need
                  of replacement. Our roofing contractors are well trained and
                  prepared to meet all of your expectations and requirements.
                  With our company you will spend less than you think and the
                  final results will be more than desirable for you. TA Marsh
                  Roofing works on commercial as well as residential roofing
                  projects with high standards of work. We provide the most
                  reliable results all over the San Diego, CA area. Don’t waste
                  your energy climbing on your roof to find the problem, we can
                  do it for you. Our roofers are quick, professional and kind.
                  They will find any leak or problem on your roof and resolve it
                  as soon as possible. After our visual assessment we will
                  provide you with a detailed estimate and cost for what scope
                  of work your roof requires.
                </p>
              </div>
              <div className="img">
                <Fade>
                  <Img
                    fluid={data.file.childImageSharp.fluid}
                    alt="design plans"
                  />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutPage
