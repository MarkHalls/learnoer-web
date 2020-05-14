import React, { useEffect, useState } from "react";
import axios from "axios";

import SearchIcon from "../atoms/SearchIcon";

import "./SearchBar.less";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`http://localhost:3000/api/search/${searchTerm}`)
      .then((res) => console.log(res.data));
  };
  return (
    <form id="search" role="search" onSubmit={handleSubmit}>
      <div className="search">
        <label htmlFor="search" className="search-label">
          <SearchIcon />
        </label>
        <input
          id="search"
          className="search-input"
          type="text"
          placeholder="Search for Title or ISBN"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
