import React, { useState, useEffect, useContext } from 'react'
import { styled, css } from 'styled-components'
import { headerCarousel as images } from "../../data/carousel_images"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import { OffersData } from "../../context/OffersContext";
import { useNavigate } from 'react-router-dom';
import { media } from '../../styles/MediaQueries';

const Container = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: baseline;
    align-items: center;
    gap:2rem;
    z-index:2;
    background: rgb(191, 191, 191);
    ${media.desktopMd(css`
      flex-direction: row;
      justify-content: space-around;
  
    `)}
  
    `
const CarouselImages = styled.img`
    height: 60vh;
    width: 50%;
    object-fit: fit;
    &:hover{
      transform: scaleX(-1);
      transition: transform 1s ease-in-out;
    }
  ${media.desktopMd(css`
    height: 75vh;
  `)}
    ${media.mobile(css`
    height: 70vh;
    width: 100%;
  
    `)}
`
const ArrowLeft = styled.div`
    position: absolute;
    background: rgba(174, 173, 173, 0.8);
    color: #fff;
    left:2%;
    top:50%;
    z-index:1;
    font-size:2rem;
    padding: 0.5rem;
    display:grid;
    place-items:center ;
    cursor:pointer;
    &:hover{
      background-opacity : .5;
      color:  #ff6347;
    }
    `
const ArrowRight = styled.div`
    position: absolute;
    background: rgba(174, 173, 173, 0.8);
    color: #fff;
    Right:2%;
    top:50%;
    z-index:1;
    font-size:2rem;
    padding: 0.5rem;
    display:grid;
    place-items:center ;   
    cursor:pointer;
    
    &:hover{
      background-opacity : .5;
      color:  #ff6347;
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
const ShopNowButton = styled.span`
    display: inline-block;
    font-size:1.2rem; 
    font-weight: 800;
    background:  #ff6347;
    border: none;
    border-radius: 4px;
    outline:none;
    padding: 1rem;
    cursor: pointer;
    margin-inline-start: 5%;
    transform: skewX( -25deg);
    &:hover{
    opacity:.9;
    color:#fff;
    }
`



function Carousel() {
  const navigate = useNavigate()

  const  offer  = useContext(OffersData);

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
  }, [currentImage])
  const handleClick = () => {
    navigate("/")
  }


  return (
    <Container>
      <ArrowLeft onClick={handleLeftClick}><AiOutlineArrowLeft /></ArrowLeft>
      <ArrowRight onClick={handleNextClick}><AiOutlineArrowRight /></ArrowRight>
      {
        images.map((image, index) => currentImage === index && <CarouselImages key={image} src={image.image}
          alt="A image of Electronic Appliances " loading="lazy" />)
      }
      <RightTextContainer>
        <Text >{offer}<ShopNowButton onClick={handleClick}>Shop Now < AiOutlineArrowRight /> </ShopNowButton> </Text>

      </RightTextContainer>
    </Container>
  )
}

export default Carousel