import React from "react"
import { Link } from "gatsby"
import { FaArrowRight } from "react-icons/fa"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Overview from "../components/overview"
import Testimonials from "../components/Testimonials"

import "../styles/index.scss"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      description="TA Marsh offers roofing services of all types and sizes. Whether you need a professional to roof, re-roof, a general contractor or even an expert witness, TA Marsh provides a weath of knowlege and experience."
    />
    <main className="home">
      <section className="landing">
        <div className="container">
          <div className="row">
            <div className="left">
              <h1 className="headline">
                Professional Roofing Services San Diego has come to rely upon
              </h1>
              <h4>
                Count on our decades of experience as a Roofing, General and
                Prime Contractor as well as Forensic Consultant/Expert Witness
                provides a wealth of knowledge to assist you in your roofing
                construction, consulting projects or cases.
              </h4>
              <h5>
                Our intention is to provide you with a pleasant effortless
                experience for your project or case. We maintain a staff of
                skilled roofers, sheet metal experts, carpenters and inspectors
                for construction defect and non litigation inspections.
              </h5>
              <br />
              <Link to="/contact" className="btn-secondary">
                Find Out More <FaArrowRight className="react-icons" />
              </Link>
            </div>
            <div className="right">
              <article className="consultation">
                <div className="intro">
                  <p>We offer a FREE initial consultaiton</p>
                  <p>Please fill out the form to find out how</p>
                </div>

                <form
                  name="initial-consultation"
                  method="POST"
                  action="/success"
                  data-netlify="true"
                >
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      className="text-field"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      name="email"
                      className="text-field"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Phone Number"
                      name="phone"
                      className="text-field"
                      required
                    />
                    <button type="submit" className="btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </article>
            </div>
          </div>
        </div>
      </section>
      <Overview />
      <Testimonials />
    </main>
  </Layout>
)

export default IndexPage
