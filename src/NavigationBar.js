import React from 'react';
import './NavBar.css';

class NavBar extends React.Component {
    constructor() {
        super();
        this.state = {
          index: 0,
        }
    }

    onIndexChange = (currIndex) => {
        this.setState({index: currIndex})
    }

    render() {
        return(
            <div class="topnav">
                <a class = {(this.state.index === 0) ? "active" : ""} onClick = {() => this.onIndexChange(0)} href="#about-me">About Me</a>
                <a class = {(this.state.index === 1) ? "active" : ""} onClick = {() => this.onIndexChange(1)} href="#past-experience">Past Experience</a>
                <a class = {(this.state.index === 2) ? "active" : ""} onClick = {() => this.onIndexChange(2)} href="#projects">Projects</a>
            </div>
        );
    }
}

export default NavBar;