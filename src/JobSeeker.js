import React, { Component } from 'react'
import Select from 'react-select';
//import 'react-select/dist/react-select.css';
 
import {JobSeekerStyles} from "./JobSeekerStyles"
//import {Styles} from "./../Styles/Styles";
import {css} from "aphrodite";
//import {LoginPageStyles} from "./../Styles/Styles";
 
/*
const scaryAnimals = [
    { label: "Alligators", value: 1 },
    { label: "Crocodiles", value: 2 },
    { label: "Sharks", value: 3 },
    { label: "Small crocodiles", value: 4 },
    { label: "Smallest crocodiles", value: 5 },
    { label: "Snakes", value: 6 },
  ];
*/

class JobSeeker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            skills: [
                { label: "C++", value: 1 },
                { label: "Java", value: 2 },
                { label: "Python", value: 3 },
                { label: "ReactJS", value: 4 },
                { label: "Android", value: 5 }
              ],
            experience: [
                { label: "0-1", value: 1 },
                { label: "2", value: 2 },
                { label: "3", value: 3 },
                { label: "4", value: 4 },
                { label: "5", value: 5 }
            ],
            industry: [
                { label: "Computer Software", value: 1 },
                { label: "Banking", value: 2 },
            ],
            title: [
                { label: "Developer", value: 1 },
                { label: "Manager", value: 2 },
            ],
            location: [
                { label: "Chennai", value: 1 },
                { label: "Bangalore", value: 2 },
            ],
        };

    }

    render() {

        return (
            <div className={"col-12 " +css(JobSeekerStyles.div)}>
                 <div className = {css(JobSeekerStyles.panel, JobSeekerStyles.white)}>
                    <div className = "row justify-content-center">
                        <div className = "panel">
                            <h1 className = {css(JobSeekerStyles.salaryheader)}> Predict Salary </h1> 
                            
                            <form className = "predictSalaryForm" onSubmit = {this.forgotPassword} className={"col-md-12 "  +css(JobSeekerStyles.form)}>
                                SKILLS<Select options = {this.state.skills} isMulti="true"/>
                                <br /> 
                                EXPERIENCE (in years)<Select options = {this.state.experience}/>
                                <br />
                                INDUSTRY<Select options = {this.state.industry}/>
                                <br />
                                JOB TITLE<Select options = {this.state.title}/>
                                <br />
                                JOB LOCATION<Select options = {this.state.location}/>
                                <br />
                                <center><button className = {css(JobSeekerStyles.button)} type = "submit" > Predict Salary </button></center>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
/*render() {

    return (
        <div className={"col-12 " +css(Styles.div)}>
            <div className = {css(LoginPageStyles.loginPanel, Styles.white)}>
                <div className = "row justify-content-center">
                    <div className = "loginPanel">
                        <h1> Predict Salary </h1> 
                        
                        <form className = "predictSalaryForm" onSubmit = {this.forgotPassword} className={"col-md-12 " +css(LoginPageStyles.form)}>
                            <Select options = {scaryAnimals}/>
                            <input className={css(Styles.input, LoginPageStyles.input)} autoFocus onChange = {this.onChange} type = "email" placeholder = "Email" id = "email" autoComplete = "off" />
                            <br /> <br />
                            <button className = {css(Styles.button, LoginPageStyles.button)} type = "submit" > Send Reset Link </button>
                        </form>
                        <span className = {this.state.formError}> {this.state.error}  </span>
                            <br/><br/>
                        <span className = {this.state.formResetLink}> Please click on the reset link which has been sent to your email address </span> <br /> <br />
                    </div>
                </div>
            </div>
        </div>
    );
}
*/
}

export default JobSeeker;