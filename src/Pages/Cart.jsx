import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components'
import { useContext } from 'react';
import Product from "../components/Product"
import { CartContext } from '../context/CartContext';


const Container = styled.main`
width:80%;
margin:auto;
text-align:center;
padding-block:2rem;

`
const MyCart = styled.article`

display:flex;
gap:2rem;
justify-content:space-around;
align-items:center;
padding-block:2rem;

`
const H2 = styled.h2`
font-size: 2rem;
`
const ProductsContainer = styled.section`
width:100%;
display:flex;
justify-content:space-around;
align-items:center;
gap:2rem;
flex-wrap: wrap;

`
const Button = styled.button`
background: #ff6347;

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
background: #e5e3e3;

}

`
const CheckOutSection = styled.section`
display: flex;
flex-direction: column;
justify-content:space-around;
align-items:center;
gap:2rem;
padding:1.5rem;
border-radius:4px;
border: 1px solid #c8c7c7;
`
function Cart() {
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()
  const [total, setTotal] = useState(0)
  const handleClick = () => {
    navigate("/")
  }

  useEffect(() => {
    setTotal(
      cart.reduce((acc, currentValue) => acc + Number(currentValue.price.slice(1, 4)), 0)
    )

  }, [cart])
  return (
    <Container>
      <H2>Your Cart</H2>
      <MyCart>


        <ProductsContainer>
          {cart && cart.length > 0 ? (
            cart.map((product, index) => (
              <Product key={index} product={product} />
            ))
          ) : (
            <CheckOutSection>
              <h3>Nothing In your Cart</h3>
              <Button onClick={handleClick}>
                Go to Shop
              </Button>
            </CheckOutSection>
          )}
        </ProductsContainer>
        {cart && cart.length > 0 &&
          <CheckOutSection>
            {total ? <h2>Total Amount: &euro; {total}</h2> : <p>Nothing In your Cart</p>}
            <Button> Check Out </Button>
            <Button onClick={handleClick}>
              Go to Shop
            </Button>
          </CheckOutSection>
        }
      </MyCart>
    </Container>
  )
}

export default Cart