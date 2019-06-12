import React, { Component } from "react";
import Card from "./Card.jsx";
import cdata from "../carddata.json";
import "../css/Card.css";
import axios from "axios";

class Grid extends Component {
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
    let cards = this.state.data.map(campus => (
      <div>
        <Card
          name={campus.name}
          address={campus.address}
          img={campus.imageUrl}
          description={campus.description}
          id={campus.id}
        />
      </div>
    ));
    return <div className="card-container">{cards}</div>;
  }
}

export default Grid;
