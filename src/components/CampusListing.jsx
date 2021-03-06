import React, { Component } from "react";
import { connect } from "react-redux";

class CampusListing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { campuses, students } = this.props;
    return (
      <div>
        {/* Redux Campus:
        {campuses}
        <br /> hj
        Redux Student:
        {students}
        <br /> */}
      </div>
    );
  }
}

const mapState = state => {
  return {
    campuses: state.campuses,
    students: state.students
  };
};

export default connect(mapState)(CampusListing);
