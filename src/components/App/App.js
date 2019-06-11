import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import About from '../about';


export default class App extends Component {
    render() {
        return (
            <div>
                <About/>

            </div>
        );
    }
}