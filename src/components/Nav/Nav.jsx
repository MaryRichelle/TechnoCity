import React, { useContext, useState } from 'react'
import { styled, css } from 'styled-components'
import { Link } from "react-router-dom"
import { OffersData } from "../..//context/OffersContext";
import { OfferTextKeyframes } from "../../styles/Keyframes";
import { media } from '../../styles/MediaQueries';
import { GiHamburgerMenu } from "react-icons/gi"

const NavBar = styled.div`
 background:#232222; 
color:#fbfbfc ;
display: flex;
justify-content: space-around ;
align-items:center;
padding-inline: 5rem;
height:5rem;
position:sticky;
top:0;
z-index:2;
 ${media.mobile(css`
padding-inline: 0;
justify-content: space-between ;
  `)}
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
${media.tablet(css`
flex-flow: column nowrap;
position: fixed;
top: 0;
right: 0;
height: 50vh;
width: 300px;
 background:#232222; 
z-index:6;

transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
padding-top: 3.5rem;
transition: transform 0.3s ease-in-out;
 `)}


`

const StyledLink = styled(Link)`
text-decoration: none;
font-size:.9rem;
color:#fbfbfc ;

&:active{
  background: white;
  transform: skewX( -25deg);
}
  &:hover {
  color: #ff6347;
}
 ${media.desktopMd(css`
font-size:1.2rem;
  `)}
 ${media.tablet(css`
 width:80%;
 text-align:center;
padding:.5rem 1.5rem;  `)}

`



const OffersText = styled.p`
width: auto;
animation:${OfferTextKeyframes} 7s linear infinite;
${media.tablet(css`
width:100vw;
font-size:15px; `)}
`
const HamburgerIcon = styled(GiHamburgerMenu)`
display:none;
font-size:3rem;
cursor:pointer;
z-index:6;
${media.tablet(css`
display:block; `)}

`
const HamburgerMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  background: red;
  z-index: 5;

  ${media.tablet(css`
    display: flex;
    flex-direction: column;
  `)}
`;


function Nav() {
  const  offer  = useContext(OffersData);
  const [open, setOpen] = useState(false);


  return (
    <NavBar>
      <OffersText>
        {/* Receive a 5% discount when purchasing 3 products  */}
        {offer}
      </OffersText>
      <LinksContainer open={open}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/smartphones">Smart Phones</StyledLink>
        <StyledLink to="/smartwatches">Smart watches</StyledLink>
        <StyledLink to="/laptops">PC and Laptops</StyledLink>
        <StyledLink to="/electronicAppliances">Home Appliances</StyledLink>
      </LinksContainer>
      <HamburgerIcon open={open} onClick={() => setOpen(!open)} />
    </NavBar>
  );
}

export default Nav;






