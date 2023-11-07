import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';


const Main = styled.main`
width:80%;
margin:5rem auto;
display:flex;
justify-content: space-around;
align-items: center;
`
const Image = styled.img`
width:40%;
height:auto;
`

const Article = styled.article`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items:center;
gap:3rem;

`

const P = styled.p`
 font-size: 1.5rem;
`
const Item = () => {
  const { products } = useContext(CartContext);
  const [item, setItem] = useState({})
  const { id } = useParams();
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
      <Image src={item.image} />
      <Article>
        <P>{item.title}</P>
        <P>Price: {item.price && item.price.slice(1, 4)} &euro;</P>
        <P>Category:
          {
            item.category && item.category.charAt(0).toUpperCase() + item.category.slice(1).toLowerCase()
          }
        </P>
      </Article>
    </ Main>

  )
}

export default Item