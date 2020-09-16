import React, { Component } from "react";
import { Form, Button } from "antd";
import KeyValues from "./dict/KeyValues";

export default class Headers extends Component {
  render() {
    return (
      <Form layout="vertical">
        <Button>增加</Button>
        <KeyValues />
      </Form>
    );
  }
}
