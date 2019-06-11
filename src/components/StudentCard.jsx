import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/Card.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { firstname, lastname, img } = this.props;
    return (
      <div class="cardbox">
        <img src={img} className="card-image" />
        <div className="card-text">
          <h3>{firstname}</h3>
          <h3>{lastname}</h3>
          <h3>{img}</h3>
          {/* <Router>
            <Link to="/Campus">View</Link>
          </Router> */}
        </div>
      </div>
    );
  }
}

export default StudentCard;
