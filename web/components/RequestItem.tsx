import React, { Component } from "react";
import RequestURL from "./RequestURL";
import RequstType from "./RequstType";
import RequestParams from "./RequestParams";

export default class RequestItem extends Component {
  render() {
    return (
      <div>
        <RequstType />
        <RequestURL />
        <RequestParams />
      </div>
    );
  }
}
