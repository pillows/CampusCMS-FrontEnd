import React, { Component } from "react";
import Students from "../studentsdata.json";
import StudentCard from "./StudentCard";

const axios = require("axios");

class ViewCampus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campus: {},
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
        img={card.img}
        GPA={card.GPA}
        email={card.email}
      />
    ));

    return <div className="card-container">{cards}</div>;
  }
}

export default ViewCampus;
