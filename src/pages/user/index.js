import React, { Component } from 'react';
import {Card,Input, Icon} from "antd"

const tabList = [{
    key: 'tab1',
    tab: 'tab1',
}, {
    key: 'tab2',
    tab: 'tab2',
}];
const handleChange = ()=>{
    console.log('handleChange')
}
const handleEnter = ()=>{
    console.log('handleEnter')
}
const handleSearch = ()=>{
    console.log('handleSearch')
}
const contentList = {
    tab1:  <p>
        <Input
            onChange = {handleChange}
            onPressEnter={handleEnter}
            placeholder="Basic usage"
            size={'small'}
            addonBefore={'addonBefore'}
            addonAfter={'addonAfter'}
            prefix={'prefix'}
            suffix={'suffix'}
        />
        <Input
            onChange = {handleChange}
            size={'large'}
            placeholder="Basic usage"
            prefix={<Icon type={'home'}/>}
            suffix={<Icon type={'user'}/>}
            addonBefore={<Icon type={'user'}/>}
            addonAfter={<Icon type={'user'}/>}
        />
        <Input
            onChange = {handleChange}
            disabled
            defaultValue={'默认值'}
            prefix={<Icon type={'home'}/>}
            suffix={<Icon type={'user'}/>}
        />
        <Input.Search
            onSearch={handleSearch}
            enterButton
        />
        <Input.Search
            onSearch={handleSearch}
            enterButton={<Icon type={'user'}/>}
        />
        <Input.Search
            placeholder="Input.Search"
            defaultValue={'默认值'}
            onSearch={handleSearch}
            enterButton={false}
        />
        <Input.Group>
            <Input placeholder="Input.Group"/>
            <Input />
        </Input.Group>
        <Input.TextArea
            placeholder="Input.TextArea"
        />

    </p> ,
    tab2: <p>content2</p>
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
                extra={<a href="http://www.baidu.com">More</a>}
                tabList={tabList}
                activeTabKey={this.state.key}
                onTabChange={(key) => { this.onTabChange(key, 'key'); }}
            >
                {contentList[this.state.key]}
            </Card>
        )
    }
}

export default User;
