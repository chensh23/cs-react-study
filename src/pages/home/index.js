import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Card, Dropdown, Menu,Icon,Button} from "antd"


class Home extends Component{
    state = {visible: false};
    handleVisibleChange = (flag) => {
        this.setState({ visible: flag });
    }
    handleMenuClick = (e) => {
        if (e.key === '3') {
            this.setState({ visible: false });
        }
    }

    render(){
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
                <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
                <Menu.Item key="3">Clicking me will close the menu</Menu.Item>
            </Menu>
        );
        return(
            <Card title={'Home'}>
                Home
                <Dropdown
                    overlay={menu}
                    // trigger={['click']}
                    onVisibleChange={this.handleVisibleChange}
                    visible={this.state.visible}
                >
                    <Button>
                            Hover me <Icon type="down" />
                    </Button>
                </Dropdown>

            </Card>
        )
    }
}

export default withRouter(Home)
