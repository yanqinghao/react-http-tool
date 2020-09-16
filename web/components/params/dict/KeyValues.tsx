import React from "react";
import { Form, Input, Button } from "antd";

const FormItem = Form.Item;

export default function KeyValues(props: { name: string; value: string }) {
  return (
    <FormItem labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
      <Button>删除</Button>
      <Input
        size="large"
        style={{ width: 200 }}
        placeholder="Key"
        name="inputKey"
        value={props.name}
      />
      <Input
        size="large"
        style={{ width: 200 }}
        placeholder="Value"
        name="inputValue"
        value={props.value}
      />
    </FormItem>
  );
}

KeyValues.defaultProps = { name: "", value: "" };
