import React, {Component} from "react"
import {Button, Form, Select, Input, DatePicker} from "antd"
import moment from "moment"

class Demo2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (err) return;
            console.log("handleSubmit", values)
        })
    }
    checkPrice = (rule, value, callback) => {
        if (value.number > 0) {
            callback();
            return;
        }
        callback("price must greater than one!");
    }

    checkDate = (rule, value, callback) => {
        console.log(value)
        if (value.startDate <= value.endDate) {
            callback();
            return;
        }
        callback("endDate must greater than startDate!");
    }
    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form
                onSubmit={this.handleSubmit}>
                <Form.Item label={"price"}>
                    {
                        getFieldDecorator("price", {
                            initialValue: {'number': 1, currency: 'rmb'},
                            rules: [{validator: this.checkPrice}]
                        })(<PriceInput/>)
                    }
                </Form.Item>
                <Form.Item label={"range-date"}>
                    {
                        getFieldDecorator("dates", {
                            initialValue: {'startDate': moment(new Date())},
                           // rules: [{validator: this.checkDate}]
                        })(<RangeDatePicker/>)
                    }
                </Form.Item>
                <Form.Item>
                    <Button type={"primary"} htmlType={"submit"}>Submit</Button>
                </Form.Item>
            </Form>
        )
            ;
    }

}

export default Form.create()(Demo2)

class RangeDatePicker extends Component {
    static getDerivedStateFromProps(nextProps) {
        console.log("getDerivedStateFromProps = ", nextProps);
        if ('value' in nextProps) {
            return {
                ...(nextProps.value || {}),
            };
        }
        return null;
    }

    constructor(props) {
        super(props);
        const value = props.value || {}
        this.state = {
            startDate: value.startDate || null,
            endDate: value.endDate || null
        }
    }
    disabledDateStart = (current)=> {
        if(!this.state.endDate) return false;
        return current && current > this.state.endDate;
    }
    disabledDateEnd = (current)=> {
        if(!this.state.startDate) return false;
        return current && current < this.state.startDate;
    }
    triggerChange = (changeValue) => {
        const {onChange} = this.props
        if (onChange) {
            console.log("triggerChange",changeValue)
            onChange(Object.assign({}, this.state, changeValue));
        }
    }
    handleChangeEnd = (endDate) => {
        console.log("handleChangeEnd ",endDate)
        if (!('value' in this.props)) {
            this.setState({endDate})
        }
        this.triggerChange({endDate})
    }
    handleChangeStart = (startDate) => {
        if (!('value' in this.props)) {
            this.setState({startDate})
        }
        this.triggerChange({startDate})
    }

    render() {
        const {startDate, endDate} = this.state;
        const {format} = this.props
        return (
            <div style={{display: "flex", alignItems: "center"}}>
                <div style={{flex: 1}}>
                    <DatePicker
                        placeholder={"start"}
                        style={{width: "100%"}}
                        value={startDate}
                        onChange={this.handleChangeStart}
                        format={format}
                        disabledDate={this.disabledDateStart}
                    />
                </div>
                <div style={{width: 20, textAlign: "center"}}>~</div>
                <div style={{flex: 1}}>
                    <DatePicker
                        placeholder={"end"}
                        style={{width: "100%"}}
                        value={endDate}
                        format={format}
                        onChange={this.handleChangeEnd}
                        disabledDate={this.disabledDateEnd}
                    />
                </div>
            </div>
        );
    }

}

class PriceInput extends Component {
    static getDerivedStateFromProps(nextProps) {
        if ('value' in nextProps) {
            return {
                ...(nextProps.value || {}),
            };
        }
        return null;
    }


    constructor(props) {
        super(props);
        const value = props.value || {};
        this.state = {
            number: value.number || 0,
            currency: value.currency || "rmb"
        }
    }

    handleNumberChange = (e) => {
        const number = Number.parseInt(e.target.value || 0, 10);
        if (Number.isNaN(number)) {
            return;
        }
        if (!("value" in this.props)) {
            this.setState({number})
        }
        this.triggerChange({number})
    }
    handleCurrencyChange = (currency) => {
        if (!("value" in this.props)) {
            this.setState({currency})
        }
        this.triggerChange({currency})
    }

    triggerChange = (changeValue) => {
        const {onChange} = this.props
        if (onChange) {
            onChange(Object.assign({}, this.state, changeValue));
        }
    }

    render() {
        const {Option} = Select;
        const {size} = this.props;
        const {number, currency} = this.state;
        return (
            <div>
                <Input
                    size={size}
                    style={{width: "65%"}}
                    value={number}
                    onChange={this.handleNumberChange}
                />

                <Select
                    style={{width: "35%"}}
                    value={currency}
                    onChange={this.handleCurrencyChange}
                >
                    <Option value={"rmb"}>Rmb</Option>
                    <Option value={"dollar"}>Dollar</Option>
                </Select>
            </div>
        );
    }

}

