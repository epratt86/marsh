import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "../styles/Testimonials.scss"

const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <section className="testimonials">
      <div className="container">
        <h4>Testimonials</h4>
        <Slider {...settings}>
          <div>
            <blockquote>
              <p>
                "Our office has had the opportunity of working with TA Marsh
                Roofing over the past 20 years. Their expertise in the roofing
                and construction industries, along with the quality of their
                litigation expert services has been an invaluable asset to our
                consulting team. It is always a pleasure working with TA Marsh
                Roofing and their staff and we look forward to continuing our
                mutually beneficial working relationship."
              </p>
              <footer>
                Rober Burnett Perry - <cite>Perry Consulting Group, INC</cite>
              </footer>
            </blockquote>
          </div>
          <div>
            <blockquote>
              <p>
                "My firm and I have worked with TA Marsh Roofing for over 23
                years. Collaborations have ranged from our involvement as the
                architects on reconstruction projects installed by TA Marsh
                Roofing to consultants for litigation - as team members or in
                adversarial positions. Capabilities in the roofing and
                construction industries and skill as litigation experts have
                made TA Marsh a valuable member of the consulting team in either
                of those functions. I would recommend their services to anyone
                in need of roofing or consulting services."
              </p>
              <footer>
                Bob Carroll - <cite>AIA</cite>
              </footer>
            </blockquote>
          </div>
          <div>
            <blockquote>
              <p>
                "TA Marsh Roofing has provided a large range of roofing services
                for the Julian Union School Districts for over 26 years. They
                have provided assistance to our architects as far as optional
                products, specifications and detailed information for our
                roofing and construction needs. Their work was completed on time
                and has always exceeded our expectations. Additionally, when
                needed for emergency repairs, Tim and his crew have responded
                immediately. Thanks Tim and Greg for all your hard work and
                continued assistance."
              </p>
              <footer>
                Kevin Ogden - <cite>Superintendent</cite>
              </footer>
            </blockquote>
          </div>
        </Slider>
      </div>{" "}
    </section>
  )
}

export default Testimonials
