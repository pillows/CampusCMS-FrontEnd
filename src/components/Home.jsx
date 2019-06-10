import React, { Component } from "react";
import Grid from "./Grid";
import AppRouter from "./navbar";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Grid />
      </div>
    );
  }
}

export default Home;
