import React, { useState, useEffect } from 'react'
import { styled, css } from 'styled-components'
import { bottomCarouselImages as images } from "../data/carousel_images"
import { media } from '../styles/MediaQueries';

const Container = styled.section`
    width: 100%;
    margin:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:4px;
    background: rgb(255, 99, 71);
    padding:5rem;
    position:relative;
    &:after{
    content: "";
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    background: rgba(88, 84, 84, 0.27);
    z-index: 1;
}
    ${media.desktopMd(css`
    `)}
    `

const CarouselImages = styled.img`
    height: 35vh;
    width: 80%;
    object-fit: contain;
    
  ${media.desktopMd(css`
    height: 65vh;
  `)}
    ${media.mobile(css`
      height: 15vh;
    width: 90vw;
  
    `)}
    
`





function BottomCarousel() {


  const [currentImage, setCurrentImage] = useState(0);

  function nextImage() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }
  useEffect(() => {
    const intervalSet = setInterval(nextImage, 5000)
    return () => clearInterval(intervalSet)
  }, [currentImage])



  return (
    <Container>

      {
        images.map((image, index) => currentImage === index && <CarouselImages key={image} src={image}
          alt="A image of Electronic Appliances " loading="lazy" />)
      }

    </Container>
  )
}

export default BottomCarousel