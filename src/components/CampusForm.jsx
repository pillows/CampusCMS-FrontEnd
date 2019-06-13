import React, { Component } from "react";
import Students from "../studentsdata.json";
import StudentCard from "./StudentCard";
import { connect } from "react-redux";


class FormEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: props.firstname,
            lastname: props.lastname,
            savefirstname: props.firstname,
            savelastname: props.lastname,
            isForm: false
        };

    }
    show = () => {
        this.setState({isForm: true});
    }
    saveText = () => {
        this.setState({
            savefirstname: this.state.firstname,
            savelastname: this.state.lastname,
            isForm: false
        });
    }
    discard = () => {
        this.setState({
            firstname: this.state.savefirstname,
            lastname: this.state.savelastname,
            isForm: false
        });
    }
    onInputChange = () => {
        this.setState({firstname: document.getElementById("firstname").value});
        this.setState({lastname: document.getElementById("lastname").value});
    }
    render() {
        let form =
            <form>
              <input
                value={this.state.firstname}
                type="text"
                id="firstname"
                onChange={this.onInputChange}
              />
              <input
                value={this.state.lastname}
                type="text"
                id="lastname"
                onChange={this.onInputChange}
              />
            </form>;
        let textElement= <div>{this.state.firstname+ " " + this.state.lastname}</div>;
        let editButton = <button onClick={this.show}>Edit</button>;
        let saveButtons =
            <span>
              <button className="save"onClick={this.saveText}>Save</button>
              <button className="cancel"onClick={this.discard}>Cancel</button>
            </span> ;
        let element =
            <div>
              <h3 className="component-heading"></h3>
            <div className="component-div">
              {this.state.isForm ? form : textElement}<br/>
              {this.state.isForm ? saveButtons : editButton}
            </div>
            </div>;
        return element;
    }
}
export default connect(mapState)(ViewCampus);
