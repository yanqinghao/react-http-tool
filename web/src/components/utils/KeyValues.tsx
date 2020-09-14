import React, { Component } from "react";
import { Col, Form } from "react-bootstrap";

export default class KeyValues extends Component {
  render() {
    return (
      <Form>
        <Form.Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" />
          </Col>
        </Form.Row>
      </Form>
    );
  }
}
