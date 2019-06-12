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
      .get(`https://campus-cms.herokuapp.com/api/campuses/1`)
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
    console.log("View Campus");
    let students = this.state.students.map(student => (
      <div>{student.firstName}</div>
    ));
    return (
      <div>
        helkjferf
        {students}
      </div>
    );
  }
}

export default ViewCampus;
