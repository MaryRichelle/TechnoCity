import React, { useState, useContext } from 'react';
import { styled, css } from 'styled-components'
import { CartContext } from '../../context/CartContext';
import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa"
import { media } from '../../styles/MediaQueries';

const StyledLink = styled(Link)`
text-decoration: none;
font-size:1.5rem;
color:#fbfbfc ;
test-align:center;
`
const ShoppingCartSpan = styled.span`
display: inline-block;
font-size: 0.8rem;
font-weight: bold;
background:var(--hover-color-tomato);
border-radius: 50%;
width: 25px;
height:25px;
text-align:center;
transform: translateY(-25px);
${media.mobile(css`
transform: translate(-15px,-20px);

 `)}

`;
const DropDownContainer = styled.div`
position: absolute;
top: 3rem;
 right: 0%;
  width: 10rem;
  height: fit-content; 
  z-index:987;
background:#f7f4f4; 
border: solid #ccc 3px; 
border-radius: 15px;
box-shadow: rgba(0, 0, 0, .4) 0px 6px 12px;
 padding: 1rem;
  display: flex; 
  flex-direction: column;
  justify-content: 
 space-between;
align-items: center; 
font-size:.8em;
color:#aaa;
transition: all ease-in-out .3s;
z-index:5;
&:hover{

 }
`
const ButtonCheckout = styled.button`
padding: 1rem 1.5rem;
margin: auto -1.5rem;
cursor: pointer;
outline:none !important;
border:solid transparent  1px;
background: #000;
color: #fff;
border-radius: 4px;
font-weight:bold;
`

const ShoppingCart = () => {
  const { cart } = useContext(CartContext)
  const [open, setOpen] = useState(false)
  const handleMouseEnter = () => {
    setOpen(true)
  }
  const handleMouseLeave = () => {
    setOpen(false)
  }
  return (
    <>
      <StyledLink to="/cart" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
        <FaShoppingCart size={30} />
        <ShoppingCartSpan>
        </ShoppingCartSpan>
      </StyledLink>
      {open && (
        <DropDownContainer >
          <p>You don't have any items yet </p>
          <ButtonCheckout>Check Out</ButtonCheckout>
        </DropDownContainer>
      )
      }
    </>
  )
}

export default ShoppingCart