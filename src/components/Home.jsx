import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from "react-router";
import Grid from "./Grid";
import AppRouter from "./navbar";
import CampusListing from "./CampusListing";
import Students from "./Students";
import { connect } from "react-redux";
import { setCampuses } from "../store/campuses";
import { setStudents } from "../store/students";

const axios = require("axios");

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get(`https://campus-cms.herokuapp.com/api/campuses`).then(res => {
      this.props.setCampuses(res.data);
      return res.data;
    });

    axios.get(`https://campus-cms.herokuapp.com/api/students`).then(res => {
      this.props.setStudents(res.data);
      return res.data;
    });
  }

  render() {
    return (
      // <Redirect to="/Student/" component={Students} />
      <div className="card-container-outer">
        <div className="card-container">
          <Grid />
        </div>
      </div>
    );
  }
}

const mapState = state => {
  return {
    campuses: state.campuses.campuses,
    students: state.students.students
  };
};

const mapDispatch = dispatch => {
  return {
    setCampuses: campuses => {
      const content = { campuses };
      dispatch(setCampuses(content));
    },
    setStudents: students => {
      const content = { students };
      dispatch(setStudents(content));
    }
  };
};

export default connect(
  mapState,
  mapDispatch
)(Home);
