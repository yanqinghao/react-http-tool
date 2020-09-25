import React from "react";
import { Form, Input } from "antd";
import { URLString } from "../utils/types";

const FormItem = Form.Item;

export default function AddURL(props: URLString) {
  return (
    <FormItem label="请求链接" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
      <Input
        size="large"
        style={{ width: 500 }}
        placeholder="请输入请求URL"
        name="inputURL"
        value={props.url}
      />
    </FormItem>
  );
}

AddURL.defaultProps = { url: "" };
