import React, { Component } from 'react';
import {Glyphicon} from 'react-bootstrap';
import './Dropmenu.css'

class Dropmenu extends Component {
    render() {
        return (
            <div className="dropmenu">
                <Glyphicon glyph="menu-hamburger" />
            </div>
        );
    }
}

export default Dropmenu;