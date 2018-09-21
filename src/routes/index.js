import React, {Component} from "react"
import {Router, Route, SWitch, BrowserRouter} from "react-router-dom"

import Home from  "../components/common/home"
import Login from  "../components/common/login"
import NoMatch from '../components/common/404'
export default class CRoute extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <Router history={BrowserRouter}>
                <SWitch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <Route component={NoMatch}/>
                </SWitch>
            </Router>
        )
    }
}
