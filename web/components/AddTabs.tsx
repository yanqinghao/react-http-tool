import React from "react";
import { Tabs } from "antd";
import { connect } from "react-redux";
import AddAuth from "./params/AddAuth";
import AddParam from "./params/AddParam";
import { ConfigType } from "../utils/types";
import { setConfig } from "../pages/redux/actions";

const { TabPane } = Tabs;

interface PropsType {
  id: string;
  config: ConfigType;
  // setConfig: (id: string, content: ConfigType) => void;
}
interface TabType {
  params: [];
  auths: [];
}
export default function AddTabs(props: PropsType) {
  return (
    <Tabs defaultActiveKey="1" tabPosition="left" size="large">
      {["header", "data", "json", "params", "cookies"].map((e, i) => (
        <TabPane tab={e} key={i}>
          {props.config.requestData === undefined ? (
            <AddParam id={props.id} type={e} />
          ) : props.config.requestData[e] === undefined ? (
            <AddParam id={props.id} type={e} />
          ) : (
            <AddParam
              id={props.id}
              type={e}
              data={props.config.requestData[e]}
            />
          )}
        </TabPane>
      ))}
      <TabPane tab="authorization" key="6">
        <AddAuth />
      </TabPane>
    </Tabs>
  );
}
