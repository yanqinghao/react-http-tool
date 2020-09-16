import React, { Component } from "react";
import { Tabs } from "antd";
import Headers from './params/Headers'
import Data from './params/Data'
import Json from './params/Json'
import Params from './params/Params'
import Cookies from './params/Cookies'
import Authorization from './params/Authorization'

const { TabPane } = Tabs;

export class RequestParams extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="1" tabPosition="left" size="large">
        <TabPane tab="Header" key="1">
          <Headers />
        </TabPane>
        <TabPane tab="Data" key="2">
          <Data />
        </TabPane>
        <TabPane tab="Json" key="3">
          <Json />
        </TabPane>
        <TabPane tab="Params" key="4">
          <Params />
        </TabPane>
        <TabPane tab="Cookies" key="5">
          <Cookies />
        </TabPane>
        <TabPane tab="Authorization" key="6">
          <Authorization />
        </TabPane>
      </Tabs>
    );
  }
}

export default RequestParams;
