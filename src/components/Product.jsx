import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../context/CartContext';

const Card = styled.div`
border-radius:.4em;
border: 1px solid #e8e8e6;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
gap:2rem;
font-size:1em;
 padding-inline:.5rem;

`
const Description = styled.article`
display: flex;
flex-direction: column;
width: 100%;
justify-content: space-between;
`
const Images = styled.img`
max-width: 180px;
height: 180px;
object-fit: fill;
&:hover{
    transform: scaleX(-1);
    transition: transform 0.5s ease-in-out ;
    }

`


const CartBtn = styled.button`
 background: #e5e3e3;
border: none;
padding: 0.8rem;
width: 100%;
border-radius:4px;
cursor:pointer;
font-weight: bold;
color:#080808 ;
font-size:1em;
transform: skewX(-10deg);
transition: all 1s ease-in-out;
&:hover{
background: #ababab;
color: #fcfaf9}
`
function Product({ product }) {
  const { cart, setCart } = useContext(CartContext)
  const { title, price, image, id } = product;
  return (
    <>
      <Card>
        <Images src={image} alt={title} />
        <Description >
          <p> {title}</p>
          <p>Price:&euro;
            {price.slice(1, 4)}
          </p>
        </Description>
        {cart.includes(product) ? (
          <CartBtn
            onClick={() => {
              setCart(cart.filter(el => el.id !== id))
            }}
          >Remove From cart</CartBtn>
        ) : (
          <CartBtn onClick={() => {
            setCart([...cart, product])
          }}>Add To Cart</CartBtn>
        )}
      </Card>
    </>
  )
}

export default Product