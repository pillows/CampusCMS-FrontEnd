import React, { Component } from "react";
import Card from "./Card.jsx";
import cdata from "../carddata.json";
import "../css/Card.css";

class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({ data: cdata });
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

export default Grid;
