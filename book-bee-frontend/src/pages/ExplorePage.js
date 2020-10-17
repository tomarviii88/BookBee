import React from 'react';
import SearchContainer from '../components/explore/SearchContainer';
import GenreContainer from '../components/explore/GenreContainer';
import AuthorContainer from '../components/explore/AuthorContainer';
import '../styles/explore.css';

const ExplorePage = () => {
  return (
    <div className='explore-page-container'>
      <SearchContainer />
      <GenreContainer />
      <AuthorContainer />
    </div>
  );
};

export default ExplorePage;
