import React, { Component } from 'react';
import { Nav,NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import {handleSelect} from '../actions/actions';


class TestNav extends Component {
    
    render() {
        const { selectedKey, handleSelect } = this.props;
        return (
          <div>
            <Nav bsStyle="pills" activeKey={selectedKey} onSelect={handleSelect}>
                <NavItem eventKey={1} href="/home">NavItem 1 content</NavItem>
                <NavItem eventKey={2} title="Item">NavItem 2 content</NavItem>
                <NavItem eventKey={3} disabled>NavItem 3 content</NavItem>
            </Nav>

</div>


        );
    }
}

const mapStateToProps = (state) => {
  return {
    selectedKey: state.TestReducer.selectedKey
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSelect: (selectedKey) => {
      dispatch(handleSelect(selectedKey))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(TestNav);


