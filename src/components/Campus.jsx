import React, { Component } from "react";
// import sdata from "../studentdata.json";
import Card from "./Card";
import axios from "axios";

class Campus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios
      .get("https://campus-cms.herokuapp.com/api/campuses")
      .then(res => {
        return res.data;
      })
      .then(campuses => {
        this.setState({ data: campuses });
      });
  }
  render() {
    let cards = this.state.data.map(card => (
      <div>
        <Card
          name={card.name}
          number={card.number}
          img={card.img}
          description={card.description}
          work={card.work}
        />
      </div>
    ));
    return <div className="card-container">{cards}</div>;
  }
}

export default Campus;
