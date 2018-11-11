import React, {Component} from 'react';
import {Button, Input, List, Table} from "antd"
import "../../style"
import store from "../../redux/store"
import * as actionCreators from "../../redux/actions"
import {Box} from "./style/Demo5"
const dataSource = [
    {vo:{key:"1",name: "莱昂纳多",age: 40}},
    {vo:{key:"2",name: "莱昂纳多1",age: 40}},
    {vo:{key:"3",name: "莱昂纳多2",age: 40}},
    {vo:{key:"4",name: "莱昂纳多3",age: 40}},
    {vo:{key:"5",name: "莱昂纳多4",age: 40}},
    {vo:{key:"6",name: "莱昂纳多5",age: 40}},
    {vo:{key:"7",name: "莱昂纳多",age: 40}},
    {vo:{key:"8",name: "莱昂纳多",age: 40}},
    {vo:{key:"9",name: "莱昂纳多",age: 40}},
    {vo:{key:"10",name: "莱昂纳多",age: 40}},
    {vo:{key:"11",name: "莱昂纳多",age: 40}},
    {vo:{key:"12",name: "莱昂纳多",age: 40}},
    {vo:{key:"13",name: "莱昂纳多",age: 40}},
    {vo:{key:"14",name: "莱昂纳多",age: 40}},
    {vo:{key:"15",name: "莱昂纳多",age: 40}},
    {vo:{key:"16",name: "莱昂纳多",age: 40}},
    {vo:{key:"17",name: "莱昂纳多",age: 40}},
    {vo:{key:"18",name: "莱昂纳多",age: 40}},
    {vo:{key:"19",name: "莱昂纳多",age: 40}},
    {vo:{key:"20",name: "莱昂纳多",age: 40}}

];
const renderContent = (value, row, index) => {
    const obj = {
        children: value,
        props: {},
    };
    //有合并的行中被合并的列设置为0
    if (index === 14) {
        obj.props.colSpan = 0;
    }
    return obj;
};
const columns = [
    {
        title: "姓名",
        dataIndex: "vo.name",
        width: 100,
        key: "name",//如果dataIndex是唯一的，就可以忽略key的设置
        render: (text,row,index)=>{
            const obj = {
                children: <a>{text}</a>,
                props: {}
            };
            if(index==14){
              // 有合并的行中要合并的列设置为3
                obj.props.colSpan=3
            }

            return obj
        }
    },
    {
        title: "年龄",
        dataIndex: "vo.age",
        width: 100,
        key: "age",
        render: renderContent

    },
    {
        title: "合计",
        dataIndex: "summary",
        width: 100,
        render: renderContent

    }
]
class Demo4 extends Component {
    constructor(props) {
        super(props);
        /*this.state = {
            inputValue: "",
            data: []
        }*/
        // this.state = store.getState().todoList
        const storeState = store.getState().get("todoList");
        this.state = {
            inputValue: storeState.get("inputValue"),
            data: storeState.get("data")
        }
        store.subscribe(() => {
            //this.setState(store.getState().get("todoList"));
            //immutable使用get取值
            const storeState1 = store.getState().get("todoList");
            this.setState({
                inputValue: storeState1.get("inputValue"),
                data: storeState1.get("data")
            })
        })
    }

    handleClick = () => {
        //this.setState({data: [...this.state.data,this.state.inputValue]});
        store.dispatch(actionCreators.addTodo())
    }
    handleChange = (e) => {
        // this.setState({inputValue: e.target.value});
        store.dispatch(actionCreators.changeInput(e.target.value))
    }
    handleDelete = (index) => {
        store.dispatch(actionCreators.deleteItem(index))
    }

    render() {
        const {inputValue, data} = this.state;
        return (
            <Box
                className={"box-4"}
            >
                <div style={{"display": "flex"}}>
                    <Input
                        className={"input"}
                        placeholder={"input value"}
                        value={inputValue}
                        onChange={this.handleChange}
                    />
                    <Button type={"primary"} onClick={this.handleClick}>submit</Button>
                </div>
                <List
                    className={"list"}
                    header={<div style={{fontWeight: "bold"}}>TodoList</div>}
                    bordered={true}
                    dataSource={data}
                    renderItem={(item, index) =>{
                       return <List.Item
                            onClick={() => {
                                this.handleDelete(index)
                            }}
                        >
                            {item}
                        </List.Item>
                    }
                   }
                />
                <Table
                    rowKey={(record,index)=>{return index;}}
                    bordered
                    loading={false}
                    dataSource={dataSource}
                    columns={columns}
                    pagination={{
                        hideOnSinglePage: true, //只有一页时是否隐藏分页器
                        defaultCurrent: 1,
                        current: 1, //动态的
                        defaultPageSize: 15,
                        pageSize: 2,  //动态的  配合 showSizeChanger pageSizeOptions onShowSizeChange
                        showQuickJumper: true,
                        total: dataSource.length,
                        showTotal: (total)=> `共${total}条`,
                        onChange: (page,pageSize)=>{console.log("pagination onChange set current",page,pageSize)}
                     }}
                    scroll={{y: 240}}/>

            </Box>
        );
    }
}

export default Demo4;
