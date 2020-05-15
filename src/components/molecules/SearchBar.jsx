import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import actions from "../../actions";

import SearchIcon from "../atoms/SearchIcon";

import "./SearchBar.less";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.searchBooks(searchTerm));
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
