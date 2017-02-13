import React, { Component } from 'react';
import { Glyphicon,Col,Nav,NavItem,Navbar,NavDropdown,MenuItem} from 'react-bootstrap';
import { connect } from 'react-redux';
import AutoAffix from 'react-overlays/lib/AutoAffix';
import {handleSelect} from '../actions/actions';
import Searcher from './Searcher';
const navbarInstance = (
  <Navbar>
    <Col xs={4} md={2}>
    <Navbar.Header >
      <Navbar.Brand>
        <a href="#">新中友协Logo</a>
      </Navbar.Brand>
    </Navbar.Header>
    </Col>
    <Nav>
      <NavItem eventKey={1} href="#">首页</NavItem>
      <NavItem eventKey={2} href="#">游览中国</NavItem>
      <NavItem eventKey={2} href="#">在中国教书</NavItem>
      <NavItem eventKey={2} href="#">新闻活动</NavItem>
    <NavItem eventKey={4} ><Searcher/></NavItem>

      <NavDropdown eventKey={3} title="more"  id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>

      
    </Nav>
  </Navbar>
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


