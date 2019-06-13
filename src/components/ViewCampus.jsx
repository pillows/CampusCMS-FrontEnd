import React, { Component } from "react";
import Students from "../studentsdata.json";
import StudentCard from "./StudentCard";
import { connect } from "react-redux";

const axios = require("axios");

class ViewCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campuses: {},
      students: []
    };
  }

  componentDidMount() {
    const campusId = this.props.match.params.id;
    axios
      .get(`https://campus-cms.herokuapp.com/api/campuses/${campusId}`)
      .then(res => {
        console.log(res.data);
        return res.data;
      })
      .then(campus => {
        this.setState({ students: campus.students }, function() {
          console.log(this.state.students);
        });
      });
  }

  render() {
    let cards = [];

    cards = this.state.students.map(card => (
      <StudentCard
        firstname={card.firstName}
        lastname={card.lastName}
        img={card.imageUrl}
        GPA={card.GPA}
        email={card.email}
      />
    ));

    return <div className="card-container">{cards}</div>;
  }
}

const mapState = state => {
  return {
    campuses: state.campuses.campuses
  };
};

export default connect(mapState)(ViewCampus);
