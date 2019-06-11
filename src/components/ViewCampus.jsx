import React, { Component } from "react";
import Students from "../studentsdata.json";

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
    axios
      .get(`https://campus-cms.herokuapp.com/campuses/1`)
      .then(res => {
        return res.json();
      })
      .then(campus => {
        this.setState({ campus, students: campus.students });
      });
  }

  render() {
    console.log("View Campus");
    let students = this.state.students.map(student => (
      <div>{student.firstname}</div>
    ));
    return <div>{students}</div>;
  }
}

export default ViewCampus;
