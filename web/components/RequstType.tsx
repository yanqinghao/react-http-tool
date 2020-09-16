import React, { Component } from "react";
import { Form, Select } from "antd";

const FormItem = Form.Item;
const Option = Select.Option;

export default class RequstType extends Component {
  render() {
    return (
      <FormItem label="选择请求方式" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
        <Select size="large" defaultValue="get" style={{ width: 100 }}>
          <Option value="get">GET</Option>
          <Option value="post">POST</Option>
        </Select>
      </FormItem>
    );
  }
}
