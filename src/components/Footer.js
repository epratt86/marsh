import React from "react"
import { Link } from "gatsby"

import "../styles/Footer.scss"

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="location">
            <p>Address: PO Box 925 </p>
            <p>Jamul, CA 91935</p>
            <p>
              Phone: <a href="tel:619-669-1600">(619) 669-1600</a>
            </p>
            <p>License: CA #440346</p>
            <p>AZ #150919</p>
            <p style={{ marginBottom: "4rem" }}>NV #0045850</p>
          </div>
        </div>
        <div className="copyright">
          <p>© {year} TA Marsh Roofing. All Rights Reserved</p>
          <a
            href="https://www.epratt.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            site by ePratt.net
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
