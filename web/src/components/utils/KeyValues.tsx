import React, { Component } from "react";
import { Col, Form, Button } from "react-bootstrap";

export default class KeyValues extends Component {
  render() {
    return (
      <Form>
        <Button>del</Button>
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
