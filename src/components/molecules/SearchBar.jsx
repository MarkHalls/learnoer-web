import React, { useEffect, useState } from "react";

import SearchIcon from "../atoms/SearchIcon";

import "./SearchBar.less";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = () => {};
  return (
    <form id="search" role="search" onSubmit={handleSubmit}>
      <div class="search">
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
