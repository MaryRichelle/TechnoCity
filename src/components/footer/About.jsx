import React from 'react'
import { styled, css } from 'styled-components'
import { media } from "../styles/MediaQueries"


const Container = styled.section`
flex-shrink: 2;
display : flex;
flex-direction: column;
justify-content: space-around;
align-items: start;
`
const AboutText = styled.p`
border-block-end: 1px solid #d3d2d2;
padding-block-end: 2rem;
 ${media.desktopMd(css`
border:none;
  `)}


`
function About() {
  return (
    <Container>
      <h2>What we Are</h2>
      <AboutText>our one-stop destination for the latest and greatest in laptops, mobile devices, and cutting-edge electronics. We're more than just an online store; we're your tech-savvy companions on the journey to a connected world.


      </AboutText>
    </Container>
  )
}

export default About