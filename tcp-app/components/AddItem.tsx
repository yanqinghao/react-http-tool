import React from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import AddType from "./AddType";
import AddTabs from "./AddTabs";
import AddURL from "./AddURL";
import { ConfigType } from "../utils/types";
import { delConfig } from "../pages/redux/actions";

interface PropsType {
  id: string;
  config: ConfigType;
  delConfig: (id: string) => void;
}

function AddItem(props: PropsType) {
  const handleDelConfig = () => {
    props.delConfig(props.id);
    console.log(props);
  };
  return (
    <div>
      {typeof props.config.method === undefined ? (
        <AddType id={props.id} />
      ) : (
        <AddType id={props.id} type={props.config.method}/>
      )}
      {typeof props.config.ip === undefined ? (
        <AddURL id={props.id} />
      ) : (
        <AddURL id={props.id} ip={props.config.ip}/>
      )}
    </div>
  );
}

export default connect(null, { delConfig })(AddItem);
