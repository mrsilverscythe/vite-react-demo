import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import List from "./components/List";
import "./components/css/App.css";
import TicTacToe from "./components/TicTacToe";
import Wordle from "./components/Wordle";

const App = () => {
  const [dark, setDark] = useState(true)
  const css = dark ? "inverted" : ""
  return (
    <div className="container" style={dark ? { backgroundColor: "black" } : {}}>
      <div className="main" >
        <NavBar dark={dark} setDark={setDark} />
        <Routes>
          <Route path="/" element={<HomePage css={css} />} />
          <Route path="/search" element={<Search css={css} />} />
          <Route path="/list" element={<List css={css} />} />
          <Route path="/calculator" element={<Calculator css={css} />} />
          <Route path="/tictactoe" element={<TicTacToe css={css} />} />
          <Route path="/wordle" element={<Wordle css={css} />} />
        </Routes>
      </div>
      <div className="footer">
        <Footer css={css} />
      </div>
    </div>
  )
};

export default App;
