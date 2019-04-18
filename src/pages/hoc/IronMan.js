/**
 * @Description:钢铁侠  HOC 属性代理 ：
 * 包裹组件  增强组件  将原有的 组件props和现有的组件props进行融合,refs获取组件实例
 * @Author: CHEHSHUANG
 * @Date: 2019/3/20
 */
//属性代理本质上是返回了一个全新的 Component，
// 此时原组件的静态属性、生命周期等一系列内容都被屏蔽，
// 导致上层的高阶组件、对组件的操作都拿不到应有的内容。
// 而反向继承恰好可以解决这个问题
import React, {Component, Fragment} from 'react';

export default (WrappedComponent) => {
  return class IronMan extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: ""
      }
    }
    componentDidMount(){
      this.setState({text: `${this.instanceComponent.state.name}加强版`})
    }
    sayHello1 = (name) => {
      return "Hi! "+name;
    }
    render(){
      return <Fragment>
        <div>属性代理 增强组件 {this.state.text}</div>
        {/*将高阶组件所收到的所有 props 照搬传递给 WrappedComponent*/}
        {/*添加的额外属性 如sayHello*/}
        <WrappedComponent
          sayHello={this.sayHello}
          {...this.props}
          //在WrappedComponent组件挂载的时候，会执行ref的回调函数
          ref={instanceComponent => this.instanceComponent = instanceComponent}
        />
        <div>-----属性 无敌分割线------</div>
      </Fragment>
    }

  }
}

