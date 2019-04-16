import React, { Component } from 'react';
import {Card, Dropdown, Menu,Icon,Button, InputNumber, Row} from "antd"
import {connect} from 'react-redux'
import * as operator from "../../redux/actions"
import _ from "lodash"

class Home extends Component{
    state = {visible: false,
      //  value1: 0,
      //  value2: 100
    };
    handleVisibleChange = (flag) => {
        this.setState({ visible: flag });
    }
    handleMenuClick = (e) => {
        if (e.key === '3') {
            this.setState({ visible: false });
        }
    }
    /*handlePlus= ()=>{
         this.setState({value1: this.state.value1+1});
    }
    handleMinus= ()=>{
         this.setState({value2: this.state.value2-1});
    }*/
    render(){

        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
                <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
                <Menu.Item key="3">Clicking me will close the menu</Menu.Item>
            </Menu>
        );
        const {calculator,plus,minus} = this.props;
        return(
            <Card title={'Home'}>
                <Row style={{marginTop: 10}}>
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
                </Row>
                <Row style={{marginTop: 10}}>
                    <InputNumber
                        min={0}
                        max={100}
                        defaultValue={0}
                        value = {calculator.value1}
                    />
                    <Icon type="plus-square" theme="outlined" onClick={plus} />
                </Row>
                <Row style={{marginTop: 10}}>
                    <InputNumber
                        min={0}
                        max={100}
                        value = {calculator.value2}
                        defaultValue={100}
                    />
                    <Icon type="minus-square" theme="outlined" onClick={minus}/>
                </Row>
            </Card>
        )
    }
}
const mapStateToProps= (state,ownProps)=>{
    return {
        calculator: state.get("calculator")
    }
}
/*const mapDispatchToProps = (dispatch,ownProps)=>{
    return {
        plus: ()=> dispatch(operator.plus()),
        minus: ()=> dispatch(operator.minus())
    }
}*/
const mapDispatchToProps = operator;
export default connect(mapStateToProps, mapDispatchToProps)(Home)
