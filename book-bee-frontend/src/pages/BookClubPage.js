import React from 'react';
import BookClubForm from '../components/book-club/BookClubForm';
import SuggestedBookClub from '../components/book-club/SuggestedBookClub';
import '../styles/bookclub.css';

const BookClubPage = () => {
  return (
    <div className='book-club-page-container'>
      <BookClubForm />
      <SuggestedBookClub />
    </div>
  );
};

export default BookClubPage;
