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
      const { firstname, lastname, GPA, email, campus, img , id } = this.props;
    return (
      <div className="cardbox">
        <img src={img} className="card-image" />
        <div className="card-text">
          <h3>{firstname}{lastname}</h3>
          <h3>{email}</h3>
          <h3>{campus}</h3>
          <div className="button-list-container">
            <ul>
              <li>
                 {/* onclick calls one of the props  */}
                  <button onClick="showModal" className="green">View</button>
              </li>
              <li>
                <button className="blue">Edit</button>
              </li>
              <li>
                <button className="red">Delete</button>
              </li>
            </ul>
        </div>
        </div>
      </div>
    );
  }
}

export default StudentCard;
