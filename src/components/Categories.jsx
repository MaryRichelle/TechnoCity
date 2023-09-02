import React from 'react'
import styled from 'styled-components'
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import { headerCarousel as images } from "../data/carousel_images"
import { OfferTextKeyframesBottom } from "../styles/Keyframes";

const Container = styled.section`
height: 80vh;
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
align-items: center;
gap:2rem;
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
display: flex;
flex-direction: column;
justify-content: space-around;
gap:1rem;
align-items: center;
border-radius:4px;
`
const CategoryImages = styled.img`
width:15rem;
height: 14rem;
border-radius:15px;
&:hover{
  transform: scaleX(-1)
}
`
const Button = styled.button`
background: #fff;
border : none ;
outline:none;
font-weight:800;
font-size: 1rem;
padding:0.8rem 2.5rem;
transform: skewX(-25deg);
box-sizing:border-box;
&:hover{
  border-bottom:3px solid #ff6347;
  color: #ff6347;
}
`

const OffersText = styled.p`
width: auto;
font-size: 2rem;
animation:${OfferTextKeyframesBottom} 8s linear 0s infinite ;
  color: #ff6347;

`
const Categories = () => {
  
  return (
    <Container>
      <Hr />
      <Heading>BROWSE MORE CATEGORIES <MdKeyboardDoubleArrowRight /> 
      </Heading>
      <CategoryContainer>
          {
          images && images.map(img=>
            <Category>
              <CategoryImages src={img.image}/>
              <Button>{img.title}</Button>
            </Category>
            )
          }
      </CategoryContainer>
       
        <OffersText>Receive a 5% discount when purchasing 3 products </OffersText>
      </Container>
  )
}

export default Categories