import React from 'react'
import { styled, css } from 'styled-components'
import { media } from '../../styles/MediaQueries';
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import { headerCarousel as images } from "../../data/carousel_images"
import { useNavigate } from 'react-router-dom';
import OffersText from "../../components/Offers"


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
border-block-end: 1px solid var(--light-gray);
`
const Hr = styled.hr`
width: 70%;
margin: auto;
background: var(--dark-gray);

`
const Category = styled.div`
background: var(--light-gray);
border: 1px solid var(--light-gray);
display: flex;
flex-direction: column;
justify-content: space-around;
gap:1rem;
align-items: center;
border-radius:14px;
transform: skewX(-8deg);
transition: background 0.3s linear;
&:hover{
background: var(--dark-gray);
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
  background: var(--hover-color-tomato);
}
`

const DoubleArrow = styled(MdKeyboardDoubleArrowRight)`
font-size:2rem;
`
const Categories = () => {
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
      <OffersText />

    </Container>
  )
}

export default Categories