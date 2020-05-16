import React from "react";

import SearchBar from "../molecules/SearchBar";
import SiteLogo from "../atoms/SiteLogo";

import "./HomePage.less";

const HomePage = () => {
  return (
    <div className="content">
      <SiteLogo className="content-logo" />
      <h1 className="content-title">Learn OER</h1>
      <SearchBar className="content-search" />
    </div>
  );
};

export default HomePage;
