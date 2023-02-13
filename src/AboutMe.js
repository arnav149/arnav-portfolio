import React from 'react';
import './AboutMe.css';

class AboutMe extends React.Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return(
            <div class="wrapper">
                <div class="tilt-div">
                    <p> It's me... your friendly neighborhood Software Engineer </p>
                    <p>Hey! This is Arnav, I'm a Software Engineer at Credit Karma who enjoys building things.</p>
                    <p>Look at the work experience section to learn more about my role at Credit Karma 
                        and my past experiences.</p>
                </div>
            </div>
        );
    }
}

export default AboutMe;