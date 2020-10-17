import React from 'react';
import { Search } from 'react-feather';

const SearchContainer = () => {
  return (
    <div className='explore-search-container'>
      <input placeholder='Search' />
      <Search />
    </div>
  );
};

export default SearchContainer;
