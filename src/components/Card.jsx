import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/Card.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { name, number, img, description, work } = this.props;
    return (
      <div className="cardbox">
        <img src={img} />
        <div className="card-text">
          <h3>{name}</h3>
          <ul>
            <li>{number}</li>
            <li>{description}</li>
            <li>{work}</li>
          </ul>
          <Router>
            <Link to="/Campus">View</Link>
          </Router>
        </div>
      </div>
    );
  }
}

export default Card;
