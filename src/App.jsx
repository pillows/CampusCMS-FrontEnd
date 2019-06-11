import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./components/navbar";
import Home from "./components/Home";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import CampusListing from "./components/CampusListing";
import Students from "./components/Students";

function App() {
  return (
    <div className="App">
      <div>
        {/* <AppRouter /> */}
        {/* <Home /> */}

        <BrowserRouter>
          <div className="App">
            {/* <Route exact path="/" render={props => <PageLayout component={Login} {...props} />} /> */}
            <Route exact path="/" component={Home} />
            <Route path="/campus" component={CampusListing} />} />
            <Route path="/students" render={Students} />
          </div>
        </BrowserRouter>

        <div className="" />
      </div>
    </div>
  );
}

export default App;
