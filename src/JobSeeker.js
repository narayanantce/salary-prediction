import React, { Component } from 'react'
import Select from 'react-select';
 
import {JobSeekerStyles} from "./JobSeekerStyles"
import {css} from "aphrodite";
import {SKILLS, INDUSTRY} from "./Constants"

class JobSeeker extends Component {

    constructor(props) {
        super(props);

        this.state = {
            fileReader: "",
            skills: [],
            experience: "",
            industry: [],
            location: [],
            industry_selected : "",
            skills_selected : "",
            location_selected : "",
            selectedOption: "",
            hello: true,
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
        //alert(e.target.id);
        //alert(e.target.value);
        this.setState({[e.target.id]:e.target.value});
    }

    handleIndustryChange = (industry_selected) => {
        //alert(this.state.industry_selected);
        this.setState({ industry_selected });
        //alert(selectedOption.label);
        //alert(this.state.industry_selected);
        //console.log(`Selected: ${selectedOption.label}`);
      }

      handleSkillChange = (skills_selected) => {
        this.setState({ skills_selected });
        //alert(selectedOption.label);
        //alert(this.state.skills_selected);
        //console.log(`Selected: ${selectedOption.label}`);
      }

      handleLocationChange = (location_selected) => {
        this.setState({ location_selected });
        //alert(this.state.industry_selected.label);
        //alert(selectedOption.label);
        //alert(this.state.location_selected);
        //console.log(`Selected: ${selectedOption.label}`);
      }

      componentDidMount() {

        //alert("HI");

        (async () => {

            //alert("Calling rest API");

            let response;
            let content;
            let skillsarray = [];
            let industryarray = [];
            let locationarray = [];
            var i=0;

            response = await fetch("http://24063834.ngrok.io/skills", {           
                method: 'GET',
            });


            if (response.status == 200) {
                content = await response.json();

                for(i=0; i<content.data.length; i++) {
                    let skilljson = {label: content.data[i].skills, value: content.data[i].skills};
                    skillsarray.push(skilljson);
                }

                this.setState({skills: skillsarray});
                console.log(skillsarray);
             }

             
            response = await fetch("http://24063834.ngrok.io/industry", {           
                method: 'GET',
            });

            if (response.status == 200) {
                content = await response.json();

                for(i=0; i<content.data.length; i++) {
                    let industryjson = {label: content.data[i].industry, value: content.data[i].industry};
                    industryarray.push(industryjson);
                }

                this.setState({industry: industryarray});
                console.log(industryarray);
             }

             
            response = await fetch("http://24063834.ngrok.io/location", {           
                method: 'GET',
            });

            if (response.status == 200) {
                content = await response.json();

                let locationset = new Set();
                let locationjson;
                
                for(i=0; i<content.data.length; i++) {
                    //let locationjson = {label: content.data[i].skills, value: content.data[i].skills};
                    var locations = content.data[i].joblocation_address.split(', ');

                    //locationset = [];
                    //console.log(locations);
                  
                    for(var j = 0; j < locations.length; j++) {
                        locationset.add(locations[j]);
                    }

  //                  console.log(locationset);
/*
                    for(var j = 0; j < locationset.length; j++) {
                        locationjson = {label: locationset[j], value: locationset[j]};
                    }

                    //console.log(locationjson);
                    locationarray.push(locationjson);
*/
                }

                console.log(locationset);

                let location_array = Array.from(locationset);
                //alert(location_array[0]);
                for(var j = 0; j < location_array.length; j++) {
                    locationjson = {label: location_array[j], value: location_array[j]};
                    locationarray.push(locationjson);
                }

                this.setState({location: locationarray});
                
                //console.log(locationjson);
                //console.log(locationarray);
             }
        })();
    }
    predictSalary(e) {
        //alert("HI");
        e.stopPropagation()
        e.preventDefault();
        

         let x = this.state.hello;

         

         (async () => {

            let URL = "";

            console.log(x)

            //alert("Calling rest API");

            const response = await fetch("http://24063834.ngrok.io/predict?skills="+this.state.skills_selected.label+"&yearsExperience="+this.state.experience+"&industry="+this.state.industry_selected.label+"&location="+this.state.location_selected.label, {           
                method: 'GET',
            });

            //alert(response.status);

            if (response.status == 200) {
                const content = await response.json();
                let predictedSalary = parseInt(content.predicted_salary);
                let rangemin = parseInt(predictedSalary*0.9);
                let rangemax = parseInt(predictedSalary*1.1);
                this.setState({success: "Predicted Salary Range is "+rangemin+" to "+rangemax});
                this.setState({formSucess: css(JobSeekerStyles.formSuccess)});
                //alert("Successful");
            }
            else if(response.status == 500) {
                alert("ISE");
            }
            else if(response.status == 404) {
                e.preventDefault();
                alert("Not found");
            }

            
        })();


     
    }

    render() {

        return (
            <div className={"col-12 " +css(JobSeekerStyles.div)}>
                 <div className = {css(JobSeekerStyles.panel, JobSeekerStyles.white)}>
                    <div className = "row justify-content-center">
                        <div className = "panel">
                            <h1 className = {css(JobSeekerStyles.salaryheader)}> Predict Salary </h1> 
                            
                            <form className = "predictSalaryForm" onSubmit = {this.predictSalary} className={"col-md-12 "  +css(JobSeekerStyles.form)}>
                                                        
                                SKILLS<Select options = {this.state.skills} id="skills_selected" value={this.state.skills_selected} onChange = {this.handleSkillChange} defaultValue="ITES"/>
                                <br /> 
                                EXPERIENCE (in years)<br/><input type="text" id="experience" onChange = {this.onChange}/>
                                <br /><br/>
                                INDUSTRY<Select options = {this.state.industry}  value={this.state.industry_selected} id="industry_selected" onChange = {this.handleIndustryChange}/>
                                <br />
                                JOB LOCATION<Select options = {this.state.location} id="location_selected" value={this.state.location_selected} onChange = {this.handleLocationChange}/>
                                <br />
                                <center><button className = {css(JobSeekerStyles.button)} type = "submit" > Predict Salary </button></center>
                            </form>

                            <span className = {this.state.formSuccess}> {this.state.success}  </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default JobSeeker;