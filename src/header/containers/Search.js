import React, { Component } from 'react';
import {FormGroup,FormControl,Button} from 'react-bootstrap';
import {Glyphicon} from 'react-bootstrap';
import './Search.css'

class Search extends Component {
    render() {
        return (
            <div className="top-search">
                <FormGroup>
                    <FormControl type="text" placeholder="请输入搜索内容" />
                    <Button type="submit">搜索</Button>
                    <Glyphicon glyph="search" />
                </FormGroup>
                
        
                
            </div>
        );
    }
}

export default Search;