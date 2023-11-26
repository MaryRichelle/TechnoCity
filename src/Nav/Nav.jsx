import React, { useContext, useState } from 'react'
import { styled, css } from 'styled-components'
import { Link } from "react-router-dom"
import { OffersData } from "../context/OffersContext";
import { OfferTextKeyframes } from "../styles/Keyframes";
import { OfferTextOnTablet } from "../styles/Keyframes";
import { media } from '../styles/MediaQueries';
import { GiHamburgerMenu } from "react-icons/gi"

const NavBar = styled.nav`
width:100%;
 background:#232222; 
color:var(--light-gray) ;
display: flex;
flex-direction:column;
justify-content: space-around ;
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
color:var(--light-gray) ;
column-gap :1rem;
background:inherit;
${media.desktopMd(css`
column-gap :2rem;
align-self: self-end;

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
transform: ${({ open }) => open ? 'translateX(0%)' : 'translateX(100%)'};
padding-top: 3.5rem;
transition: transform 0.3s ease-in-out;
 `)}


`

const   Li = styled.li`
list-style:none;

`
const StyledLink = styled(Link)`
text-decoration: none;
font-size:.9rem;
color:#fbfbfc ;
&:active{
  background: white;
}
  &:hover {
  color: var(--hover-color-tomato);
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
width:max-content;
animation:${OfferTextKeyframes} 5s linear 0s infinite;
${media.tablet(css`
font-size:12px;
animation:none;
`)}
${media.tabletLg(css`
animation:${OfferTextOnTablet} 5s linear 0s infinite;
`)}
`
const HamburgerIcon = styled(GiHamburgerMenu)`
display:none;
background:inherit;
font-size:3rem;
cursor:pointer;
z-index:6;
align-self: self-end;

${media.tablet(css`
display:block; `)}

`

function Nav() {
  const offer = useContext(OffersData);
  const [open, setOpen] = useState(false);
  return (
    <NavBar>
      <OffersText>
        {offer}
      </OffersText>
      <LinksContainer open={open}>
        <Li>
          <StyledLink to="/">Home</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/smartphones">Smart Phones</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/smartwatches">Smart watches</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/laptops">PC and Laptops</StyledLink>
        </Li>
        <Li>
          <StyledLink to="/home-appliances">Home Appliances</StyledLink>
        </Li>
      </LinksContainer>
      <HamburgerIcon open={open} onClick={() => setOpen(!open)} />
    </NavBar>
  );
}

export default Nav;






