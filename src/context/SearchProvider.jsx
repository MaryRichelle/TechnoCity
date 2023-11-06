import React, { createContext, useReducer, useContext } from 'react';

const SearchContext = createContext();

export const useSearch = () => {
  return useContext(SearchContext);
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case 'SET_QUERY':
      return { ...state, searchQuery: action.payload };
    case 'SET_RESULTS':
      return { ...state, results: action.payload };
    default:
      return state;
  }
};
const initialState = {
  searchQuery: '',
  results: [],
}
export const SearchProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, initialState);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
