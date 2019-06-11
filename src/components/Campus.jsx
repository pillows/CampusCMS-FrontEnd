import React, { Component } from "react";
import sdata from "../studentdata.json";
import SpaceCard from "./SpaceCard";

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
        <SpaceCard
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
