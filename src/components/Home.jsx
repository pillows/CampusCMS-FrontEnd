import React, { Component } from "react";
import Grid from "./Grid";
import AppRouter from "./navbar";
import CampusListing from "./CampusListing";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Grid />
        <CampusListing />
      </div>
    );
  }
}

export default Home;
