import React, { Component } from "react";

class Campus extends Component {
  state = {};
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
      )
      ;
  }
}

export default Campus;
