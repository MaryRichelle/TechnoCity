import React, { useContext } from 'react'
import { styled, css } from 'styled-components'
import { Link } from "react-router-dom"
import { CartContext } from '../../context/CartContext';
import { FaShoppingCart } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"
import { RxAvatar } from "react-icons/rx"
import { media } from '../../styles/MediaQueries';

const NavBar = styled.div`
background: #bfbfbf;
color:#fbfbfc ;
display: flex;
justify-content: space-between;
align-items:center;
padding-inline: 8rem;
height:4rem;
position:sticky;
top:5rem;
z-index:1;
 ${media.tablet(css`
 padding-inline: 0;
 `)}
`

const StyledLink = styled(Link)`
text-decoration: none;
font-size:1.5rem;
color:#fbfbfc ;
test-align:center;
`
const Brand = styled(Link)`
font-size: 2rem;
text-decoration: none;
color:#000 ;
font-weight: 800;
font-size: 2rem;
line-height: 24px;
${media.mobile(css`
 padding-inline: 0;
 font-size: 1rem;
 `)}

`

const RightSide = styled.div`
width:60%;
display: flex;
justify-content:flex-end;
align-items:center;
gap:5px;
${media.mobileSm(css`
width:auto;
 font-size: 1rem;
 `)}
`
const SearchContainer = styled.div`
width:60%;
background: inherit;
display: flex;
justify-content:space-between;
border-radius: 4px;
border: 1px solid #fff;
align-items: center;

`
const SearchInput = styled.input`
flex-grow:1;
background: inherit;
border: none;
padding: 0.5rem;
color: #fff;
&:focus{
border: none;
outline: none;

}

`
const SearchIcon = styled(FaSearch)`
margin-inline:4px;
cursor:pointer;
&:hover{
color: #ff6347;
}
`
const ShoppingCartSpan = styled.span`
display: inline-block;
font-size: 0.8rem;
font-weight: bold;
background: tomato;
border-radius: 50%;
width: 25px;
height:25px;
text-align:center;
transform: translateY(-25px);
${media.mobile(css`
transform: translate(-15px,-20px);

 `)}

`;
function SubNav() {
  const { cart } = useContext(CartContext)

  return (

    <NavBar>
      <Brand to="/">TechoCity</Brand>
      <RightSide>
        <SearchContainer>
          <SearchInput placeholder="Search" />
          <SearchIcon />
        </SearchContainer>
        <RxAvatar size={30} />
        <StyledLink to="/cart"> <FaShoppingCart size={30} />
          <ShoppingCartSpan>
            {cart.length}
          </ShoppingCartSpan>
        </StyledLink>

      </RightSide>
    </NavBar>
  )
}

export default SubNav