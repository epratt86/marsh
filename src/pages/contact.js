import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import StyledHero from "../components/StyledHero"
import Form from "../components/form"

import "../styles/contact.scss"

const ContactPage = () => (
  <Layout>
    <SEO
      title="Contact"
      description="Please use our form to get in touch with a roofing professional, or give us a call at 619-669-1600"
    />
    <section className="contact">
      <StyledHero>
        <h1 className="page-title">Contact Us</h1>
      </StyledHero>
      <div className="content">
        <div className="container">
          <h4 className="display">Get In Touch</h4>
          <div className="contact-header">
            <p>
              Have a leaky roof or in need of a contractor? Please use the form
              to get in touch with a professional. Request your free initial
              consultation! Or, give us a call at&nbsp;
              <a
                href="tel:619-669-1600"
                style={{ textDecoration: "none", color: "#ff9800" }}
              >
                619 669 1600
              </a>
              .
            </p>
          </div>
          <div className="row">
            <div className="contact-form">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default ContactPage
