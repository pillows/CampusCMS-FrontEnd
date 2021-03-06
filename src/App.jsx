import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./components/navbar";
import Home from "./components/Home";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <AppRouter/> 
    </div>
  );
}

export default App;
