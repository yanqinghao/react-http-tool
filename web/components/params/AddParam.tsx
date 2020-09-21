import React from "react";
import { Form, Button } from "antd";
import { KeyValueList } from "../../utils/types";
import KeyValues from "./dict/KeyValues";

// interface KeyValueList {
//   value: KeyValueType[];
// }

export default function AddParam(props: KeyValueList) {
  return (
    <Form layout="vertical">
      <Button>增加</Button>
      {props.value.map((i) => (
        <KeyValues key={0} name={i.name} value={i.value} />
      ))}
    </Form>
  );
}
