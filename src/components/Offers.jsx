import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { OffersData } from "../context/OffersContext";
import { styled, css } from 'styled-components'
import { media } from '../styles/MediaQueries';

const OffersText = styled.p`
width: 70vw;
font-size: 2rem;
transition: all 1s ease-out;
 color: var(--hover-color-tomato);
 ${media.mobile(css`
 width:100%;
 font-size:0.9rem;
 `)}
`
const ShopNowBtn = styled.span`
color: #000;
font-weight:1000;
margin-left: 2rem;
cursor:pointer;
`


const Offers = () => {
  const offer = useContext(OffersData);
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/shop")
  }
  return (
    <>
      <OffersText> {offer}
        <ShopNowBtn onClick={handleClick}>Shop Now  </ShopNowBtn></OffersText>    </>
  )
}

export default Offers