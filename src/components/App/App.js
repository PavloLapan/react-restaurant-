import React, {Component} from 'react';

import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import About from '../about';
import '../../style/normalize.css'
import '../../style/media.css'
import '../../style/style.css'

import Header from "../header";
import Reservation from "../reservation";


import '../../style/style.css';
import '../../style/media.css';
import Footer from "../footer";
export default class App extends Component {
    render() {
        return (
            <div>
                <Footer/>


                <Router>
                    <Switch>
                        <Header/>
                    </Switch>
                </Router>
                <About/>
                <Reservation/>
            </div>
        );
    }
}