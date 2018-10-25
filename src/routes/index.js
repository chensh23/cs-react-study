import React, {Component} from "react";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {createBrowserHistory} from 'history'
import PRoute from '../components/PRoute'

import Layout from "../pages/layout/index"
import User from "../pages/user/index"
import Home from "../pages/home/index"
import Login from "../pages/login/index"
import NoMatch from '../pages/404'
import Demo from '../pages/user/Demo'

export default class CRoute extends Component{
    render(){
        return (
            <Router history={createBrowserHistory()}>
                <Switch>
                    <Route path="/login" component={Login}/>
                    <Route path="/" >
                        <Layout>
                            <Switch>
                                <PRoute path="/user" component={User}/>
                                <PRoute path="/home" component={Home}/>
                                <PRoute path="/demo" component={Demo}/>

                                <Redirect to={'/home'}/>
                            </Switch>
                        </Layout>
                    </Route>
                    <Route component={NoMatch}/>
                </Switch>
            </Router>
        )
    }
}
