import React from 'react';
import './Search.scss';

const Search = ({setSearch, title, getData, searchIcon, setSearchKeyPress}) => {
  return (
    <>
    <div className='search-container'> 
        <input  
          onKeyPress={setSearchKeyPress} 
          className='search-input' 
          placeholder='Search for Book by Title...' 
          onChange={setSearch} 
          type='text' 
          value={title} 
        />
        <button 
          onClick={getData} 
          alt='click to search'>
          <img 
            className='search-icon' 
            src={searchIcon} 
            alt='click to search'
          />
        </button>
    </div>   
    </>
  )
}

export default Search