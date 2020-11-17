import React from "react";
import { Form, Input } from "antd";
import { connect } from "react-redux";
import { ConfigType } from "../utils/types";
import { setConfig } from "../pages/redux/actions";

const FormItem = Form.Item;

interface PropsType {
  id: string;
  endTag?: string;
  setConfig: (id: string, content: ConfigType) => void;
}
function AddEndTag(props: PropsType) {
  const handleSetConfig = (e: any) => {
    console.log(e);
    props.setConfig(props.id, { endTag: e.target.value });
  };
  return (
    <FormItem
      label="文件结束标志"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 8 }}
    >
      <Input
        size="large"
        style={{ width: 500 }}
        placeholder="请输入文件发送结束的标志位"
        name="inputEndTag"
        value={props.endTag}
        onChange={handleSetConfig}
      />
    </FormItem>
  );
}

AddEndTag.defaultProps = { endTag: JSON.stringify({ end: true }) };

export default connect(null, { setConfig })(AddEndTag);
