import React, { useState } from 'react'
import { styled, css } from 'styled-components'
import { GiHamburgerMenu } from "react-icons/gi"
import { media } from '../../styles/MediaQueries';
import { Link } from "react-router-dom"




const StyledLink = styled(Link)`
text-decoration: none;
font-size:.9rem;
color:#fbfbfc ;

&:active{
  background: white;
  transform: skewX( -25deg);
  border-bottom:3px solid #ff6347;
}
  &:hover {
  color: #ff6347;
}`
const HamburgerMenu = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
  background: red;
  z-index: 5;

  ${media.tablet(css`
    display: flex;
    flex-direction: column;
  `)}
`;


const Hamburger = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };
  const HamburgerIcon = styled(GiHamburgerMenu)`
  `

  return (
    <>
      <HamburgerIcon
        className={isOpen ? 'change' : ''}
        onClick={toggleMenu}
      />
      <HamburgerMenu isOpen={isOpen}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/smartphones">Smart Phones</StyledLink>
        <StyledLink to="/smartwatches">Smart watches</StyledLink>
        <StyledLink to="/laptops">PC and Laptops</StyledLink>
        <StyledLink to="/electronicAppliances">Home Appliances</StyledLink>
      </HamburgerMenu>
    </>
  )
}

export default Hamburger