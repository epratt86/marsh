import React from "react"

import "../styles/form.scss"

const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      action="/success"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="form"
    >
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
      <input
        type="hidden"
        name="form-name"
        value="contact"
        className="text-field"
      />
      <textarea
        placeholder="My roof is in need of repair and I would like my initial consultation!"
        name="message"
        className="input-field"
        required
      />
      <button type="submit" className="btn-primary">
        Submit
      </button>
    </form>
  )
}

export default ContactForm
