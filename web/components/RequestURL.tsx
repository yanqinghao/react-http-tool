import React, { Component } from 'react'
import {
    Form,
    Select,
    InputNumber,
    DatePicker,
    Switch,
    Slider,
    Button,
} from 'antd'
const FormItem = Form.Item

export default class RequestURL extends Component {
    render() {
        return (
            <FormItem
                label="Input Number"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 8 }}
            >
                <InputNumber
                    size="large"
                    min={1}
                    max={10}
                    style={{ width: 100 }}
                    defaultValue={3}
                    name="inputNumber"
                />
            </FormItem>
        )
    }
}
