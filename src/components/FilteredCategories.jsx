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
function FilteredCategories({ category, title }) {
  const { filteredProducts } = useProductFilter(category)
  return (
    <Container >
      <h1>{title}</h1>
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