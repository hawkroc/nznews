import React, { Component } from 'react';
import Topbar from './Topbar';
import Menubar from '../containers/Menubar'

class Header extends Component {
    render() {
        return (
            <div className="header">
                <Topbar />
                <Menubar />
            </div>
        );
    }
}

export default Header;