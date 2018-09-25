import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Card} from "antd"

const tabList = [{
    key: 'tab1',
    tab: 'tab1',
}, {
    key: 'tab2',
    tab: 'tab2',
}];
const contentList = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>,
};

class User extends Component{
    state = {
        key: 'tab1',
        noTitleKey: 'app',
    }
    onTabChange = (key, type) => {
        console.log(key, type);//tab2 key
        this.setState({ [type]: key });
    }

    render(){
        return(
            <Card
                style={{ width: '100%' }}
                title="Card title"
                extra={<a href="#">More</a>}
                tabList={tabList}
                activeTabKey={this.state.key}
                onTabChange={(key) => { this.onTabChange(key, 'key'); }}
            >
                {contentList[this.state.key]}
            </Card>
        )
    }
}

export default withRouter(User)
