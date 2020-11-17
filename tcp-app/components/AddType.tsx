import React from "react";
import { Form, Select } from "antd";
import { connect } from "react-redux";
import { ConfigType } from "../utils/types";
import { setConfig } from "../pages/redux/actions";

const FormItem = Form.Item;
const Option = Select.Option;

interface PropsType {
  id: string;
  type?: string;
  setConfig: (id: string, content: ConfigType) => void;
}
function AddType(props: PropsType) {
  const handleSetConfig = (e: any) => {
    props.setConfig(props.id, { method: e });
  };
  return (
    <FormItem
      label="选择请求方式"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
    >
      <Select
        size="large"
        defaultValue="send"
        style={{ width: 100 }}
        value={props.type}
        onChange={handleSetConfig}
      >
        <Option value="send">发送数据</Option>
        <Option value="recv">接收数据</Option>
        <Option value="sendAndRecv">发送后接收数据</Option>
        <Option value="sendAndRecvAsyn">发送并异步接收</Option>
        <Option value="sendAndRecvOnce">发送并接收（每次断开）</Option>
      </Select>
    </FormItem>
  );
}

AddType.defaultProps = { type: "send" };

export default connect(null, { setConfig })(AddType);
