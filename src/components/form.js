import React from "react"

import "../styles/form.scss"

const ContactForm = () => {
  return (
    <form
      name="contact"
      method="POST"
      action="/success"
      data-netlify="true"
      className="form"
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <label>
          dont fill this out <input name="bot-field" />
        </label>
      </p>
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
