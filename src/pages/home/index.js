import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Card} from "antd"


class Home extends Component{
    render(){
        return(
            <Card title={'Home'}>
                Home
                <div id='a' style={{height: 300,background: 'red'}}>
                    ....qaaaaaaa
                    <br/>
                </div>
                <div id='b'  style={{height: 300,background: 'blue'}}>
                    ....bbbbbbb
                    <br/>
                </div>
                <div id='c'  style={{height: 300,background: '#ccc'}}>
                    ....cccccc
                    <br/>
                </div>
                <div id='d'  style={{height: 300,background: 'green'}}>
                    ....ddddddd
                    <br/>
                </div>
                <div id='e'  style={{height: 300,background: 'yellow'}}>
                    ....eeeeee
                    <br/>
                </div>

            </Card>
        )
    }
}

export default withRouter(Home)