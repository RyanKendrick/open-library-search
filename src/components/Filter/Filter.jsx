import React from 'react';
import './Filter.scss';

const Filter = ({sortTest}) => {
  return (
    <>
    <div className='filter-container'>
      <span className='filter-label'>Filter</span>
      <select onChange={sortTest}>
          <option>All</option>
          <option value='newest'>Publish Date (Newest)</option>
          <option value='oldest'>Publish Date (Oldest)</option>
          <option value='title-asc'>Title (A-Z)</option>
          <option value='title-desc'>Title (Z-A)</option>
      </select>
    </div>
    </>
  )
}

export default Filter