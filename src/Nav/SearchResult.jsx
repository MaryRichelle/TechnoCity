import React, {  useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useSearch } from '../context/SearchProvider';
import styled from 'styled-components';

const Ul = styled.ul`
width:100%;
position:absolute;
top:37px;
background:#fbfbfc;
color:black;
border-radius:4px;
border: 1px solid #bfbfbf;
e
`
const Li = styled.li`
border: 1px solid #bfbfbf;
list-style:none;
padding: 0.5rem;
display:flex;
justify-content:space-between;
align-items:center;
border-left: 6px solid yellowgreen;
&:hover{
background:  #bfbfbf;
color: #ff6347;
cursor:pointer;
}
`
const ProductImage = styled.img`
width:30px;
`

function SearchResult() {
  const navigate = useNavigate()
  const { state } = useSearch();
  const { products } = useContext(CartContext);
  const { dispatch } = useSearch();
  const { results, searchQuery } = state;
  function handleClickProduct(id){
    navigate(`/product/${id}`);

    }
  useEffect(() => {
    const filteredResults = products.filter((product) => {
      if (searchQuery === "") return true;
      return product.title.toLowerCase().includes(searchQuery.toLowerCase());
    });

    dispatch({ type: 'SET_RESULTS', payload: filteredResults });
  }, [searchQuery, products, dispatch]);

  return (

    <Ul>
      {
        searchQuery &&
        results.map((result, index) => (
          <Li key={result.image + index + result.title} onClick={() => handleClickProduct(result.id)}>
            {
              result.title.charAt(0).toUpperCase() + result.title.slice(1).toLowerCase()
            }
            <ProductImage src={result.image} alt={result.title} />
          </Li>
        ))
      }
    </Ul>

  );
}

export default SearchResult;
