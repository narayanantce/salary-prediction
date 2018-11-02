import React, { Component } from 'react'
import {JobSeekerStyles} from "./JobSeekerStyles"
import {css} from "aphrodite";

import ReactFileReader from 'react-file-reader';

class TrainModel extends Component {

    constructor(props) {
        super(props);

        this.handleFiles = this.handleFiles.bind(this);
        this.fileUpload = this.fileUpload.bind(this);
        this.trainModel = this.trainModel.bind(this);

        this.state = {
            csv: null,
            data_file: null,
        };
    }

    handleFiles(e) {
        e.preventDefault();
        //alert(e.target.files[0])
        //this.setState({data_file : e.target.files[0]})

        let formData = new FormData();
        //formData.append('file', e.target.files[0]);
        formData.append('data_file', this.uploadInput.files[0]);

        console.log(formData);

        (async () => {

            alert("Calling rest API");

            const response = await fetch("http://24063834.ngrok.io/upload", {    
                // headers: {
                //     'content-type': 'multipart/form-date'
                // },       
                method: 'POST',
                body: formData
            });

            alert(response.status);

            if (response.status == 200) {
                //alert("Successful");
            }
         
        })();
    }

    trainModel() {
        alert("Inside TrainModel");

        (async () => {

            alert("Calling train model rest API");

            await fetch("http://24063834.ngrok.io/train", {    
                method: 'GET',
            });
        })();

        setTimeout(() => {        
            alert("Training success");
            this.props.history.push("/predict");
        },5000);
        
        //this.props.history.push("/predict");
    }
/*
    handleFiles(e) {
        alert("Inside handlefiles");
        alert(e.target.files[0])
       
        this.setState({
            data_file: e.target.files[0]
        })  
        /*
        alert(this.state.csv);
        var allTextLines = this.state.csv.split(/\r\n|\n/);
        
        var reader = new FileReader();
        // Read file into memory as UTF-8      
        //alert(reader.readAsText(files));
        
        reader.onload = this.fileReadingFinished();

        //reader.readAsText(file); 
        reader.onerror = this.errorHandler();
        //alert(files.base64);

    }
*/


    fileUpload() {
        //this.setState({data_file: "file uploaded"});
        console.log(this.state.data_file);

        (async () => {

            alert("Calling rest API");

            const response = await fetch("http://24063834.ngrok.io/upload", {           
                method: 'POST',
                body: {
                    data_file: this.state.data_file,
                }
            });

            alert(response.status);

            if (response.status == 200) {
                //alert("Successful");
            }
         
        })();

    }
    render() {

        return (
        <div className={"col-12 " +css(JobSeekerStyles.div)}>
             <div className = {css(JobSeekerStyles.panel, JobSeekerStyles.white)}>
                <div className = "row justify-content-center">
                    <div className = "panel">
                        <h1 className = {css(JobSeekerStyles.salaryheader)}> Train Model </h1> 

                         <br/>  
                         {/* <ReactFileReader fileTypes={[".csv",".zip"]} base64={true} multipleFiles={true} handleFiles={this.handleFiles}>
  <button className='btn'>Upload</button>
</ReactFileReader> */}

                       <br></br><br></br>
                       <input ref={(ref) => {this.uploadInput = ref;}} type="file"/>

<button className={css(JobSeekerStyles.button)} onClick = {this.handleFiles}>Upload File</button>

                        <br/><br/><button className={css(JobSeekerStyles.button)} onClick = {this.trainModel}>Train Model</button>
                       {/* <center><input type="file" onChange={ this.handleFiles } accept=".csv"/>
                         <br/><br/>
                         <button className={css(JobSeekerStyles.button)} onClick = {this.fileUpload}>Upload File</button>
                         <br/><br/><button className={css(JobSeekerStyles.button)}>Train Model</button></center>
                         */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrainModel;
