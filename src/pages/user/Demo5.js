import React, {Component} from 'react';
import {Table} from "antd";
import * as actionCreators from "../../redux/actions"
import {connect} from "react-redux"
import {Box} from "./style/Demo5"

const dataSource1 = [
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
class Demo5 extends Component {
    constructor(props) {
        super(props);
        this.state={
            current: 1,
            pageSize: 15
        }
    }
    componentDidMount(){
        //connect第二个参数为空时，dispatch会通过props传到组件中
        //this.props.dispatch(actionCreators.getList())
        this.props.getTableList()
    }

    render() {
        //immutable会把object转成Map类型、Array转成List类型
        //   const {data} = this.props.demo5  //immutable数据解构不出来
       // const dataSource = this.props.demo5.get("data").toJS()//.toJS()是把List类型转成Array
       const dataSource = this.props.data.toJS()//在mapStateToProps中直接把data获取出来
        return (
            <Box >
                <Table
                    type={"checkbox"}
                    scroll={{y: "68vh"}}
                    rowKey={(record,index)=>{return index;}}
                    bordered
                    loading={false}
                    dataSource={dataSource}
                    columns={columns}
                    pagination={{
                        hideOnSinglePage: true, //只有一页时是否隐藏分页器
                        defaultCurrent: 1,
                        current: this.state.current, //动态的
                        defaultPageSize: 15,
                        pageSize: this.state.pageSize,  //动态的  配合 showSizeChanger pageSizeOptions onShowSizeChange
                        showQuickJumper: true,
                        total: dataSource.length,
                        showTotal: (total)=> `共${total}条`,
                        onChange: (page,pageSize)=>{
                            this.setState((preState)=>{return{...preState,current:page,pageSize}})
                        }

                    }}
                    onRow={(record) => {
                        return {
                            onClick: () => {

                            },       // 点击行
                            onMouseEnter: () => {},  // 鼠标移入行
                        };
                    }}


                />
            </Box>

        );
    }
}
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
        title: "no",
        dataIndex: "index",
        width: 20,
        render: (text,row,index)=>{
            return index+1;
        }
    },
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
const mapStateToProps = (state) => {
    return {
        // demo5: state.get("demo5")
        data: state.get("demo5").get("data")
    }
}
/*const mapDispatchToProps = (dispatch) => {
    return {
        getTableList: () => {
            dispatch(actionCreators.getList())
        }
    }
}*/
//简化写法
const mapDispatchToProps = {getTableList: actionCreators.getList}

export default connect(mapStateToProps,mapDispatchToProps)(Demo5);
