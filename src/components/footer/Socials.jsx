import React from 'react'
import { styled } from 'styled-components'
import { AiFillTwitterCircle } from "react-icons/ai"
import { FaFacebook, FaInstagramSquare } from "react-icons/fa"

const Container = styled.footer`
display:flex;
justify-content:space-between;
align-items:center;
background: inherit;
color: #d3d2d2;
gap:0.5rem;`
const SocialLinks = styled.a`
text-decoration: none;
color: #d3d2d2;

 &:hover {
  color: tomato;
}
`
function Socials() {
  return (
    <Container>

      <SocialLinks target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/"><FaFacebook size={30} /></SocialLinks>
      <SocialLinks target="_blank" rel="noreferrer noopener" href="https://twitter.com/"> <AiFillTwitterCircle size={30} /></SocialLinks>
      <SocialLinks target="_blank" rel="noreferrer noopener" href="https://instagram.com/?lang=en">< FaInstagramSquare size={30} /></SocialLinks >


    </Container>
  )
}

export default Socials