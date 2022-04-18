import React, { useState } from 'react'
import axios from 'axios'
import Header from './components/Header/Header'
import Results from './components/Results/Results'
import Filter from './components/Filter/Filter'
import Search from './components/Search/Search'
import Pagination from './components/Pagination/Pagination'
import searchIcon from './assets/images/search-icon.svg'
import bookSearch from './assets/images/header-icon.svg'

const App = () => {
  
  // Hooks
  const [data, setData] = useState([])
  const [title, setTitle] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [resultsPerPage] = useState(20)
  const [loading, setLoading] = useState(false)

  // Asyncronious axios call to api
  const getData = async () => {
    await axios({
      url: `https://openlibrary.org/search.json?title=${title}`,
    })
    .then(response => {
      setData(response.data.docs)
      console.log('response.data', response.data)
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    })
  }

  // Set search keyword
  const setSearch = (e) => {
    setTitle(e.target.value)
  }

  // Trigger setSearch on keyPress 'Enter'
  const setSearchKeyPress = (e) => {
    if (e.which === 13) {
      setTitle(e.target.value)
      getData()
      console.log('setSearch', e.target.value)
    }
  };

  // Functions for sorting results
  const sortResults = (e) => {
    let sortedData = []
    // By date published
    if (e.target.value === 'newest') {
      sortedData = [...data].sort(function(a, b){
        return b.first_publish_year - a.first_publish_year
      });
      setData(sortedData)
    } else if (e.target.value === 'oldest') {
      sortedData = [...data].sort(function(a, b){
        return a.first_publish_year - b.first_publish_year
      });
      setData(sortedData)
    } else if (e.target.value === 'title-asc') {
      sortedData = [...data].sort(function(a, b) {
        if (a.title.toUpperCase() < b.title.toUpperCase()) {
          return -1
        }
        if (a.title.toUpperCase() > b.title.toUpperCase()) {
          return 1
        }
        return 0
      })
      setData(sortedData)
      // By title alphabetically
    } else if (e.target.value === 'title-desc') {
      sortedData = [...data].sort(function(a, b) {
        if (a.title.toUpperCase() < b.title.toUpperCase()) {
          return 1
        }
        if (a.title.toUpperCase() > b.title.toUpperCase()) {
          return -1
        }
        return 0
      })
      setData(sortedData)
    }
  }

  // Pagination.js functionality
  const indexOfLastResult = currentPage * resultsPerPage;
  const indexOfFirstResult = indexOfLastResult - resultsPerPage ;
  const currentResults = data.slice(indexOfFirstResult, indexOfLastResult);
  const paginate = (num) => setCurrentPage(num);
  
  return (  
    <>
    <Header bookSearch={bookSearch} />
    <Search
      setSearch={setSearch}
      title={title}
      getData={getData}
      searchIcon={searchIcon}
      setSearchKeyPress={setSearchKeyPress} />
    <Filter sortTest={sortResults} />
    {
      loading ?

      <div>Loading...</div>

      :

      <Results data={currentResults} />
    }
    <Pagination
      resultsPerPage={resultsPerPage}
      totalResults={data.length}
      paginate={paginate} />
    </>
  );
}

export default App;