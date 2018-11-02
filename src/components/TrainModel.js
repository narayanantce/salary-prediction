import React, { Component } from "react";
import { css } from "aphrodite";

import JobSeekerStyles from "../styles/js/JobSeekerStyles";
import { ACTION_BACKEND_URL } from "../constants";

class TrainModel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data_file: null
        };

        this.handleFiles = this.handleFiles.bind(this);
        this.trainModel = this.trainModel.bind(this);
    }

    handleFiles = (event) => {
        event.preventDefault();
        let formData = new FormData();
        formData.append('data_file', this.uploadInput.files[0]);

        (async () => {
            const response = await fetch(ACTION_BACKEND_URL + "upload", {         
                method: 'POST',
                body: formData
            });

            if (response.status === 200) {
                alert("Successfully Uploaded!");
            } else {
                alert("Fail to Upload!");
            }
        })();
    }

    trainModel = () => {
        
        (async () => {
            await fetch(ACTION_BACKEND_URL + "train", {    
                method: 'GET',
            });
        })();

        setTimeout(() => {        
            alert("Training Successfully!");
            this.props.history.push("/predict");
        }, 5000);
    }

    render() {
        return (
            <div className={"col-12 " + css(JobSeekerStyles.div)}>
                <div className = {css(JobSeekerStyles.panel, JobSeekerStyles.white)}>
                    <div className = "row justify-content-center">
                        <div className = "panel">
                            <h1 className = {css(JobSeekerStyles.salaryheader)}> Upload & Train Model </h1> 

                            <center>
                                <br></br> <br/><br/>
                                <input ref={(ref) => {this.uploadInput = ref;}} type="file"/>
                                <br></br> <br/><br/>
                                <button 
                                    className={css(JobSeekerStyles.button)} 
                                    onClick = {this.handleFiles}>
                                    Upload File
                                </button>
                                <br/><br/> 
                                <button 
                                    className={css(JobSeekerStyles.button)} 
                                    onClick = { this.trainModel }>
                                    Train Model
                                </button>
                            </center>
                            <br></br> <br></br>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrainModel;