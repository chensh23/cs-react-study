import React, {Component} from "react"
import { withRouter,Link,Prompt } from 'react-router-dom';
import { Menu, Icon,Dropdown} from "antd"
import "./index.css"
import CsBreadcrumb from "../../components/breadcrumb/index"
import logo from "../../style/img/logo.png"

const {Item, SubMenu} = Menu;

class Layout extends Component{
    constructor(props){
        super(props)
        this.state= {
            collapsed: false,
            defaultKey: [""],
            pathname: ''
        };
    }
    handleLogoutClick = ()=>{
        localStorage.removeItem("suc_user");
        this.props.history.replace("/login");
    }
    handleCollapse = ()=>{
        this.setState({collapsed: !this.state.collapsed});
    }
    getUser = ()=> {
        return localStorage.getItem("suc_user")? JSON.parse(localStorage.getItem("suc_user")): {};
    }
/*    componentDidMount(){
        this.setState({defaultKey: [this.props.location.pathname]},()=>{
        })
    }
    handleToggleMenu=({ item, key, keyPath })=>{
        this.setState({defaultKey: [key]});
    }*/
    render(){
        const {collapsed} = this.state;
        const {children} = this.props;
        const menu = (
            <Menu onClick={this.handleLogoutClick}>
                <Item key={'1'} >
                    <Icon type="logout" theme="outlined" />
                    <span>退出</span>
                </Item>
            </Menu>
        );
        return (
            <section className={'layout-wrapper'}>
                <nav className={collapsed ? 'left-wrapper left-wrapper-collapsed' : 'left-wrapper'}>
                    <div className={'logo'} >
                        <img alt={''} src={logo} style={{width: "auto", height: "100%"}}/>
                    </div>
                    <Menu theme={'dark'}
                          mode={'inline'}
                          inlineCollapsed = {collapsed}
                          defaultSelectedKeys={[this.props.location.pathname]}
                         selectedKeys={[this.props.location.pathname]}
                          defaultOpenKeys={['sub','sub2','sub3']}
                          // openKeys={['9','10','29']}
                          className={'menu-box'}
                       //  onClick={this.handleToggleMenu}
                    >
                        <Item key={'/home'}>
                            <Link to={'/home'}>
                                 <Icon type={'home'}></Icon>
                                 <span>
                                    主页
                                     </span>
                            </Link>

                        </Item>
                        <Item key={'/user'}>

                            <Link to={'/user'}>
                                <Icon type={'user'}/>
                                <span>用户</span>
                            </Link>

                        </Item>
                        <Item key={'/demo'}>

                            <Link to={'/demo'}>
                                <Icon type={'email'}/>
                                <span>使用表单mapPropsToFields</span>
                            </Link>

                        </Item>
                        <Item key={'/demo1'}>

                            <Link to={'/demo1'}>
                                <Icon type={'email'}/>
                                <span>动态添加组件</span>
                            </Link>

                        </Item>
                        <Item key={'/demo2'}>
                            <Link to={'/demo2'}>
                                <span>自定义表单组件</span>
                            </Link>
                        </Item>
                        <Item key={'/demo3'}>
                            <Link to={'/demo3'}>动画CSSTransition</Link>
                        </Item>
                        <Item key={'/demo4'}>
                            <Link to={'/demo4'}>redux、immutable</Link>
                        </Item>
                        <Item key={'/demo5'}>
                            <Link to={'/demo5'}>react-redux、immutable</Link>
                        </Item>
                        <Item key={'/desktop'}>
                            <Icon type={'desktop'}></Icon>
                            <span>zm</span>
                        </Item>

                        <SubMenu key={'sub'} title={'submenu'}>
                            <Menu.Item key="12">Option 12</Menu.Item>
                        </SubMenu>
                        <SubMenu key={'sub2'} title={'submenu2'}>
                            <Menu.Item key="29">Option 9</Menu.Item>
                            <Menu.Item key="210">Option 10</Menu.Item>
                            <Menu.Item key="211">Option 11</Menu.Item>
                            <Menu.Item key="212">Option 12</Menu.Item>
                        </SubMenu>
                        <SubMenu key={'sub3'} title={'submenu2'}>
                            <Menu.Item key="239">Option 9</Menu.Item>
                            <Menu.Item key="2310">Option 10</Menu.Item>
                            <Menu.Item key="2311">Option 11</Menu.Item>
                            <Menu.Item key="2312">Option 12</Menu.Item>
                        </SubMenu>
                    </Menu>
                </nav>
                <section className={'center-wrapper'}>

                {/*<Prompt
                    when={true}
                    message={location =>
                        `Are you sure you want to go to ${location.pathname}`
                    }
                />*/}

                    <header className={'head-wrapper'}>
                        <Icon onClick={this.handleCollapse} type={collapsed ? 'menu-unfold':'menu-fold'} theme="outlined" style={{fontSize: 24, paddingLeft: 20}}/>
                        <ul className={'info-box-wrapper'}>
                            <li >message</li>
                            <li >
                            <Dropdown overlay={menu} className={'info-box'} placement={'bottomCenter'}>
                                <div >
                                    <Icon type={'user'} style={{fontSize: 18, color: "rgb(29, 165, 122)"}}/>
                                    <span>{this.getUser().username}</span>
                                </div>
                            </Dropdown>
                            </li>
                        </ul>

                        <Menu mode={'horizontal'} style={{ width: 90}}>
                            <SubMenu title={
                                <span>
                                    <Icon type={'user'} style={{fontSize: 18, color: "rgb(29, 165, 122)"}}/>
                                    {this.getUser().username}
                                </span>
                            }>
                                <Item key={'logout'} onClick={this.handleLogoutClick} >
                                    <Icon type="logout" theme="outlined" />
                                    <span>退出</span>
                                </Item>
                            </SubMenu>

                        </Menu>

                    </header>
                    <CsBreadcrumb pathname={this.props.location.pathname} className={'breadcrumb-box'}/>
                    <article className={'content-wrapper'}>{children}</article>
                </section>
            </section>
        );
    }
}

export default withRouter(Layout)
