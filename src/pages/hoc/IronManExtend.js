/**
 * @Description:钢铁侠  HOC 反向继承 ： React组件继承了被传入的组件，除了一些静态方法，包括生命周期，state，各种function，我们都可以得到
 * 相比属性代理方式，它更像打入组织内部，对其进行修改,
 * 不是通过ref获取state， 而是通过 { props, 回调函数 } 传递给wrappedComponent组件，通过回调函数获取state
 * @Author: CHEHSHUANG
 * @Date: 2019/3/20
 */
import React, {Component, Fragment} from 'react';

export default (WrappedComponent) => {
  return class IronManExtend extends WrappedComponent {
    componentDidMount(){
      console.log(this);
      this.setState({name: `${this.state.name}反向啦`});
    }
    sayHello = () => {
      return ":Hi! "+this.state.name;
    }
    render(){
      return <Fragment>
        <div>我是反向继承,打入了组织内部:{this.sayHello()}</div>
        <div>callMe:{this.callMe()}</div>
      {/*  {
          super.render()
        }*/}
        {/*反向继承是为了保留 WrappedComponent 所有的内容，
        同时为了满足我们注入 props 的目的，只好不再调用 super.render(),
         此时我们借用了属性代理的方式返回了父类组件，因此还得手动传入 props*/}
          <WrappedComponent {...this.props} />
        <div>-----反向继承 无敌分割线------</div>
      </Fragment>
    }

  }
}

