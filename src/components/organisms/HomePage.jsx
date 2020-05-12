import React from "react";

import SearchBar from "../molecules/SearchBar";
import SiteLogo from "../atoms/SiteLogo";

import "./HomePage.less";

const HomePage = () => {
  return (
    <div className="content">
      <SiteLogo />
      <SearchBar />
    </div>
  );
};

export default HomePage;
