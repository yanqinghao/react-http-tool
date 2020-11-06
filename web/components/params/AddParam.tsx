import React, { Component } from "react";
import { Form, Button } from "antd";
import { connect } from "react-redux";
import { ParamType, ConfigType, KeyValueType } from "../../utils/types";
import KeyValues from "./dict/KeyValues";
import { setConfig } from "../../pages/redux/actions";

interface PropsType {
  id: string;
  type: string;
  data?: ParamType;
  setConfig: (id: string, content: ConfigType) => void;
}

interface StateType {
  values: KeyValueType[];
}

class AddParam extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state =
      this.props.data === undefined ||
      this.props.data[this.props.type] === undefined
        ? {
            values: [{ name: "", value: "" }],
          }
        : { values: this.props.data[this.props.type] };
    this.setConfigHandler = this.setConfigHandler.bind(this);
    this.delConfigHandler = this.delConfigHandler.bind(this);
  }
  addClickHandler = () => {
    let params = [...this.state.values, { name: "", value: "" }];
    this.setState({ values: params });
    this.props.setConfig(this.props.id, {
      requestData:
        this.props.data === undefined
          ? { [this.props.type]: params }
          : { ...this.props.data, [this.props.type]: params },
    });
  };
  setConfigHandler = (key: number, type: string, event: any) => {
    let params = this.state.values.map((e, i) =>
      i == key ? { ...e, [type]: event.target.value } : e
    );
    this.setState({
      values: params,
    });
    this.props.setConfig(this.props.id, {
      requestData:
        this.props.data === undefined
          ? { [this.props.type]: params }
          : { ...this.props.data, [this.props.type]: params },
    });
  };
  delConfigHandler = (key: number) => {
    let params = this.state.values.filter((e, i) => i !== key);
    this.setState({
      values: params,
    });
    this.props.setConfig(this.props.id, {
      requestData:
        this.props.data === undefined
          ? { [this.props.type]: params }
          : { ...this.props.data, [this.props.type]: params },
    });
  };
  render() {
    return (
      <Form layout="vertical">
        <Button onClick={this.addClickHandler}>增加</Button>
        {this.state.values.map((e, i) => (
          <KeyValues
            id={i}
            key={i}
            name={e.name}
            value={e.value}
            onChange={this.setConfigHandler}
            onDelete={this.delConfigHandler}
          />
        ))}
      </Form>
    );
  }
}

export default connect(null, { setConfig })(AddParam);
