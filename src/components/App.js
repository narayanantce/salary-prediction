import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import JobSeeker from "./JobSeeker";
import TrainModel from "./TrainModel";
import SwitchUser from "./SwitchUser";

class App extends Component {

    render() {
        return (
            <Router>
                <div className="App container">
                    <div>
                        <Route path="/" component = {SwitchUser} />
                        <Route exact path = "/train" component = {TrainModel} />
                        <Route exact path = "/predict" component = {JobSeeker} />
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;