import React, { useContext, useState } from 'react'
import { styled, css } from 'styled-components'
import { media } from '..//styles/MediaQueries';
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import { headerCarousel as images } from "../data/carousel_images"
import { BottomOfferTextKeyframes } from "../styles/Keyframes";
import { OffersData } from "../context/OffersContext";
import { useNavigate } from 'react-router-dom';

const Container = styled.section`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
padding-block: 4rem;
row-gap: 3rem;
`
const CategoryContainer = styled.div`
width: 90%;
margin:auto;
display: flex;
justify-content: center;
flex-wrap: wrap;
align-items: center;
gap:2rem;
cursor:pointer;
`

const Heading = styled.h2`
display: flex;
justify-content: center;
align-items:center;
border-block-end: 1px solid #e5e2e2;
`
const Hr = styled.hr`
width: 70%;
margin: auto;
background: #716c6c;

`
const Category = styled.div`
background: #e5e2e2;
border: 1px solid #e5e2e2;
display: flex;
flex-direction: column;
justify-content: space-around;
gap:1rem;
align-items: center;
border-radius:14px;
transform: skewX(-8deg);
transition: background 0.3s linear;
&:hover{
background: #939292;
}
`
const CategoryImages = styled.img`
width:15rem;
height: 14rem;
${media.tablet(css`
width:10rem;
height: 8rem;
`
)}

`
const Button = styled.button`
background: #fff;
width:100%;
border : none ;
outline:none;
font-weight:800;
font-size: 1rem;
padding:0.8rem 2.5rem;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
  transition: background 0.3s ease-in-out;
&:hover{
  background: #ff6347;
}
`

const OffersText = styled.p`
width: auto;
font-size: 2rem;
animation:${BottomOfferTextKeyframes} 8s linear 0s infinite ;
 color: #ff6347;
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

const DoubleArrow = styled(MdKeyboardDoubleArrowRight)`
font-size:2rem;
`
const Categories = () => {
  const offer = useContext(OffersData);
  const navigate = useNavigate()
  

  return (
    <Container>
      <Hr />
      <Heading>BROWSE MORE CATEGORIES <DoubleArrow />
      </Heading>
      <CategoryContainer>
        {
          images && images.map(img =>
            <Category key={img.image} onClick={() => navigate(img.title)}>
              <CategoryImages src={img.image} />
              <Button>{img.title.charAt(0).toUpperCase() + img.title.slice(1).toLowerCase()}</Button>
            </Category>
          )
        }
      </CategoryContainer>

      <OffersText> {offer}
        <ShopNowBtn>Shop Now  </ShopNowBtn></OffersText>
    </Container>
  )
}

export default Categories