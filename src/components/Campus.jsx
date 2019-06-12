import React, { Component } from "react";
// import sdata from "../studentdata.json";
import Card from "./Card";
import axios from "axios";
<<<<<<< HEAD
import { METHODS } from "http";
=======
>>>>>>> d91ec1538851e1b38d8d64343eae0396c9ade629

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

  // render() {
  //   let cards = this.state.data.map(card => (
  //   axios
  //     .get("https://campus-cms.herokuapp.com/api/campuses")
  //     .then(res => {
  //       return res.data;
  //     })
  //     .then(campuses => {
  //       this.setState({ data: campuses });
  //     });
  // }
  
  render() {
    let cards = this.state.data.map(card => (
      <div className="cardbox">
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
