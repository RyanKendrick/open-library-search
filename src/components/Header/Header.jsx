import React from 'react';
import './Header.scss';

const Header = ({bookSearch}) => {
  return (
    <>
    <div className='header'>
        <div className='header-title'>
          <img 
            alt='header icon' 
            className='header-icon' 
            src={bookSearch}
          />
          <h1>BookSearch</h1>
        </div>
        <h2>Search for a Book!</h2>
    </div>
    </>
  )
}

export default Header
