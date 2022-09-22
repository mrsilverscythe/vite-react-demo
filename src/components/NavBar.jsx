import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ dark, setDark }) => {
  return (
    <div className={dark ? "ui inverted menu" : "ui menu"}>
      <Link to="/" className="item">Home</Link>
      <Link to="search" className="item">Search</Link>
      <Link to="list" className="item">Articles</Link>
      <Link to="calculator" className="item">Calculator</Link>
      <Link to="wordle" className="item">Wordle</Link>
      <Link to="tictactoe" className="item">Tic Tac Toe</Link>
      <div className="field item inverted">
        <div className="ui toggle checkbox inverted">
          <input type="checkbox" name="gift" defaultChecked={dark} onChange={() => setDark(!dark)} />
          <label></label>
        </div>
      </div>
    </div>)
};

export default NavBar;
