import React from 'react';
import './Results.scss';
import { useId } from 'react';

const Results = ({data}) => {

  const key = useId()

  return (
    <>
      <div className='results-container'>
        {data.map((i) => {
          return <>
            <div className='result-container' key={key} data-testid='results-item'>
              <div className='cover-container'>
                <div>
                  <img
                      className='book-cover'
                      src={`https://covers.openlibrary.org/b/id/${i.cover_i}-M.jpg`}
                      alt='book cover'
                  />
                </div>
              </div>
              <div className='book-info-container'>
                <div 
                  className='book-title' 
                  alt='book title'>
                    {i.title}
                </div>
                <div 
                  className='book-details' 
                  alt='book author'>
                    by {i.author_name}
                </div>
                <div 
                  className='book-details' 
                  alt='publish date'>
                    published {i.first_publish_year}
                </div>
              </div>
            </div>
          </> 
        })}
      </div>
    </>
  )
}

export default Results