import React, { Component } from 'react';
import './Menubar.css';
import Search from './Search';
import Dropmenu from '../components/Dropmenu';
import {Grid} from 'react-bootstrap';

class Menubar extends Component {
    render() {
        return (
            <div className="menubar">
                <Grid>
                    <div className="logo">
                        Logo Here
                    </div>
                    <div className="main-menu">
                        <ul>
                            <li className="menu-item">游览中国</li>
                            <li className="menu-item">在中国教书</li>
                            <li className="menu-item">新闻与活动</li>
                            <li className="menu-item">关于我们</li>
                            <li className="menu-item">联系我们</li>                
                        </ul>
                    </div>
                    <Dropmenu />
                    <Search />
                </Grid>
            </div>
        );
    }
}

export default Menubar;