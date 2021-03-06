import React from "react";
import { Form, Input, InputNumber } from "antd";
import { connect } from "react-redux";
import { ConfigType } from "../utils/types";
import { setConfig } from "../pages/redux/actions";

const FormItem = Form.Item;

interface PropsType {
  id: string;
  ip?: string;
  port?: number;
  setConfig: (id: string, content: ConfigType) => void;
}
function AddURL(props: PropsType) {
  const handleSetIP = (e: any) => {
    console.log(e)
    props.setConfig(props.id, { ip: e.target.value });
  };
  const handleSetPort = (value: any) => {
    console.log(value)
    props.setConfig(props.id, { port: value });
  };
  return (
    <FormItem label="请求链接" style={{marginTop: 50}} labelCol={{ span: 5 }} wrapperCol={{ span: 8 }}>
      <Input
        size="large"
        style={{ width: 300, margin: 10 }}
        placeholder="请输入请求URL"
        name="inputIP"
        value={props.ip}
        onChange={handleSetIP}
      />
      <InputNumber
        size="large"
        style={{ width: 100}}
        placeholder="PORT"
        name="inputPort"
        defaultValue={props.port}
        onChange={handleSetPort}
      />
    </FormItem>
  );
}

AddURL.defaultProps = { ip: "" , port: 5005};

export default connect(null, { setConfig })(AddURL);
