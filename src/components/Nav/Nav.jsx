import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"


const NavBar = styled.div`
 background:#232222;  

color:#fbfbfc ;
display: flex;
justify-content: space-around ;
align-items:center;
padding-inline: 5rem;
height:5rem;
`
const LinksContainer = styled.ul`
display: flex;
justify-content: center;
align-items:center;
color:#fbfbfc ;
`

const StyledLink = styled(Link)`
text-decoration: none;
font-size:1.2rem;
padding: 1rem;
color:#fbfbfc ;

&:active{
  background: white;
 transform: skewX( -25deg);
  border-bottom:3px solid tomato;
}
  &:hover {
  color: tomato;
}
`
const OffersText = styled.p`
font-family: 'Poppins', sans-serif;
`


function Nav() {

  return (

    <NavBar>
      <OffersText> free shipping on your first order</OffersText>
      <LinksContainer>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/smartphones">Smart Phones</StyledLink>
        <StyledLink to="/smartwatches">Smart watches</StyledLink>
        <StyledLink to="/laptops">Laptops</StyledLink>
        <StyledLink to="/electronicAppliances">Electronic Appliances</StyledLink>
      </LinksContainer>

    </NavBar>
  )
}

export default Nav