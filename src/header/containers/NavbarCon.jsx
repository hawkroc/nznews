import React, { Component } from 'react';
import { SearchButton,MenuButton} from 'react-bootstrap';
import { connect } from 'react-redux';
import AutoAffix from 'react-overlays/lib/AutoAffix';
import {handleSelect} from '../actions/actions';
import Searcher from './Searcher';
const navbarInstance = (
 
<div className="header">
    <div className="topbar">
        <div className="topbar-left">
        </div>
        <div className="topbar-right">
        </div>
    </div>

    <div className="menubar">
        <div className="logo">
        </div>
        <div className="main-menu">
        </div>
        <div className="menu-buttons">
          
        </div>
    </div>

    <div className="dropmenu">
    </div>
</div>

);

class NavbarCon extends Component {
    render() {
        return (  

  <div className='affix-example'>

        <AutoAffix viewportOffsetTop={15} container={this}>
          {navbarInstance}
        </AutoAffix>
     
        </div>


        );
    }
}

export default NavbarCon;


