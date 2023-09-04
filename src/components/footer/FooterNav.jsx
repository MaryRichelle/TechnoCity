import React from 'react'
import {styled ,css} from 'styled-components'
import { Link } from "react-router-dom";
import {media} from "../../styles/MediaQueries"

const NavBar = styled.div`
background:#232222;  
color:#fbfbfc ;
display: flex;
justify-content: space-between ;
align-items:center;
height:5rem;
`
const LinksContainer = styled.ul`
display: flex;
justify-content: center;
align-items:center;
color:#fbfbfc ;
${media.tablet(css`
display:none;
`)}
`

const StyledLink = styled(Link)`
text-decoration: none;
font-size:1rem;
padding: 1rem;
color:#fbfbfc ;
 &:hover {
  color: tomato;
}
`
const Brand = styled(Link)`
font-size: 2rem;
text-decoration: none;
color:#fff ;
font-weight: 800;
font-size: 2rem;
line-height: 24px;

`

function Nav() {

  return (

    <NavBar>
      <Brand to="/">TechoCity</Brand>
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