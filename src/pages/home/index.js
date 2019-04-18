import React, { Component } from 'react';
import {Card,Input, Dropdown, Menu,Icon,Button, InputNumber, Row} from "antd"
import {connect} from 'react-redux'
import * as operator from "../../redux/actions"
import _ from "lodash"
import XLSX from 'xlsx';
import TestFun from "../hoc/TestFun";
import TestExtend from "../hoc/TestExtend";
import Test from "../hoc/Test";
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

    importData = (e) => {
        let files = e.target.files;
        let fileReader = new FileReader();
        let workbook,persons=[];
        fileReader.readAsBinaryString(files[0]);
        fileReader.onload = (ev) => {
            console.log('files onload');
            try {
                let data = ev.target.result;
                    workbook = XLSX.read(data, {type: 'binary'}); // 以二进制流方式读取得到整份excel表格对象
                    persons = []; // 存储获取到的数据
            } catch (e) {
                console.log('文件类型不正确');
                return;
            }
            console.log('workbook',workbook);
            if(!workbook){
                return;
            }
            // 表格的表格范围，可用于判断表头是否数量是否正确
            let fromTo = '';
            // 遍历每张表读取
            for (let sheet in workbook.Sheets) {
                if (workbook.Sheets.hasOwnProperty(sheet)) {
                    fromTo = workbook.Sheets[sheet]['!ref'];
                    console.log(fromTo);
                    persons = persons.concat(XLSX.utils.sheet_to_json(workbook.Sheets[sheet]));
                    // break; // 如果只取第一张表，就取消注释这行
                }
            }
            console.log(persons);
        };
    }
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
                <Row>
                    <Test/>
                    <TestExtend/>
                    <TestFun/>
                </Row>
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
                    <input className={"ant-btn ant-btn-primary"} type="file" id="excel-file" onChange={this.importData}/>
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
