import React, { Component } from "react";
import sdata from "../studentdata.json";
import Card from "./Card";

class Campus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({ data: sdata });
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
      return (
          <div className="card-container-outer">
            <div className="card-container">{cards}</div>
          </div>
      );
  }
}

export default Campus;
