import React from "react";
import { Form, Input, Button } from "antd";
import { KeyValueType } from "../../../utils/types";
const FormItem = Form.Item;

// export interface KeyValueType {
//   name: string;
//   value: string;
// }

export default function KeyValues(props: KeyValueType) {
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
