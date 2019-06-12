import React, { Component } from "react";
import sdata from "../studentdata.json";
import Card from "./Card";
import axios from "axios";
import { METHODS } from "http";

class Campus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({ data: sdata });

    //routes.post('https://campus-cms.herokuapp.com/api/campuses/create', campuses.create);
    // axios.post("https://campus-cms.herokuapp.com/api/campuses/create", {
    //   name: "Hunter College",
    //   address: "695 Park Ave, New York, NY 10065",
    //   description: "HOW DARE YOU",
    //   imgUrl: "http://www.hunter.cuny.edu/admissions/repository/images/classic-hunter-nyc-cabs.jpg"
    // }).then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  }
  render() {
    let cards = this.state.data.map(card => (
        <Card
          name={card.name}
          number={card.number}
          img={card.img}
          description={card.description}
          work={card.work}
        />
    ));
    return <div className="card-container">{cards}</div>;
  }
}

export default Campus;
