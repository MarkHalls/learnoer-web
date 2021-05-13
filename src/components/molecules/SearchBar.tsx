import React, { useState, FC } from "react";
import { useHistory, useLocation } from "react-router-dom";

import SearchIcon from "../atoms/SearchIcon";

import "./SearchBar.less";

type Props = {
  className?: string;
};

const SearchBar: FC<Props> = ({ className }) => {
  const [searchTerm, setSearchTerm] = useState(
    new URLSearchParams(useLocation().search).get("search") ?? ""
  );

  const history = useHistory();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    history.push(`/results?search=${searchTerm}`);
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
