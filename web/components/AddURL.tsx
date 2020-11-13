import React from "react";
import { Form, Input } from "antd";
import { connect } from "react-redux";
import { ConfigType } from "../utils/types";
import { setConfig } from "../pages/redux/actions";

const FormItem = Form.Item;

interface PropsType {
  id: string;
  url?: string;
  setConfig: (id: string, content: ConfigType) => void;
}
function AddURL(props: PropsType) {
  const handleSetConfig = (e: any) => {
    console.log(e)
    props.setConfig(props.id, { url: e.target.value });
  };
  const handleFocus = (e: any) => {
    console.log(e)
  };
  return (
    <FormItem label="请求链接" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
      <Input
        size="large"
        style={{ width: 500 }}
        placeholder="请输入请求URL"
        name="inputURL"
        value={props.url}
        onChange={handleSetConfig}
        onFocus={handleFocus}
      />
    </FormItem>
  );
}

AddURL.defaultProps = { url: "" };

export default connect(null, { setConfig })(AddURL);
