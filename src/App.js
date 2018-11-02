import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import JobSeeker from "./JobSeeker"
import TrainModel from "./TrainModel"

class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <div className="App container">
                    <div>
                        <Route exact path = "/" component = {TrainModel} />
                        <Route exact path = "/predict" component = {JobSeeker} />
                    </div>
                </div>
            </Router>
        );
    }
}



export default App;
