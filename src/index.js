import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/components/App/App.js'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BookTable from "./components/book-table-page";
import ReviewBooking from "./components/book-table-page/reviev-booking/reviev-booking";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/book-table" component={BookTable} />
            <Route path="/review-booking" component={ReviewBooking} />
        </Switch>
    </BrowserRouter>
);


ReactDOM.render(<Router />, document.getElementById('root'));

