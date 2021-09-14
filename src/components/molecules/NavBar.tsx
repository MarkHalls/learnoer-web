import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import SearchBar from "./SearchBar";
import SiteLogo from "../atoms/SiteLogo";
import SignInOut from "../atoms/SignInOut";

import "./NavBar.less";

const NavBar = () => {
  const location = useLocation();

  const checkRootPath = () => location.pathname === "/";

  return (
    <>
      {!checkRootPath() && (
        <div className="nav">
          <NavLink to="/" className="nav-logo">
            <SiteLogo className="nav-logo" />
          </NavLink>
          <h1 className="nav-title">Learn OER</h1>
          <SearchBar className={"nav-search"} />
          <SignInOut className={"nav-signin"} />
        </div>
      )}
    </>
  );
};

export default NavBar;
