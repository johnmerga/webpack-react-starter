import React from "react";

import headerImg from "../assets/react-2.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={headerImg} className="header--img" />
      <h2 className="header--title"> React Starter</h2>
    </header>
  );
};
export default Header;
