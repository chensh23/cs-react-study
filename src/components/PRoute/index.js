import React, { Component } from 'react';
import { Route, Redirect, Prompt } from 'react-router-dom';

export default class RRoute extends Component{
    isLogin(){
        return !!localStorage.getItem('suc_user') ? true: false;
    }
    render(){
        const {component: Component,...rest} = this.props;
        return (
            <Route {...rest} render={(props)=>(
                <div>
                    <Component {...props}/>
                </div>
            )}/>
          //  this.isLogin() ? (<Route {...this.props} ></Route>) : (<Redirect to={'/login'}/>)
        )

    }
}
