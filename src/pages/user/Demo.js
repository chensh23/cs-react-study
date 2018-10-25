import React, { Component } from 'react';
import {Card, Input,InputNumber,Button, Icon, Col,Form, DatePicker} from "antd"
const FormItem = Form.Item

class DemoTest extends Component{
    constructor(props){
        super(props);
    }
    handleValidate = (rule,value,callback)=>{
        const form = this.props.form;
        console.log(form.getFieldsValue());
        if(value&&value== form.getFieldValue("username")){
            callback("cann't use username as password")
            return;
           // form.validateFields(['password'], { force: true },(errors,values)=>{});
        }
        callback();
    }
    handleValidate2 = (rule,value,callback)=>{
        const form = this.props.form;
        if(value>10){
            callback("age cann't greater than 10");
        }else{
            callback();
        }
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
        const {getFieldDecorator} = this.props.form;
        return (<div>
            <Form layout={"inline"}
            onSubmit={this.handleSave}
            >
            <FormItem
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                label={"username"}
                colon={false}
            >
                { getFieldDecorator("username",{
                    rules: [{ required: true, message: 'Username is required!' }],
            })(<Input />)
                }
            </FormItem>
                <FormItem
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    label={"password"}
                    colon={false}
                >
                    { getFieldDecorator("password",{
                        rules: [{ required: true, message: 'password is required!' },
                            {
                                validator: this.handleValidate
                            }
                        ],
                    })(<Input type={"password"}/>)
                    }
                </FormItem>
                <FormItem
                    labelCol={{span: 8}}
                    wrapperCol={{span: 16}}
                    label={"age"}
                    colon={false}
                >
                    { getFieldDecorator("age",{
                        rules: [{ required: true, message: 'age is required!' },{
                            validator: this.handleValidate2
                        }],
                    })(<InputNumber min={1} max={10} />)
                    }
                </FormItem>
                <Button type={"primary"} htmlType={"submit"}>submit</Button>
            </Form>

        </div>)
    }

}
const onFieldsChange = (props,changeFields)=>{
    //console.log("onFieldsChange",changeFields)
        props.onChange(changeFields)
}
const mapPropsToFields = (props)=>{
   // console.log("mapPropsToFields")
    const fields = props.fields;
    let initValue = {};
    for(let key in fields){
    //    console.log("fields[key]",fields[key])
        initValue[key] =  Form.createFormField({
            ...fields[key],
            value: fields[key].value
        })
    }
    return initValue
}
const onValuesChange = (props,values)=>{
   // console.log("onValuesChange",values)

}
const DemoForm = Form.create({onFieldsChange,mapPropsToFields,onValuesChange})(DemoTest);


class Demo extends Component{
    state = {
        fields: {
            username: {
                value: "xiaoxiao"
            },
            password: {
                value: "123456"
            },
            age: {
                value: 19
            }
        }
    }
    handleFormChange = (changeFields)=>{
        this.setState(({fields})=>({fields: {...fields,...changeFields}}));
    }
    render(){
       const fields = this.state.fields;
       return (
           <div>
                <DemoForm fields={fields} onChange={this.handleFormChange}></DemoForm>
           </div>
    )
    }
}
export default Demo