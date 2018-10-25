import React, { Component } from 'react';
import {Card, Input,InputNumber,Button, Icon, Col,Form, DatePicker} from "antd"
const FormItem = Form.Item
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
const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};
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
    tab2:
    <Form>

        <FormItem
            label="date"
            {...formItemLayout}
        >
            <Col span={11}>
                <FormItem validateStatus="success" hasFeedback help="Please select the correct date">
                    <DatePicker/>
                </FormItem>
            </Col>
            <Col span={2}>
        <span style={{display: 'inline-block', width: '100%', textAlign: 'center'}}>
          -
        </span>
            </Col>
            <Col span={11}>
                <FormItem>
                    <DatePicker/>
                </FormItem>
            </Col>
        </FormItem>
        <FormItem
            label = {"aaa"}
            {...formItemLayout}
        >
            <Input />
        </FormItem>
        <FormItem
            label = {"ddd"}
            {...formItemLayout}
        >
            <InputNumber />
        </FormItem>
    </Form>
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
    handleSave = (e)=>{
        e.preventDefault();
       this.props.form.validateFieldsAndScroll((err,values)=>{
           if(err){
              return ;
           }
           console.log(values)
       })
    }
    render(){
        const {getFieldDecorator} = this.props.form
        return(
            <div>
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
                <Form
                    layout={"horizontal"}
                    hideRequiredMark={false}
                    onSubmit={this.handleSave}
                >


                    <FormItem
                        label = {"aaa"}
                        {...formItemLayout}
                        colon={false}
                    >

                        {getFieldDecorator('input-text', {
                            initialValue: 3,
                            rules: [{required: true, message: "必填"},{
                                type: "string", message: "string"
                            }]

                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem
                        label = {"eeeeeee"}
                        {...formItemLayout}
                        colon={false}
                    >
                        {getFieldDecorator('input-number', {
                            // initialValue: 3,
                            rules: [{required: true, message: "111必填"},
                                {validator: (rule, value, callback)=>{
                                        if(value<0){

                                        }
                                        callback();
                                    }}
                               ]

                        })(
                            <InputNumber />
                        )}

                    </FormItem>
                    <FormItem
                        label = {"eee"}
                        {...formItemLayout}
                    >
                        {getFieldDecorator('input-number1', {
                            // initialValue: 3,
                            rules: [
                                {required: true, message: "日期必填"},
                                {validator: (rule, value, callback)=>{
                                    if(value){

                                    }
                                        callback();
                                    }}
                                ]

                        })(
                            <DatePicker />
                        )}

                    </FormItem>
                    <FormItem
                        wrapperCol={{ span: 12, offset: 6 }}
                    >
                    <Button type="primary" htmlType={"submit"}>save</Button>
                    </FormItem>
                </Form>
            </div>

        )
    }
}

export default Form.create()(User);
