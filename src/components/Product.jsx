import React, { useContext } from 'react'
import styled from 'styled-components'
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Card = styled.section`
border-radius:.4em;
border: 1px solid var(--light-gray);
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
gap:2rem;
font-size:1em;
background:#fff;
cursor:pointer;
`
const ProductWrapper = styled.div`
flex-grow:1;
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
gap:2rem;
font-size:1em;
`
const Description = styled.article`
display: flex;
flex-direction: column;
width: 100%;
justify-content: space-between;
padding-inline:.8rem;

`
const Images = styled.img`
width: 180px;
height: 180px;
object-fit: contain;
&:hover{
    transform: scaleX(-1);
    transition: transform 0.5s ease-in-out ;
 }
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
function Product({ product }) {
  const navigate = useNavigate()
  const { cart, setCart } = useContext(CartContext)
  const { title, price, image, id } = product;
  
  function handleClickProduct(id) {
    
    navigate(`/product/${id}`);

  }
  return (

    <Card >
      <ProductWrapper onClick={() => handleClickProduct(id)}>
      <Images src={image} alt={title} />
      <Description >
        <p> {title}</p>
        <p>Price:&euro;
          {price.slice(1, 4)}
        </p>
      </Description>
      </ProductWrapper>
      {cart.includes(product) ? (
        <CartBtn
          onClick={() => {
            setCart(cart.filter(item => item.id !== id))
          }}
        >Remove From cart</CartBtn>
      ) : (
        <CartBtn onClick={() => {
          setCart([...cart, product])
        }}>Add To Cart</CartBtn>
      )}
    </Card>

  )
}

export default Product