import React, { useContext } from 'react'
import { styled, css } from 'styled-components'
import { Link } from "react-router-dom"
import { OffersData } from "../context/OffersContext";
import { OfferTextKeyframes } from "../styles/Keyframes";
import { media } from '../styles/MediaQueries';

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
justify-content: space-around;
align-items:center;
color:#fbfbfc ;
column-gap :1rem;
 ${media.desktopMd(css`
column-gap :2rem;
  `)}
`

const StyledLink = styled(Link)`
text-decoration: none;
font-size:.9rem;
// padding: 1rem;
color:#fbfbfc ;

&:active{
  background: white;
  transform: skewX( -25deg);
  border-bottom:3px solid #ff6347;
}
  &:hover {
  color: #ff6347;
}
 ${media.desktopMd(css`
font-size:1.2rem;
  `)}
`

const OffersText = styled.p`
width: auto;
animation:${OfferTextKeyframes} 7s linear infinite;
`


function Nav() {
  const { offer } = useContext(OffersData);
  return (

    <NavBar>
      <OffersText>Receive a 5% discount when purchasing 3 products  {offer}</OffersText>
      <LinksContainer>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/smartphones">Smart Phones</StyledLink>
        <StyledLink to="/smartwatches">Smart watches</StyledLink>
        <StyledLink to="/laptops">PC and Laptops</StyledLink>
        <StyledLink to="/electronicAppliances">Home Appliances</StyledLink>
      </LinksContainer>

    </NavBar>
  )
}

export default Nav