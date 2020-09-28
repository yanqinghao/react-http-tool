import { Button } from "antd";
import React, { Component } from "react";
import { connect } from "react-redux";
import AddItem from "./AddItem";
import { ConfigType, StateConfigs } from "../utils/types";
import { addConfig } from "../pages/redux/actions";

interface PropsType {
  allIds: string[];
  configsbyId: { [id: string]: ConfigType };
  addConfig: () => void;
}

class RequestConfig extends Component<PropsType> {
  constructor(props: any) {
    super(props);
  }
  handleAddConfig = () => {
    this.props.addConfig();
    console.log(this.props);
  };
  render() {
    return (
      <div>
        {this.props.allIds.map((i) => (
          <AddItem key={i} id={i} config={this.props.configsbyId[i]} />
        ))}
        <Button onClick={this.handleAddConfig}>+</Button>
      </div>
    );
  }
}

const mapStateToProps = (state: StateConfigs) => {
  return { ...state };
};

export default connect(mapStateToProps, { addConfig })(RequestConfig);
