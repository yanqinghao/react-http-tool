import React, { Component } from "react";
import { FormControl, InputGroup } from "react-bootstrap";

export default class URL extends Component {
  render() {
    return (
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">URL</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    );
  }
}
