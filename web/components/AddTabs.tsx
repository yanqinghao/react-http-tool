import React from "react";
import { Tabs } from "antd";
import AddAuth from "./params/AddAuth";
import AddParam from "./params/AddParam";

const { TabPane } = Tabs;

interface TabType {
  params: [];
  auths: [];
}
export default function AddTabs(props: TabType) {
  return (
    <Tabs defaultActiveKey="1" tabPosition="left" size="large">
      {["Header", "Data", "Json", "Params", "Cookies"].map((e, i) => (
        <TabPane tab={e} key={i}>
          <AddParam />
        </TabPane>
      ))}
      <TabPane tab="Authorization" key="6">
        <AddAuth />
      </TabPane>
    </Tabs>
  );
}
