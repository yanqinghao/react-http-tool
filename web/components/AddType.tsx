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
        defaultValue="get"
        style={{ width: 100 }}
        value={props.type}
        onChange={handleSetConfig}
      >
        <Option value="get">GET</Option>
        <Option value="post">POST</Option>
      </Select>
    </FormItem>
  );
}

AddType.defaultProps = { type: "get" };

export default connect(null, { setConfig })(AddType);
