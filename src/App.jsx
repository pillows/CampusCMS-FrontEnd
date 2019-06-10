import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./components/navbar";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <div>
        <AppRouter />
        <Home />
        <div className="" />
      </div>
    </div>
  );
}

export default App;
