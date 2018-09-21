import React, { Component } from 'react';
import {Card, Menu, Row, Col} from "antd"
import './App.css';

class App extends Component {
  render() {

    return (
        <Card style={{ width: 300, height: 500 }} title={'nihao '}   extra={<a href="#">More</a>}>
           <Row  gutter={10} type={'flex'} justify={'center '} align={'top'}>
               <Col className="gutter-row" span={6} offset={1} >
                   <div className="gutter-box">col-6</div>
               </Col>
               <Col className="gutter-row" span={6}>
                   <div className="gutter-box">col-6</div>
               </Col>
               <Col className="gutter-row" span={6} push={0}>
                   <div className="gutter-box">col-6</div>
               </Col>
               <Col className="gutter-row" span={6} offset={1} >
                   <div className="gutter-box">col-6</div>
               </Col>
           </Row>
            <Row gutter={16} type={'flex'} justify={'center '} align={'center'}>
                <Col className="gutter-row" span={6} >
                    <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6} push={0}>
                    <div className="gutter-box">col-6</div>
                </Col>
                <Col className="gutter-row" span={6}>
                    <div className="gutter-box">col-6</div>
                </Col>
            </Row>
        </Card>
    );
  }
}

export default App;
