import React, { Component } from "react";
import { Form, Select } from "antd";

const FormItem = Form.Item;
const Option = Select.Option;

export default class RequstType extends Component {
  render() {
    return (
      <FormItem label="Select" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Select size="large" defaultValue="get" style={{ width: 192 }}>
          <Option value="get">GET</Option>
          <Option value="post">POST</Option>
        </Select>
      </FormItem>
    );
  }
}
