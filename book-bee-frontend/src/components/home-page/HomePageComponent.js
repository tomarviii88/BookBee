import React from 'react';
import TrendingBook from './TrendingBook';
import TrendingReviews from './TrendingReviews';
import TrendingAuthors from './TrendingAuthors';
import FollowingAuthors from './FollowingAuthors';
import FollowingGenre from './FollowingGenre';

const HomePageComponent = () => {
  return (
    <div className='home-page-component'>
      <div className='trending-book-review-container'>
        <TrendingBook />
        <TrendingReviews />
      </div>
      <div className='author-genre-container'>
        <TrendingAuthors />
        <FollowingGenre />
        <FollowingAuthors />
      </div>
    </div>
  );
};

export default HomePageComponent;
