import React, {Component} from 'react';

import {BrowserRouter as Router, Switch} from 'react-router-dom';
import About from '../about';
import '../../style/normalize.css'
import '../../style/media.css'
import '../../style/style.css'
import '../../style/burger-menu.css'
import '../../style/datepicker.css'

import Header from "../header";
import Reservation from "../reservation";
import Footer from "../footer";
import Features from "../features";
import Menu from "../menu/menu";

import FaturesData from '../../services';
import {ServiceProvider} from '../service-context'
import withServiceContext from "../hoc/withServiceContext";
import {Provider} from 'react-redux';

import ErrorBoundry from "../error-boundry/error-boundry";
import store from '../../store'

const featuresData = new FaturesData();

class App extends Component {

    render() {
        console.log(featuresData);
        return (
            <div>
                <Provider store={store}>
                    <ErrorBoundry>

                        <Router>
                            <Switch>
                                <Header/>
                            </Switch>
                        </Router>
                        <About/>
                        <Reservation/>
                            <ServiceProvider value={featuresData}>
                                <Features/>
                            </ServiceProvider>
                        <Menu/>
                        <Footer/>

                    </ErrorBoundry>
                </Provider>
            </div>
        );
    }
}

export default withServiceContext()(App)