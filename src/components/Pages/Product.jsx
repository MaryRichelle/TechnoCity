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
//  background: #e8e8e6;
 padding:1rem;

`
const Description = styled.article`
display: flex;
flex-direction: column;
width: 100%;
justify-content: space-between;
`
const Images = styled.img`
max-width: 250px;
height: 250px;
object-fit: fill;`
const CartBtn = styled.button`
 background: #d1cfcf;
border: none;
padding: 1rem;
width: 95%;
border-radius:4px;
cursor:pointer;
font-weight: bold;
color:#080808 ;
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