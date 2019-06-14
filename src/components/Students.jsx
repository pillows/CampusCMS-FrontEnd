import React, { Component } from "react";
import StudentCard from "./StudentCard";
import cdata from "../studentsdata.json";
import "../css/Card.css";
import { connect } from "react-redux";


class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log(this.props.students);
    this.setState({ data: this.props.students }, function(){
      console.log(this.state.data);
    });
  }

  render() {
    // let cards = this.state.data.map(card => (
    //   <div>
    //     <StudentCard
    //       firstname={card.firstname}
    //       lastname={card.lastname}
    //       img={card.img}
    //       GPA={card.GPA}
    //       email={card.email}
    //       campus={card.campus}
    //     />
    //   </div>
    // ));
      return (
          <div className="card-container-outer">
            {/* <div className="card-container">{cards}</div> */}
          </div>
      );
  }
}

const mapState = state => {
  return {
    students: state.students.students
  };
};

export default connect(
  mapState,
)(Students);

