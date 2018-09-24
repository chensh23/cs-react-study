import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Card} from "antd"


class User extends Component{
    render(){
        return(
            <Card title={'test'}>
                test
            </Card>
        )
    }
}

export default withRouter(User)