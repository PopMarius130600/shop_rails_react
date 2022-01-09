import React from 'react';
import { useState } from 'react';

import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  let navigate = useNavigate();
  const [ searchValue, setSearchValue ] = useState("");

  const handleSubmit = event => { 
    navigate("../items/" + searchValue, { replace: true});
    event.preventDefault();
    event.stopPropagation();
  };

  const handleChange = event => {
    setSearchValue(event.target.value);
  };

  return (
   <form onSubmit={handleSubmit}>
      <input
        type="text"
        id="header-search"
        placeholder="Search..."
        name="search" 
        value={searchValue}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
   </form>
  )
};

export default SearchBar;