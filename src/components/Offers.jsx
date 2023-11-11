import React, { useContext } from 'react'
import { BottomOfferTextKeyframes } from "../styles/Keyframes";
import { useNavigate } from 'react-router-dom';
import { OffersData } from "../context/OffersContext";
import { styled, css } from 'styled-components'
import { media } from '../styles/MediaQueries';

const OffersText = styled.p`
width: 70vw;
font-size: 2rem;
animation:${BottomOfferTextKeyframes} 8s linear 0s infinite ;
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