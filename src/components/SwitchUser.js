import React, { Component } from 'react';

import JobSeekerStyles from "../styles/js/JobSeekerStyles";
import { css } from "aphrodite";

class SwitchUser extends Component {

    adminRouteChange = () => {
        this.props.history.push('/train');
    }

    jobSeekerRouteChange = () => {
        this.props.history.push('/predict');
    }

    render() {
        return (
            <div className = "App container">
                    <div className={"col-12 " + css(JobSeekerStyles.div)}>
                            <div className = {css(JobSeekerStyles.panel, JobSeekerStyles.white)}>
                                <div className = "row justify-content-center">
                                    <div className = "panel">
                                        <h1 className = {css(JobSeekerStyles.salaryheader)}> Select User </h1> 

                                        <br></br>
                                        <center>
                                            <button 
                                                className = {css(JobSeekerStyles.button)} 
                                                onClick={this.adminRouteChange} > 
                                                Admin
                                            </button>
                                        </center>

                                        <br></br>
                                        <center>
                                            <button 
                                                className = {css(JobSeekerStyles.button)} 
                                                onClick={this.jobSeekerRouteChange} > 
                                                Job Seeker
                                            </button>
                                        </center>
                                        <br></br>
                                    
                                    </div>
                                </div>
                            </div>
                        </div> 
                </div>
        );
    }
}

export default SwitchUser;