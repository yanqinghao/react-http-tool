import React, { Component } from "react";
import { Form, Input} from "antd";

const FormItem = Form.Item;

export default class RequestURL extends Component {
  render() {
    return (
      <FormItem
        label="请求链接"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
      >
        <Input
          size="large"
          style={{ width: 500 }}
          placeholder="请输入请求URL"
          name="inputURL"
        />
      </FormItem>
    );
  }
}
