import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import actions from "../../actions";

import SearchIcon from "../atoms/SearchIcon";

import "./SearchBar.less";

const SearchBar = ({ className }) => {
  const searchTermFromState = useSelector((state) => state.searchTerm);
  const [searchTerm, setSearchTerm] = useState(searchTermFromState);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(actions.searchBooks(searchTerm));
    history.push("/results");
  };

  return (
    <form
      id="search"
      className={className}
      role="search"
      onSubmit={handleSubmit}
    >
      <div className={"search"}>
        <label htmlFor="search" className="search-label">
          <SearchIcon />
        </label>
        <input
          id="search"
          className="search-input"
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  );
};

export default SearchBar;
