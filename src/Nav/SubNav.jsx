import React, { useContext, useState } from 'react'
import { styled, css } from 'styled-components'
import { Link } from "react-router-dom"
import { CartContext } from '../context/CartContext';
import { FaShoppingCart } from "react-icons/fa"
import { FaSearch } from "react-icons/fa"
import { RxAvatar } from "react-icons/rx"
import { media } from '../styles/MediaQueries';
import { useSearch } from '../context/SearchProvider'
import SearchResult from "./SearchResult"

const NavBar = styled.div`
width:100%;
background: var(--dark-gray);
color:#fff ;
display: flex;
justify-content: space-between;
align-items:center;
padding-inline: 10%;
height:4rem;
position:sticky;
top:5rem;
z-index:1;
 ${media.tablet(css`
 padding-inline: 0.3rem;

 `)}
 ${media.mobileXSM(css`
justify-content: center;

 `)}
`

const StyledLink = styled(Link)`
text-decoration: none;
font-size:1.5rem;
color:#fff ;
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
flex-basis:80%;
display: flex;
justify-content:flex-end;
align-items:center;
gap:5px;
${media.mobileSm(css`
  width:auto;
  font-size: 1rem;
  gap:0px;
align-items:start;

 `)}

`
const SearchContainer = styled.div`
background: inherit;
flex-grow:0.5;
display: flex;
justify-content:space-between;
align-items: center;
border-radius: 4px;
border: 1px solid #fff;
position:relative;
 ${media.mobileSm(css`
justify-content:flex-start;
flex-grow:0;

 `)}
`
const SearchInput = styled.input`
flex-grow:1;
background: inherit;
border: none;
padding: 0.5rem;
color: #fff;
&:focus{
border: none;
outline: none;}
 ${media.mobileSm(css`

  `)}



`
const SearchIcon = styled(FaSearch)`
margin-inline:4px;
font-size:1.5rem;
cursor:pointer;
&:hover{
color: var(--hover-color-tomato);
}
 ${media.mobileSm(css`
 font-size:1rem;
margin-inline:0px;

 `
)}
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
 ${media.tablet(css`
transform: translate(-10px, -20px);

 `)}
 ${media.mobile(css`
transform: translate(18px, -50px);

 `)}
`;

const CartIcon = styled(FaShoppingCart)`

 ${media.tablet(css`
transform: translateY(5px);

 `)}
 ${media.mobile(css`
transform: translateY(25px);

 `)}
`

const Avatar = styled(RxAvatar)`
 ${media.mobile(css`
 display:none;
 `)}

`
function SubNav() {
  const { cart } = useContext(CartContext);
  const { dispatch } = useSearch();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      dispatch({ type: 'SET_QUERY', payload: searchQuery });
    }
  };

  const handleClickSearch = () => {
    dispatch({ type: 'SET_QUERY', payload: searchQuery }); 
  };

  return (
    <>
      <NavBar>
        <Brand to="/">TechoCity</Brand>
        <RightSide>
          <SearchContainer>
            <SearchInput
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleSearch}
            />
            <SearchIcon onClick={handleClickSearch} />
            {searchQuery ? <SearchResult setSearchQuery={setSearchQuery} /> : ""}

          </SearchContainer>

          <Avatar size={30} />
          <Avatar size={30} />
          <StyledLink to="/cart">
            <CartIcon size={30} />
            <ShoppingCartSpan>
              {cart.length}
            </ShoppingCartSpan>
          </StyledLink>
        </RightSide>
      </NavBar>
    </>
  );
}

export default SubNav;