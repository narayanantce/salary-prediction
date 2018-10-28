import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import JobSeeker from "./JobSeeker"

class App extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <Router>
                <div className="App container">
                    <div>
                        <Route exact path = "/" component = {JobSeeker} />
                    </div>
                </div>
            </Router>
        );
    }
}



export default App;
