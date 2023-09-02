import React from 'react'
import { styled, css } from 'styled-components'
import About from "./About"
import Contact from "./Contact"
import NewsLetter from "./NewsLetter"
import { media } from '../../styles/MediaQueries';

const Container = styled.section`
  flex-grow: 2;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 4rem;
    flex-direction: column;

 
  ${media.desktopMd(css`
    flex-direction: row;

  `)}

  /* Apply mobile styles */
`;
function Middle() {
  return (
    <Container>
      <About />
      <NewsLetter />
      <Contact />
    </Container>
  )
}

export default Middle