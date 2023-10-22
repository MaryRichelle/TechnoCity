import React from 'react'
import useProductFilter from '../Hooks/useProductFilter';
import Product from './Product';
import styled from 'styled-components'

const Container = styled.section`
width: 85%;
margin:auto;
padding-block:6rem;
 display:flex;
gap: 3rem;
flex-direction: column;
justify-content: space-around;
align-item:center;
 `

const AllProducts = styled.section`
display:grid;
grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
gap:4rem;
width: 100%;
margin:auto;

`
const H1 = styled.h1`
text-align: center;
font-size: 2.5rem;
font-weight: 1000;
`
function FilteredCategories({ category, title }) {
  const { filteredProducts } = useProductFilter(category)
  return (
    <Container >
      <H1>{title}</H1>
      <AllProducts>

        {
          filteredProducts && filteredProducts.map(product => {
            return <Product key={product._id} product={product} />
          })
        }

      </AllProducts>
    </Container>
  )
}

export default FilteredCategories