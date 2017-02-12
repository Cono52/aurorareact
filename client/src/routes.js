import React from 'react';
import {Component} from 'react'
import { Router, Route, IndexRoute } from 'react-router';

import App from './components/App';
import Switcher from './components/Switcher';
import Profile from './components/Profile';
import NotFound from './components/NotFound';


class Routes extends Component {
    render() {
        return (
             <Router {...this.props}>
                <Route path="/" component={App}>
                     <IndexRoute component={Switcher}/>
                </Route>
                <Route path="/profile" component={App}>
                    <IndexRoute component={Profile}/>
                </Route>
                <Route path="*" component={NotFound} />
            </Router>
        );
    }
}

export default Routes;