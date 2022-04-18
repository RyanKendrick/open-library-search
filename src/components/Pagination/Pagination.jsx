import React from 'react';
import './Pagination.scss';

const Pagination = ({resultsPerPage, totalResults, paginate}) => {
    
  const pageNumbers = [];

  // Function to number pages based on results   
  for (let i = 1; i <= Math.ceil(totalResults / resultsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
        <>
        <div className='nav-container'>
            <nav>
                <div className='nav-list-container'>
                    {pageNumbers.map(number => (
                        <div>
                            <a onClick={() => paginate(number)} href='!#'>
                                {number}
                            </a>
                        </div>
                    ))}
                </div>
            </nav>
        </div>
        </>
    )
};

export default Pagination