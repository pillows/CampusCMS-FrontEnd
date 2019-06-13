import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/Card.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ViewCampus from "./ViewCampus";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, address, img, description, work, id } = this.props;
    const viewURL = `/viewcampus/${id}`;
    return (
      <div className="cardbox">
        <img src={img} />
        <div className="card-text">
          <h3>{name}</h3>
          <ul>
            <li>{address}</li>
            <li>{description}</li>
            <li>{work}</li>
          </ul>

          <Link to={viewURL}>
            <button>View</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Card;
