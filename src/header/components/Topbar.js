import React, { Component } from 'react';
import {Grid} from 'react-bootstrap';
import './Topbar.css'

class Topbar extends Component {
    render() {
        return (
            <div className="topbar">
                <Grid>
                    <div className="topbar-left">
                        <span>2017年2月15日 </span>
                        <span> | English </span>
                        <span> | 繁体</span>
                    </div>
                    <div className="topbar-right">
                        <span>Facebook </span>
                        <span> | Twitter </span>
                        <span> | Instgram </span>
                        <span> | LinkedIn</span>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default Topbar;