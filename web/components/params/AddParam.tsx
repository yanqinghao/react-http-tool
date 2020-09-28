import React, { Component } from "react";
import { Form, Button } from "antd";
import { KeyValueType } from "../../utils/types";
import KeyValues from "./dict/KeyValues";

interface PropsType {
  id: string;
  type: string;
  data?: KeyValueType[];
  addConfig?: () => void;
}

interface StateType {
  values: KeyValueType[];
}

export default class AddParam extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state =
      this.props.data === undefined
        ? {
            values: [{ name: "", value: "" }],
          }
        : { values: this.props.data };
  }
  addClickHandler = () => {
    this.setState({ values: [...this.state.values, { name: "", value: "" }] });
  };
  setConfigHandler = () => {

  }
  render() {
    return (
      <Form layout="vertical">
        <Button onClick={this.addClickHandler}>增加</Button>
        {this.state.values.map((e, i) => (
          <KeyValues key={i} name={e.name} value={e.value} />
        ))}
      </Form>
    );
  }
}
