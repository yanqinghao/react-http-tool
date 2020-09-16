import React, { Component } from "react";
import { Form, Button } from "antd";
import KeyValues from "./dict/KeyValues";

interface KeyValueContainer {
  id: number[];
  values: string[][];
}

export default class Cookies extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      id: 0,
      values: [],
    };
  }
  addKeyValue = () => {
    console.log(this.state);
    this.state.values.push({ key: "", value: "" });
    this.state.id++;
  };
  render() {
    return (
      <Form layout="vertical">
        <Button onClick={this.addKeyValue}>增加</Button>
        {this.state.values.map((i) => (
          <KeyValues key={0} name={i.key} value={i.value} />
        ))}
      </Form>
    );
  }
}
