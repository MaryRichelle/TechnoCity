import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../context/CartContext';

const Card = styled.div`
border : solid #494141 .1em;
border-radius:.4em;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
gap:2rem;
font-size:1.5em;
`
const Description = styled.article`
display: flex;
width: 100%;

justify-content: space-between;
`
const Images = styled.img`
width:24rem;
height:24rem;
`
const CartBtn = styled.button`
background: #FFA500;
border: none;
padding: 1rem;
width: 95%;
border-radius:.4em;
cursor:pointer;
font-weight: bold;
color:#46109e ;
font-size:1em;

&:hover{
color: #fff}
`
function Product({ product }) {
  const { cart, setCart } = useContext(CartContext)

  const { title, price, image, id } = product;
  return (
    <>

      <Card>
        <Images src={image} alt="" />
        <Description >
          <p> {title}</p>
          <p>Price:&euro; {price.slice(1, 4)}</p>
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