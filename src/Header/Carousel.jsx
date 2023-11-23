import React, { useState, useEffect, useContext } from 'react'
import { styled, css } from 'styled-components'
import { headerCarousel as images } from "../data/carousel_images"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { OffersData } from "../context/OffersContext";
import { useNavigate } from 'react-router-dom';
import { media } from '../styles/MediaQueries';

const Container = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
    gap:2rem;
    padding-block:2rem;
    z-index:0.8;
    background: var(--dark-gray);
   ${media.desktop(css`
      flex-direction: row;
      justify-content: space-around;
      padding-block:2rem;
    `)}
  
    `
const CarouselImages = styled.img`
    height: 50vh;
    width: 80%;
    object-fit: fit;
    &:hover{
     transform: scaleX(-1);
    transition: transform 1s ease-in-out;
    }
    ${media.tabletLg(css`
    width:50%;
  `)}
  ${media.desktop(css`
    width:40%;
    height: 70vh;
  `)}
  
   
`
const ArrowLeft = styled.div`
    position: absolute;
    background: var(--light-gray);
    color: #fff;
    left:2%;
    top:50%;
    z-index:0.5;
    font-size:2rem;
    padding: 0.5rem;
    display:grid;
    place-items:center ;
    cursor:pointer;
    &:hover{
      background-opacity : .5;
      color:  var(--hover-color-tomato);
    }
    `
const ArrowRight = styled.div`
    position: absolute;
    background: var(--light-gray);
    color: #fff;
    Right:2%;
    top:50%;
    z-index:0.5;
    font-size:2rem;
    padding: 0.5rem;
    display:grid;
    place-items:center ;   
    cursor:pointer;
    &:hover{
      background-opacity : .5;
      color:  var(--hover-color-tomato);
    }
    `
const RightTextContainer = styled.div`
  flex-basis:40%;

`
const Text = styled.h2`
    font-weight: 800;
    font-size:2rem;
    ${media.desktopMd(css`
    font-size:3rem;
  `)}
    `
const ShopNowButton = styled.button`
    display: inline-block;
    font-size:1.2rem; 
    font-weight: 800;
    background:  var(--hover-color-tomato);
    border: none;
    border-radius: 4px;
    outline:none;
    padding: 1rem;
    cursor: pointer;
    margin-inline-start: 5%;
    transform: skewX( -15deg);
    &:hover{
    opacity:.9;
    color:#fff;
    }
`

function Carousel() {
  const navigate = useNavigate()
  const offer = useContext(OffersData);
  const [currentImage, setCurrentImage] = useState(0);

  function handleLeftClick() {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  }
  function handleNextClick() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }
  useEffect(() => {
    const intervalSet = setInterval(handleNextClick, 5000)
    return () => clearInterval(intervalSet)
  }, [currentImage, handleNextClick])

  const handleClick = () => {
    navigate("/shop")
  }
  return (
    <Container>
      <ArrowLeft onClick={handleLeftClick}><AiOutlineArrowLeft /></ArrowLeft>
      <ArrowRight onClick={handleNextClick}><AiOutlineArrowRight /></ArrowRight>
      {
        images.map((image, index) => currentImage === index && <CarouselImages key={image} src={image.image}
          alt={image.title} loading="lazy" />)
      }
      <RightTextContainer>
        <Text >{offer}<ShopNowButton onClick={handleClick}>Shop Now < AiOutlineArrowRight /> </ShopNowButton> </Text>
      </RightTextContainer>
    </Container>
  )
}

export default Carousel