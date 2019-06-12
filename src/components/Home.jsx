import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import Grid from "./Grid";
import AppRouter from "./navbar";
import CampusListing from "./CampusListing";
import Students from "./Students";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
<<<<<<< HEAD
      <Redirect to="/Student/" component={Students} />
=======
      <div>
        <div className="card-container-outer">
          <div className="card-container">
            <Grid/>
          </div>
        </div>
        <Grid />
      </div>
>>>>>>> d91ec1538851e1b38d8d64343eae0396c9ade629
    );
  }
}

export default Home;
