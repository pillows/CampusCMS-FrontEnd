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
    const { name, number, img, description, work, id } = this.props;
    return (
      <div class="cardbox">
        <img src={img} className="card-image" />
        <div className="card-text">
          <h3>{name}</h3>
          <h3>{number}</h3>
          <h3>{description}</h3>
          <h3>{work}</h3>
          <Router>
            <Link to="/viewcampus/">View</Link>
          </Router>
        </div>
      </div>
    );
  }
}

export default Card;
