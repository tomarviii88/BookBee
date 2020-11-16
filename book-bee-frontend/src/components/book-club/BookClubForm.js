import React from 'react';

const BookClubForm = () => {
  return (
    <div className='book-club-form-container'>
      <p>Create Your BookClub</p>
      <form>
        <input placeholder='Bookclub name' />
        <textarea placeholder='Description' />
        <button>Invite friends</button>
        <input type='files' />
        <input type='submit' value='Create' />
      </form>
    </div>
  );
};

export default BookClubForm;
