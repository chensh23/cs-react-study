import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

export default class RRoute extends Component{
    isLogin(){
        return !!localStorage.getItem('suc_user') ? true: false;
    }
    render(){
        return (
            this.isLogin() ? (<Route {...this.props} ></Route>) : (<Redirect to={'/login'}/>)
        )

    }
}