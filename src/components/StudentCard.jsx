import React, { Component } from "react";
import PropTypes from "prop-types";
import "../css/Card.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class StudentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { firstname, lastname, GPA, email, campus, img } = this.props;
    return (
      <div className="cardbox">
        <img src={img} className="card-image" />
        <div className="card-text">
          <h3>{firstname +" "+ lastname}</h3>
          <ul>
            <li>{GPA}</li>
            <li>{email}</li>
            <li>{campus}</li>
          </ul>
          {/* <Router>
            <Link to="/Campus">View</Link>
          </Router> */}
        </div>
      </div>
    );
  }
}

export default StudentCard;
