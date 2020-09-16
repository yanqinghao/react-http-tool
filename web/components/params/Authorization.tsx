import React, { Component } from "react";
import { Form, Input, Button, Select } from "antd";

const FormItem = Form.Item;
const Option = Select.Option;

export default class Authorization extends Component {
  render() {
    return (
      <Form layout="vertical">
        <FormItem
          label="鉴权方式"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Select
            size="large"
            defaultValue="HTTPBasicAuth"
            style={{ width: 200 }}
          >
            <Option value="HTTPBasicAuth">HTTPBasicAuth</Option>
            <Option value="HTTPDigestAuth">HTTPDigestAuth</Option>
            <Option value="OAuth1">OAuth1</Option>
          </Select>
        </FormItem>
        <Input
          size="large"
          style={{ width: 200 }}
          placeholder="User Name"
          name="inputKey"
        />
        <Input
          size="large"
          style={{ width: 200 }}
          placeholder="Password"
          name="inputValue"
        />
      </Form>
    );
  }
}
