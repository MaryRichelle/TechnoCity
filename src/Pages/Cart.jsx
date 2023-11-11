import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components'
import Product from "../components/Product"
import { CartContext } from '../context/CartContext';


const Container = styled.main`
width:80%;
margin:auto;
text-align:center;
padding-block:2rem;

`
const H2 = styled.h2`
font-size: 2rem;
font-weight:bold;
`
const MyCart = styled.article`
width:100%;
display:flex;
gap:2rem;
justify-content:space-between;
align-items:center;
padding-block:2rem;
`
const ProductsContainer = styled.section`
flex-grow:1;
display: grid;
grid-template-columns: repeat(auto-fill, minmax(220px, 0.4fr));
gap: 4rem;
margin: auto;
`
const Button = styled.button`
background: var(--hover-color-tomato);
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
background: var(--light-gray);
}
`
const CheckOutSection = styled.section`
width:auto;
display: flex;
flex-direction: column;
justify-content:space-around;
align-items:center;
gap:2rem;
padding:1.5rem;
border-radius:4px;
`

function Cart() {
  const { cart } = useContext(CartContext)
  const navigate = useNavigate()
  const [total, setTotal] = useState(0)
  const handleClick = () => {
    navigate("/shop")
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
            {total ? <h2>Total Amount:  {total}&euro;</h2> : <p>Nothing In your Cart</p>}
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