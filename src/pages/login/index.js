import React, {Component} from "react"
import {Form,Icon,Input,Button, Checkbox, message, Spin} from 'antd'
import './index.css'

const {Item} = Form;

const users = [{
    username:'admin',
    password:'admin'
},{
    username:'cs',
    password:'cs'
}];
function matchUser(values) {  //匹配用户
    const results = users.map(function(item){
        if(values.username === item.username && values.password === item.password){
            return 1;
        }else{
            return 0;
        }
    });
    return results.includes(1);
};

class LoginForm extends Component{
    state = {
        isLoading: false
    };
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.form.validateFields((err,user)=>{
            if(!err){
                if(matchUser(user)){
                    this.setState({isLoading: true});
                    localStorage.setItem('suc_user',JSON.stringify(user));
                    message.success("登陆成功");
                    setTimeout(()=>{
                        console.log(this.props.history);
                        this.props.history.push({pathname:'/home',state:user})
                    },2000)//延迟进入
                }else{
                    message.error("登陆失败");
                }
            }
        })
    };

    render(){
        const {getFieldDecorator} = this.props.form;
        return (
            <Spin size="large" className="loading" spinning={ this.state.isLoading } tip={'加载中'} >
                <div className={'login'}>
                    <div className={'login-form'}>
                        <div className="login-logo">
                            <div className="login-name">XX系统</div>
                        </div>
                        <Form onSubmit={this.handleSubmit} style={{maxWidth: '300px'}}>
                            <Item>
                                {
                                    getFieldDecorator('username',{
                                        rules: [{required: true, message: '请输入用户名!'}]
                                    })(
                                        <Input prefix={<Icon type="user" style={{fontSize: 13}}/>} placeholder="用户名 (admin)"/>
                                    )
                                }
                            </Item>
                            <Item>
                                {
                                    getFieldDecorator('password',{
                                        rules: [{required: true, message: '请输入密码!'}]
                                    })(
                                        <Input prefix={<Icon type="lock" style={{fontSize: 13}}/>} type="password" placeholder="密码 (admin)"/>
                                    )
                                }
                            </Item>
                            <Item>
                                {
                                    getFieldDecorator('remember', {
                                        valuePropName: 'checked',
                                        initialValue: true,
                                    })(
                                        <Checkbox>记住我</Checkbox>
                                    )}
                                <a className="login-form-forgot" href="" style={{float:'right'}}>忘记密码?</a>
                                <Button type="primary" htmlType="submit" className="login-form-button" style={{width: '100%'}}>
                                    登录
                                </Button>
                                Or <a href="">现在就去注册!</a>
                            </Item>
                        </Form>
                    </div>
                </div>
                </Spin>

        )
    }
}

export default Form.create()(LoginForm);
