import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import {Link} from 'react-router-dom';
import { thisExpression } from '@babel/types';

class CampusListing extends Component{
    constructor(){
        super();
        this.state={
            campus: []
        }
    }

    render() {
        return (
            <div>
                <h1>All Campuses</h1>
            </div>
        );
    }
}

export default CampusListing;