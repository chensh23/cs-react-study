/**
 * @Description:钢铁侠
 * @Author: CHEHSHUANG
 * @Date: 2019/3/20
 */
import React, {Component, Fragment} from 'react';
import IronMan from "./IronMan";
import IronManExtend from "./IronManExtend";
import IronManFun from "./IronManFun";

@IronManFun("hhhhhh")
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    }
  }
  callMe = () => {
    return "Hello"+this.state.name;
  }
  componentDidMount(){
    this.setState({name: `function。。`});
  }
  render(){
    return <Fragment>
      <div>{this.state.name}</div>
      <div>{this.props.sayHello&&this.props.sayHello(this.state.name)}</div>
    </Fragment>
  }
}
//export default IronManFun(Test)
export default Test


