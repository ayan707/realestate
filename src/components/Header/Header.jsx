import React from "react";
import "./Header.css";
import {AiFillBell} from 'react-icons/ai'

const Header = () => {
  return (
    <div>
      <h3>Your location</h3>
      <div className="header__location">
        <h1 className="h1__location">Apalachin, NY</h1>

        <div className="div__bell">
          <span>3</span>
          <AiFillBell className="bell__icon" />
        </div>
      </div>
    </div>
  );
};

export default Header;
