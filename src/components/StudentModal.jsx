import React, { Component , props } from "react";
import ReactModal from 'react-modal';
import PropTypes from "prop-types";
import { handleOpenModal , handleCloseModal } from "../store/modal";

import "../css/Card.css";

import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class StudentModal extends Component {
    constructor () {
        super(props);
        this.state = {
            showModal: true
        };

    }

    render () {
        return (
            <div>
              <button onClick={this.handleOpenModal}>Trigger Modal</button>
              <ReactModal
                isOpen={this.state.showModal}
                contentLabel="Minimal Modal Example"
              >
                <button onClick={this.handleCloseModal}>Close Modal</button>
              </ReactModal>
            </div>
        );
    }

};

const mapState = (state) => {
    return {
        showModal: state.showModal
    };
};

const mapDispatch = (dispatch) => {
    return {
        handleOpenModal: () => dispatch(handleOpenModal())
    };

};

export default connect(mapState, mapDispatch)(StudentModal);
