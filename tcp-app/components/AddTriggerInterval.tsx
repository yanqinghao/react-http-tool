import React from "react";
import { Form, InputNumber } from "antd";
import { connect } from "react-redux";
import { ConfigType } from "../utils/types";
import { setConfig } from "../pages/redux/actions";

const FormItem = Form.Item;

interface PropsType {
  id: string;
  triggerInterval?: number;
  setConfig: (id: string, content: ConfigType) => void;
}
function AddTriggerInterval(props: PropsType) {
  const handleSetConfig = (value: any) => {
    console.log(value)
    props.setConfig(props.id, { ip: value });
  };
  return (
    <FormItem label="触发间隔" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
      <InputNumber
        size="large"
        style={{ width: 150 }}
        placeholder="PORT"
        name="inputPort"
        defaultValue={props.triggerInterval}
        onChange={handleSetConfig}
      />
    </FormItem>
  );
}

AddTriggerInterval.defaultProps = { triggerInterval: 1};

export default connect(null, { setConfig })(AddTriggerInterval);
