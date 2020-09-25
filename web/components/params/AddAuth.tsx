import React from "react";
import { Form, Input, Select } from "antd";
import { AuthType } from "../../utils/types";

const FormItem = Form.Item;
const Option = Select.Option;

export default function AddAuth(props: AuthType) {
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
        value={props.user}
      />
      <Input
        size="large"
        style={{ width: 200 }}
        placeholder="Password"
        name="inputValue"
        value={props.password}
      />
    </Form>
  );
}

AddAuth.defaultProps = { user: "", password: "" };
