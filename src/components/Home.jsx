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
        <Grid />
        <CampusListing />
        <Students />
      </div>
    );
  }
}

export default Home;
