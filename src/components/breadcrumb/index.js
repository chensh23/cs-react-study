import React, { Component } from 'react';
import { withRouter,Link } from 'react-router-dom';
import {Breadcrumb} from "antd"
import PropType from "prop-types"
const {Item} = Breadcrumb;

class CsBreadcrumb extends Component{
    static propTypes = {
       pathname: PropType.string.isRequired
    }
    breadcrumbNameMap = {
        '/home': '主页',
        '/user': '用户'
    };
    home = ()=>{
        return (
            [<Item key={'/home'}>
                <Link to={'/home'}>
                    {this.breadcrumbNameMap['/home']}
                </Link>
            </Item>]
        )
    }
    getBreadcrumbItems = ()=> {
        const {pathname='/'} = this.props;
        if(pathname === '/home'){
            return this.home();
        }
        const pathSnippets = pathname.split("/").filter(i => i);
        const extraBreadcrumbItems = pathSnippets.map((item,index)=>{
            const url = `/${pathSnippets.slice(0,index+1).join('/')}`;
            return (
                <Item key={url}>
                    <Link to={url}>
                        {this.breadcrumbNameMap[url]}
                    </Link>
                </Item>
            )
        });

        return this.home().concat(extraBreadcrumbItems);
    }


    render(){
        return(
            <Breadcrumb {...this.props}>
                {this.getBreadcrumbItems()}
            </Breadcrumb>
        )
    }
}

export default withRouter(CsBreadcrumb)