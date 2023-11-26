import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useParams } from 'react-router-dom';
import { media } from '../styles/MediaQueries';

import { styled, css } from 'styled-components'
import OffersText from "../components/Offers"
import TopRatedProducts from "../components/TopRatedProducts"
const Main = styled.main`
width:80%;
margin:5rem auto;
display:flex;
flex-direction:column;
justify-content: space-around;
align-items: center;
`

const Container = styled.section`
margin:5rem auto;
display:flex;
justify-content: space-around;
align-items: center;
 ${media.tablet(css`
flex-direction:column;
  `)}
`
const ZoomImageWrapper = styled.div`
width:40%;
height:40%;
object-fit: contain;
   overflow: hidden;
  position: relative;
  cursor: pointer;
  ${media.tablet(css`
width:70%;
height:60%;
  `)}
`;
const Image = styled.img`
width:100%;
height:100%;
transition: transform 0.3s ease;

  ${({ isZoomed }) => isZoomed && 'transform: scale(1.8);'}
`
const Heading = styled.h2`
  display: flex;
  justify-content: center;
  align-items:center;
  color : var(--hover-color-tomato);

  `
const Article = styled.article`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items:start;
gap:3rem;
 ${media.tablet(css`
gap:1rem;

  `)}
`

const P = styled.p`
 font-size: 1.5rem;
`
const CartBtn = styled.button`
background: var(--light-gray);
border: none;
padding: 0.8rem;
width: 100%;
border-radius:4px;
cursor:pointer;
font-weight: bold;
color:#080808 ;
font-size:1em;
transition: all 1s ease-in-out;
&:hover{
background: var(--hover-color-tomato);
color: #fff}
`
const Item = () => {
  const { cart, setCart, products } = useContext(CartContext);
  const [item, setItem] = useState({})
  const { id } = useParams();
  const [isZoomed, setZoom] = useState(false);

  const handleZoomToggle = () => {
    setZoom(!isZoomed);
  };

  useEffect(() => {
    products.filter(product => {
      if (id === product.id) {
        setItem(product);
      }

    })
  }, [id, item, products])

  return (
    id &&
    < Main>
      <Container>
        <ZoomImageWrapper onMouseMove={handleZoomToggle}>
          <Image src={item.image} alt={item.title} isZoomed={isZoomed}
          />
        </ZoomImageWrapper>
        <Article>
            <Heading>{item.title}</Heading>
          <P>Price: {item.price && item.price.slice(1, 4)} &euro;</P>
          <P>Category:
            {
              item.category && item.category.charAt(0).toUpperCase() + item.category.slice(1).toLowerCase()
            }
          </P>
          {cart.includes(item) ? (
            <CartBtn
              onClick={() => {
                setCart(cart.filter(el => el.id !== id))
              }}
            >Remove From cart</CartBtn>
          ) : (
            <CartBtn onClick={() => {
              setCart([...cart, item])
            }}>Add To Cart</CartBtn>
          )}
        </Article>
      </Container>
        <TopRatedProducts length={4} heading="Related Products" description="Top Rated products "/>
      <OffersText />
    </ Main>

  )
}

export default Item