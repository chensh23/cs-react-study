import React, {Component, Fragment} from 'react';
import {Button} from "antd"
import {CSSTransition,TransitionGroup} from "react-transition-group"
import "../../style"
import api from "../../mock/api"

class Demo3 extends Component {
    state = {data: [],show: true}
    componentDidMount(){
        api.mockData("/api/todolist").then((res)=>{
            console.log("res",res);
            this.setState(()=>({data: res}))
        });
    }
    onToggle = ()=>{
        this.setState({show: !this.state.show})
    }
    addItem=()=>{
        this.setState((preState,props)=>{
            return {data: [...preState.data,"item"]}
        })
    }
    render() {
        return (
            <Fragment>
                <div className="App">
                    <TransitionGroup>
                    {
                        this.state.data.map((item,key)=>(
                            <CSSTransition
                                timeout={800}
                                classNames={"fade"}
                                unmountOnExit
                                onEntered={(el)=>{
                                    el.style.color="blue"
                                }}
                                appear={true}
                                key={key}
                            >
                            <div >{item}</div>
                            </CSSTransition>
                        ))
                    }
                    </TransitionGroup>
                </div>
                {/*css3动画实现*/}
                {/*<div className={this.state.show?"show":"hide"}>hello</div>*/}
                <CSSTransition
                    in={this.state.show}
                    timeout={800}
                    classNames={"fade"}
                    unmountOnExit
                    onEntered={(el)=>{
                        el.style.color="blue"
                    }}
                    appear={true}
                >
                    <div>
                        react-transition-group
                       对单个dom或reactNode的动画用 CSSTransition动画组件，
                        对多个元素外层用TransitionGroup，内层用CssTransition
                    </div>
                </CSSTransition>
                <Button onClick = {this.onToggle}>tst</Button>

                <Button onClick = {this.addItem}>add</Button>
            </Fragment>


        );
    }
}

export default Demo3;
