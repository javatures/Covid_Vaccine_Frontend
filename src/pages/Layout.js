import React, { Component } from 'react';
import { Route } from 'react-router';
import PatientProfile from './PatientProfile';
import PatientSignin from './PatientSignin';
import PatientRegistration from './PatientRegistration';
import Dashboard from './Dashboard';
import DashboardConfig from './DashboardConfig';
import Header from './Header';
import Home from './Home';
import Requests from './Requests';

class Layout extends Component {
    render() {
        return (
            <div>
                <div className="fixed-top mb-5">
                    <Header />
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="container-fluid mb-5 mt-5">
                    <Route exact path="/" component={Home} />
                    <Route path="/main" component={Home} />
                    <Route path="/registration" component={PatientRegistration} />
                    <Route path="/signin" component={PatientSignin} />
                    <Route path="/portal" component={PatientProfile} />
                    <Route path="/dash" component={Dashboard} />
                    <Route path="/dashconfig" component={DashboardConfig} />
                    <Route path="/requests" component={Requests} />
                </div>
            </div>
        );
    }
}

export default Layout;