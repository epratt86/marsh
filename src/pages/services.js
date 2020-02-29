import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
import StyledHero from "../components/StyledHero"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "../styles/services.scss"

const ServicesPage = () => {
  const data = useStaticQuery(graphql`
    {
      sheetMetal: file(relativePath: { eq: "sheet-metal.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      tiledRoof: file(relativePath: { eq: "tiled-roof.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      notePad: file(relativePath: { eq: "note-pad.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      legal: file(relativePath: { eq: "legal.jpg" }) {
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
        title="Services"
        description="We offer a variety of services to fit your needs. We specialize in roofing, re-roofing, sheet metal roofing and even forensic consultations"
      />
      <section className="services">
        <StyledHero>
          <h1 className="page-title">Services Offered</h1>
        </StyledHero>
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="card">
                <Fade>
                  <h4 className="display">Roofing System &amp; Service</h4>
                  <ul className="list">
                    <li>Composition and Dimensional Shingles</li>
                    <li>Tile, Clay and Concrete</li>
                    <li>Power Washing of Tile Roof Systems</li>
                    <li>Low Slope Roofs</li>
                    <li>Build Up Roof (BUR) and Atactic Polypropylene (APP)</li>
                    <li>Single Ply Systems</li>
                    <li>Architectural Sheet Metal Roof Systems</li>
                    <li>Liquid applied systems</li>
                    <li>
                      Title 24 compliant reflective coating, ventilation and
                      accessories
                    </li>
                    <li>Restructing of Roof Systems</li>
                    <li>
                      Investigations, testing, repar solutions and
                      recomendations
                    </li>
                  </ul>
                </Fade>
              </div>

              <div className="img">
                <Fade>
                  <Img
                    fluid={data.tiledRoof.childImageSharp.fluid}
                    alt="Tiled roof"
                  />
                </Fade>
              </div>
            </div>
            <div className="row">
              <div className="img">
                <Fade>
                  <Img
                    fluid={data.sheetMetal.childImageSharp.fluid}
                    alt="Sheet metal roof"
                  />
                </Fade>
              </div>
              <div className="card">
                <Fade>
                  <h4 className="display">
                    Commercial, Residential &amp; Industrial Roofing and
                    Re-roofing
                  </h4>

                  <ul className="list">
                    <li>Removal of existing roof and accessories</li>
                    <li>
                      Repairs or replacement of sheeting, framing, fascia and
                      framing members
                    </li>
                    <li>Water proofing and Deck Systems</li>
                    <li>Sheet metal</li>
                    <li>Gutter systems</li>
                    <li>Skylights (interior &amp; exterior)</li>
                    <li>
                      Solar systems for both photovoltaic and water systems
                    </li>
                    <li>Attic ventilation and power ventilation</li>
                  </ul>
                </Fade>
              </div>
            </div>
            <div className="row">
              <div className="card">
                <Fade>
                  <h4 className="display">General Contracting</h4>

                  <ul className="list">
                    <li>Framing, sheeting, and sub-strait modifications</li>
                    <li>Insulation</li>
                    <li>Skylight and Solar Tube installations</li>
                    <li>Painting</li>
                    <li>Exterior building envelope repairs and solutions</li>
                    <li>
                      Air Conditiong unit removal, reinstallation and new A/C
                      installations (no A/C repair)
                    </li>
                    <li>
                      Solar panel &amp; system removal, reinstallation and new
                      installation
                    </li>
                    <li>Carpentry</li>
                    <li>Demolition</li>
                  </ul>
                </Fade>
              </div>

              <div className="img">
                <Fade>
                  <Img
                    fluid={data.notePad.childImageSharp.fluid}
                    alt="design plans"
                  />
                </Fade>
              </div>
            </div>
            <div className="row">
              <div className="img">
                <Fade>
                  <Img
                    fluid={data.legal.childImageSharp.fluid}
                    alt="design plans"
                  />
                </Fade>
              </div>
              <div className="card">
                <Fade>
                  <h4 className="display">Legal Consultation</h4>

                  <ul className="list">
                    <li>Expert witness testimony</li>
                    <li>Trial testimony, mock ups and exhibits</li>
                    <li>
                      Construction defects, site inspections, destructive
                      testing
                    </li>
                    <li>Insurance claim damage analysis</li>
                    <li>Destructive testing and site inspections</li>
                    <li>Third party neutral expert testimony</li>
                    <li>Personal injury claims</li>
                  </ul>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ServicesPage
