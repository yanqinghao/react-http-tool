import React from "react";
import { Tabs } from "antd";
import AddAuth from './params/AddAuth'
import AddParam from './params/AddParam'

const { TabPane } = Tabs;


interface TabType {
    params: [];
    auths: [];
}
export default function AddTabs(props: TabType) {
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
