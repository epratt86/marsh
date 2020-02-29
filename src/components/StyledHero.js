import React from "react"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"

// query to grab default image incase none is provided in props
const getDefault = graphql`
  query {
    file(relativePath: { eq: "roof-angle.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 4160, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const StyledHero = ({ img, className, children, home }) => {
  const data = useStaticQuery(getDefault)
  return (
    <BackgroundImage
      className={className}
      fluid={img || data.file.childImageSharp.fluid}
      home={home}
    >
      {children}
    </BackgroundImage>
  )
}

export default styled(StyledHero)`
  min-height: 40vh;
  background: linear-gradient(rgba(30, 60, 78, 0.2), rgba(0, 0, 0, 0.2));
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
