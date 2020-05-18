import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import actions from "../../actions";
import SearchBar from "../molecules/SearchBar";
import SiteLogo from "../atoms/SiteLogo";

import "./HomePage.less";

const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.setSearchTerm(""));
  }, []);

  return (
    <div className="content">
      <SiteLogo className="content-logo" />
      <h1 className="content-title">Learn OER</h1>
      <SearchBar className="content-search" />
      <p className="content-description">
        Search by title or isbn and we'll find the closest matching book that
        can be read online for free.
      </p>
    </div>
  );
};

export default HomePage;
