import React, { Component } from "react";
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
      <div>
        <div className="card-container-outer">
          <div className="card-container">
            <Grid/>
          </div>
        </div>
        <Grid />
      </div>
    );
  }
}

export default Home;
