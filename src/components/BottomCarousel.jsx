import React, { useState, useEffect } from 'react'
import { styled, css } from 'styled-components'
import { bottomCarouselImages as images } from "../data/carousel_images"
import { useNavigate } from 'react-router-dom';
import { media } from '../styles/MediaQueries';

const Container = styled.section`
    width: 90%;
    margin:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius:4px;
    z-index:2;
    background: #ff6347;
    padding:5rem;
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
    height: 40vh;
    width: 100%;
  
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



function BottomCarousel() {
  const navigate = useNavigate()


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