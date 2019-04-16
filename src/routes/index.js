import React, {Component,Suspense, lazy} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import {Spin} from "antd";
import PRoute from '../components/PRoute'
import Layout from "../pages/layout/index"
import User from "../pages/user/index"
import Home from "../pages/home/index"
import Login from "../pages/login/index"
import NoMatch from '../pages/404'
import Demo from '../pages/user/Demo'
import Demo1 from '../pages/user/Demo1'
import Demo2 from '../pages/user/Demo2'
import Demo3 from '../pages/user/Demo3'
import Demo4 from '../pages/user/Demo4'
import Demo5 from '../pages/user/Demo5'
// const User = lazy(() => import('../pages/user/index'))
// const Home = lazy(() => import('../pages/home/index'))
// const Login = lazy(() => import('../pages/login/index'))
// const NoMatch = lazy(() => import('../pages/404'))
// const Demo = lazy(() => import('../pages/user/Demo'))
// const Demo1 = lazy(() => import('../pages/user/Demo1'))
// const Demo2 = lazy(() => import('../pages/user/Demo2'))
// const Demo3 = lazy(() => import('../pages/user/Demo3'))
// const Demo4 = lazy(() => import('../pages/user/Demo4'))
// const Demo5 = lazy(() => import('../pages/user/Demo5'))

export default class CRoute extends Component{
    render(){
        return (
            <Router>
                {/*<Suspense
                    fallback={<Spin
                        tip="加载中..."
                        spinning={true}
                        wrapperClassName={"spin"}/>}
                >*/}
                <Switch>
                    <PRoute path="/demo" component={User}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/" >
                        <Layout>
                            <Switch>
                                <PRoute path="/user" component={User}/>
                                <PRoute path="/home" component={Home}/>
                                <PRoute path="/demo" component={Demo}/>
                                <PRoute path="/demo1" component={Demo1}/>
                                <PRoute path="/demo2" component={Demo2}/>
                                <PRoute path="/demo3" component={Demo3}/>
                                <PRoute path="/demo4" component={Demo4}/>
                                <PRoute path="/demo5" component={Demo5}/>

                                <Redirect to={'/home'}/>
                            </Switch>
                        </Layout>
                    </Route>
                    <Route component={NoMatch}/>
                </Switch>
                {/*</Suspense>*/}
            </Router>
        )
    }
}
