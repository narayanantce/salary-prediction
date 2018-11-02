import React, { Component } from "react";
import Select from "react-select";
 
import JobSeekerStyles from "../styles/js/JobSeekerStyles";
import { css } from "aphrodite";

import { ACTION_BACKEND_URL } from '../constants'

class JobSeeker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            skills: [],
            experience: "",
            industry: [],
            location: [],
            industry_selected : "",
            skills_selected : "",
            location_selected : "",
            success: "",
            formSuccess: "hidden",
        };

        this.onChange = this.onChange.bind(this);
        this.handleIndustryChange = this.handleIndustryChange.bind(this);
        this.handleSkillChange = this.handleSkillChange.bind(this);
        this.handleLocationChange = this.handleLocationChange.bind(this);
        this.predictSalary = this.predictSalary.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    handleIndustryChange = industry_selected => {
        this.setState({ industry_selected });
    }

    handleSkillChange = skills_selected => {
        this.setState({ skills_selected });
    }

    handleLocationChange = location_selected => {
        this.setState({ location_selected });
    }

    componentDidMount() {
        (async () => {
            let response;
            let content;
            let skillsArray = [];
            let industryArray = [];
            let locationArray = [];

            response = await fetch(ACTION_BACKEND_URL + "skills", {           
                method: 'GET',
            });

            if (response.status === 200) {
                content = await response.json();
                for(let i = 0; i < content.data.length; i++) {
                    let skilljson = {label: content.data[i].skills, value: content.data[i].skills};
                    skillsArray.push(skilljson);
                }
                this.setState({skills: skillsArray});
            }
    
            response = await fetch(ACTION_BACKEND_URL + "industry", {           
                method: 'GET',
            });

            if (response.status === 200) {
                content = await response.json();
                for(let i = 0; i < content.data.length; i++) {
                    let industryjson = {label: content.data[i].industry, value: content.data[i].industry};
                    industryArray.push(industryjson);
                }
                this.setState({industry: industryArray});
            }

            response = await fetch(ACTION_BACKEND_URL + "location", {           
                method: 'GET',
            });

            if (response.status === 200) {
                content = await response.json();
                let locationSet = new Set();
                let locationjson;
                for(let i = 0; i < content.data.length; i++) {
                    let locations = content.data[i].joblocation_address.split(', ');
                    for(let j = 0; j < locations.length; j++) {
                        locationSet.add(locations[j]);
                    }
                }

                let location_array = Array.from(locationSet);
                for(let j = 0; j < location_array.length; j++) {
                    locationjson = {label: location_array[j], value: location_array[j]};
                    locationArray.push(locationjson);
                }
                this.setState({location: locationArray});
             }
        })();
    }

    predictSalary = (event) => {
        event.stopPropagation();
        event.preventDefault();
        (async () => {
            const response = await fetch(ACTION_BACKEND_URL 
                + "predict?skills=" + this.state.skills_selected.label
                + "&yearsExperience=" + this.state.experience 
                + "&industry=" + this.state.industry_selected.label 
                + "&location=" + this.state.location_selected.label, {           
                method: 'GET',
            });

            if (response.status === 200) {
                const content = await response.json();
                let predictedSalary = parseInt(content.predicted_salary);
                let rangemin = parseInt(predictedSalary * 0.9);
                let rangemax = parseInt(predictedSalary * 1.1);
                this.setState({success: "Predicted Salary Range: " + rangemin + " to " + rangemax});
                this.setState({formSucess: css(JobSeekerStyles.formSuccess)});
                alert("Successful");
            } else if(response.status === 500) {
                alert("ISE");
            } else if(response.status === 404) {
                event.preventDefault();
                alert("Not found");
            }
        })();
    }

    render() {

        return (
            <div className={"col-12 " + css(JobSeekerStyles.div)}>
                 <div className = {css(JobSeekerStyles.panel, JobSeekerStyles.white)}>
                    <div className = "row justify-content-center">
                        <div className = "panel">
                            <h1 className = {css(JobSeekerStyles.salaryheader)}> Salary Predictor </h1> 
                            
                            <form 
                                className={"predictSalaryForm col-md-12 " + css(JobSeekerStyles.form)}
                                onSubmit = {this.predictSalary} >
                                                        
                                SKILLS
                                <br />
                                <Select 
                                    className = {css(JobSeekerStyles.marginTopForm)}
                                    options = {this.state.skills} 
                                    id = "skills_selected"
                                    value = {this.state.skills_selected} 
                                    onChange = {this.handleSkillChange} />
                                <br /> 

                                EXPERIENCE (In years)
                                <br/>
                                    <input 
                                        className = {css(JobSeekerStyles.inputText)}
                                        type = "text" 
                                        id = "experience" 
                                        placeholder = "Enter the number of years"
                                        onChange = {this.onChange} />
                                 <br /><br />

                                INDUSTRY
                                <br />
                                <Select 
                                    className = {css(JobSeekerStyles.marginTopForm)}
                                    options = {this.state.industry}  
                                    value = {this.state.industry_selected} 
                                    id = "industry_selected" 
                                    onChange = {this.handleIndustryChange} />
                                <br />

                                JOB LOCATION
                                <br />
                                <Select 
                                    className = {css(JobSeekerStyles.marginTopForm)}
                                    options = {this.state.location} 
                                    id = "location_selected" 
                                    value = {this.state.location_selected} 
                                    onChange = {this.handleLocationChange}/>
                                <br />
                                <center>
                                    <br /> <br />
                                    <button 
                                        className = {css(JobSeekerStyles.button)} 
                                        type = "submit"> 
                                        Predict Salary 
                                    </button>
                                </center>
                            </form>
                            <center>
                                <span className = {this.state.formSuccess}> {this.state.success}  </span>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default JobSeeker;