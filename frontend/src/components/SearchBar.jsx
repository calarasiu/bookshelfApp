import React from 'react';

const SearchBar = ({searchBooks}) =>{
  return(
    <div className = "searchBar" >
      <input type="search" id="mySearch" name="q" placeholder="Search for your next read..." onChange = {(event)=>searchBooks(event)}/>
    </div>
  )
}

export default SearchBar;