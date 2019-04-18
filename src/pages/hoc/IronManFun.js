/**
 * @Description:钢铁侠  HOC 属性代理
 * 可传参
 * @Author: CHEHSHUANG
 * @Date: 2019/3/20
 */
import React, {Component, Fragment} from 'react';

export default (p)=>(WrappedComponent) => {
  return class IronManFun extends Component {
    constructor(props) {
      super(props);
    }
    sayHello1 = (name) => {
      return "属性代理 可以传参: Hi! "+name;
    }
    render(){
      return <Fragment>
        <div>函数：属性代理 准备传参{p}</div>
        <WrappedComponent
          {...this.props}
          ref={instanceComponent => this.instanceComponent = instanceComponent}
        />
        <div>-----函数 无敌分割线------</div>
      </Fragment>
    }

  }
}

