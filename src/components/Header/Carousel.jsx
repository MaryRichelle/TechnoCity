import React, { useState, useEffect, useContext } from 'react'
// import { CarouselData } from "../context/CarouselContext"
import { data } from "../data/carousel_images"
import styled from 'styled-components'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"

const Container = styled.section`
   position: static;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index:2;
background: #bfbfbf;
`
const ArrowLeft = styled.div`

    position: absolute;
    background:#D1D7E3;
    color: #fff;
    left:2%;
    top:50%;
    z-index:5;
    font-size:2rem;
    padding: 0.5rem;
    display:grid;
    place-items:center ;
    cursor:pointer;
    `
const ArrowRight = styled.div`
    position: absolute;
    background: #D1D7E3;
    color: #fff;
    Right:2%;
    top:50%;
    z-index:5;
    font-size:2rem;
    padding: 0.5rem;
    display:grid;
    place-items:center ;   
    cursor:pointer; `
const CarouselImages = styled.img`
  height: 85vh;
  width: 100%;
  object-fit: fit;

`
function Carousel() {

  const [currentImage, setCurrentImage] = useState(0);
  function handleLeftClick() {
    setCurrentImage(currentImage === data.length - 1 ? 0 : currentImage + 1);
  }
  function handleNextClick() {
    setCurrentImage(currentImage === 0 ? data.length - 1 : currentImage - 1);
  }
  useEffect(() => {
    setTimeout(handleNextClick, 8000)
  }, [currentImage])
  console.log(data);
  return (
    <Container>
      <ArrowLeft onClick={handleLeftClick}><AiOutlineArrowLeft /></ArrowLeft>
      <ArrowRight onClick={handleNextClick}><AiOutlineArrowRight /></ArrowRight>
      {
        data.map((image, index) => currentImage === index && <CarouselImages key={image} src={image}
          alt="A image of Electronic Appliances " loading="lazy" />)
      }

    </Container>
  )
}

export default Carousel