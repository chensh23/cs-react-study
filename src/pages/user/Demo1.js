import React, { Component } from 'react';
import {Card, Input,InputNumber,Button, Icon, Col,Form, DatePicker} from "antd"
const FormItem = Form.Item

class Demo1 extends Component{
    constructor(props){
        super(props);
        this.uuid=0;
        this.state = {
            keys:[]
        }
    }
    handleSubmit = ()=>{

    }
    handleAdd = () => {
    const {form} = this.props;
     const   keys = this.state.keys;
   // const keys=  form.getFieldValue("keys");
    const nextKeys = keys.concat(this.uuid);
    this.uuid++;
    //form.setFieldsValue({keys: nextKeys});
        this.setState({keys: nextKeys});
    }
    remove = (k)=> {
        const   keys = this.state.keys;
        const {form} = this.props
      //  const keys = form.getFieldValue("keys")
        if (keys.length === 1) return;
       // form.setFieldsValue({keys: keys.filter(key => key !== k)})
        this.setState({keys: keys.filter(key => key !== k)});
    }


    getFields = ()=>{
        const {getFieldDecorator,getFieldValue} = this.props.form;
        const formItemLayout = {labelCol: {span: 4},wrapperCol: {span: 20}}
        const formItemLayoutWithoutLabel = {wrapperCol: {span: 20, offset: 4}}
    //    getFieldDecorator("keys",{initialValue: []});
    //    const keys = getFieldValue("keys");
        const keys = this.state.keys;
        const formItems = keys.map((k,index)=>{
            return (
                <FormItem {...(index==0?formItemLayout:formItemLayoutWithoutLabel)}
                label={index==0?"name": ""}
                          key={k}
                >
                    {
                        getFieldDecorator(`names[${k}]`, {
                            validateTrigger: ['onChange', 'onBlur'],
                            rules: [{required: true, message: "required", whiteSpace: true}]
                        })(
                            <Input placeholder={'name'} style={{width: "60%", marginRight: 8}}/>
                        )
                    }
                    {keys.length >1?(
                        <Icon
                            type={"minus-circle-o"}
                            disabled={keys.length===1}
                            onClick={()=>{this.remove(k)}}
                        />
                        ): null

                    }
                </FormItem>
            )
        });
        return formItems;
    }
    render(){
        const formItemLayoutWithoutLabel = {wrapperCol: {span: 20, offset: 4}}
        const formItems = this.getFields();
        return (
            <Form onSubmit={this.handleSubmit}>
                {formItems}
                <FormItem {...formItemLayoutWithoutLabel}>
                    <Button type={"dashed"} onClick={this.handleAdd} icon={"plus"} style={{width:"60%"}}>
                        Add Field
                    </Button>

                </FormItem>
                <FormItem {...formItemLayoutWithoutLabel}>
                    <Button htmlType={"submit"} type={"primary"}>submit</Button>
                </FormItem>
            </Form>
        )
    }

}

export default Form.create()(Demo1)