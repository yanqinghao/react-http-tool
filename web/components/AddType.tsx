import React from "react";
import { Form, Select } from "antd";
import { TypeString } from "../utils/types";

const FormItem = Form.Item;
const Option = Select.Option;

export default function AddType(props: TypeString) {
  return (
    <FormItem
      label="选择请求方式"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
    >
      <Select
        size="large"
        defaultValue="get"
        style={{ width: 100 }}
        value={props.type}
      >
        <Option value="get">GET</Option>
        <Option value="post">POST</Option>
      </Select>
    </FormItem>
  );
}

AddType.defaultProps = { type: "get" };
