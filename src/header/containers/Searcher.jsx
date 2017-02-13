import React, { Component } from 'react';
import { HelpBlock,FormControl,ControlLabel,FormGroup,form,Button} from 'react-bootstrap';
import { connect } from 'react-redux';


class Searcher extends Component {

  // getInitialState=()=> {
  //   return {
  //     value: ''
  //   };
  // };

   constructor(props, context) {
    super(props, context);
    this.state = {
      value: ''
    };
  };

  getValidationState=()=> {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  };

  handleChange=(e)=> {
    this.setState({ value: e.target.value });
  };

  render() {
        return (      
  <div >

      <form>
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
        
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          
        </FormGroup>
      </form>
          <Button >search</Button>
        </div>


        );
    }
}


export default Searcher;