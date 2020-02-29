import React from "react"
import Fade from "react-reveal/Fade"
import { FaHandshake, FaHome, FaHammer } from "react-icons/fa"

import "../styles/overview.scss"

const overview = () => {
  return (
    <section className="overview">
      <div className="container">
        <Fade bottom>
          <h2>Welcome to TA Marsh Roofing</h2>
        </Fade>
        <div className="animate-in">
          <div>
            <Fade>
              <FaHandshake size={70} className="icon" />
              <h3>Trusted Professionals</h3>
              <p>
                Is your home suffering from a leaking roof or are most of the
                shingles badly worn or damaged? You are in urgent need of
                experienced and reliable roof repairs. TA Marsh Roofing has
                clear contracts and performs reliable and affordable roofing
                repairs for all residents of the San Diego, CA area.
              </p>
            </Fade>
          </div>
          <div>
            <Fade>
              <FaHome size={70} className="icon" />
              <h3>Results You Can Rely On</h3>
              <p>
                An easy choice for any respectful & reputable roofing needs. Our
                roofing contractors are well trained and prepared to meet all of
                your expectations and requirements. With our company you will
                spend less than you think and the final results will be more
                than desirable for you.
              </p>
            </Fade>
          </div>
          <div>
            <Fade>
              <FaHammer size={70} className="icon" />
              <h3>Quality Guaranteed</h3>
              <p>
                We maintain a staff of skilled roofers, sheet metal, carpenters
                and inspectors for construction defect and non litigation
                inspections. We provide services for Commercial, Industrial and
                Residential projects. Our areas of service include California,
                Arizona and Nevada.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  )
}

export default overview
