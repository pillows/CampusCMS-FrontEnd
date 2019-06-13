import React, { Component } from "react";
import StudentCard from "./StudentCard";
import cdata from "../studentsdata.json";
import "../css/Card.css";

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.setState({ data: cdata });
  }

  render() {
    let cards = this.state.data.map(card => (
      <div>
        <StudentCard
          firstname={card.firstname}
          lastname={card.lastname}
          img={card.img}
          GPA={card.GPA}
          email={card.email}
          campus={card.campus}
          id={card.id}
        />
      </div>
    ));
      return (
          <div className="card-container-outer">
            <div className="card-container">{cards}</div>
          </div>
      );
  }
}

export default Students;
