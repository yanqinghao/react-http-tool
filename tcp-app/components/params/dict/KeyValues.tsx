import React from "react";
import { Form, Input, Button } from "antd";
import { KeyValueType } from "../../../utils/types";
const FormItem = Form.Item;

interface PropsType {
  id: number;
  name: string;
  value: string;
  onChange: (key: number, type: string, event: any) => void;
  onDelete: (key: number) => void;
}

export default function KeyValues(props: PropsType) {
  return (
    <FormItem labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
      <Button onClick={() => props.onDelete(props.id)}>删除</Button>
      <Input
        size="large"
        style={{ width: 200 }}
        placeholder="Key"
        name="inputKey"
        value={props.name}
        onChange={(e) => props.onChange(props.id, "name", e)}
      />
      <Input
        size="large"
        style={{ width: 200 }}
        placeholder="Value"
        name="inputValue"
        value={props.value}
        onChange={(e) => props.onChange(props.id, "value", e)}
      />
    </FormItem>
  );
}
