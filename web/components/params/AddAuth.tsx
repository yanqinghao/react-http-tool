import React, { Component } from "react";
import { Form, Input, Select } from "antd";
import { connect } from "react-redux";
import { AuthType, ConfigType } from "../../utils/types";
import { sendConfig, setConfig } from "../../pages/redux/actions";

const FormItem = Form.Item;
const Option = Select.Option;

interface PropsType {
  id: string;
  auth: AuthType;
  setConfig: (id: string, content: ConfigType) => void;
}

interface StateType {
  auth: AuthType;
}
class AddAuth extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = { auth: this.props.auth };
  }
  changeSelectHandler = (e: string) => {
    let authValue = { ...this.state.auth, authType: e };
    this.setState({ auth: authValue });
    this.props.setConfig(this.props.id, {
      auth: authValue,
    });
  };
  inputChangeHandler = (type: string, event: any) => {
    let authValue = { ...this.state.auth, [type]: event.target.value };
    this.setState({ auth: authValue });
    this.props.setConfig(this.props.id, {
      auth: authValue,
    });
  };
  render() {
    return (
      <Form layout="vertical">
        <FormItem
          label="鉴权方式"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 8 }}
        >
          <Select
            size="large"
            defaultValue="HTTPBasicAuth"
            style={{ width: 200 }}
            value={this.state.auth.authType}
            onChange={this.changeSelectHandler}
          >
            <Option value="HTTPBasicAuth">HTTPBasicAuth</Option>
            <Option value="HTTPDigestAuth">HTTPDigestAuth</Option>
            <Option value="OAuth1">OAuth1</Option>
          </Select>
        </FormItem>
        <Input
          size="large"
          style={{ width: 200 }}
          placeholder="User Name"
          name="inputKey"
          value={this.state.auth.user}
          onChange={(e) => this.inputChangeHandler("user", e)}
        />
        <Input
          size="large"
          style={{ width: 200 }}
          placeholder="Password"
          name="inputValue"
          value={this.state.auth.password}
          onChange={(e) => this.inputChangeHandler("password", e)}
        />
      </Form>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    setConfig: (id: string, content: ConfigType) => {
      dispatch(setConfig(id, content));
      dispatch(sendConfig());
    },
  };
};

export default connect(null, mapDispatchToProps)(AddAuth);
