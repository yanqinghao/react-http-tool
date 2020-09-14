import React, { Component } from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

export default class RequestType extends Component {
  render() {
    return (
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item>GET</Dropdown.Item>
        <Dropdown.Item>POST</Dropdown.Item>
      </DropdownButton>
    );
  }
}
