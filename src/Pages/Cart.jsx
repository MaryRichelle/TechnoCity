import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { useContext } from 'react';
import Product from "../components/Product"
import { CartContext } from '../context/CartContext';

const MyCart = styled.main`
width:80%;
margin:auto;
display:flex;
justify-content:space-around;
align-items:center;
gap:4rem;
flex-wrap: wrap;
`
function Cart() {
  const { cart } = useContext(CartContext)

  const [total, setTotal] = useState(0)
  useEffect(() => {

    setTotal(
      cart.reduce((acc, currentValue) => acc + Number(currentValue.price.slice(1, 4)), 0)
    )

  }, [cart])
  return (
    <><h2>your Cart</h2>
      {total ? <p>Total Amount: &euro; {total}</p> : <p>Nothing In your Cart</p>}

      <MyCart>
        {cart && cart.map(product =>
          <Product product={product} />
        )}
      </MyCart>
    </>
  )
}

export default Cart