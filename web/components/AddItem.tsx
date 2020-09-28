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
      {typeof props.config.url === undefined ? (
        <AddURL id={props.id} />
      ) : (
        <AddURL id={props.id} url={props.config.url}/>
      )}
      <AddTabs id={props.id} config={props.config} />
      <Button onClick={handleDelConfig}>-</Button>
      <Button>测试接口</Button>
    </div>
  );
}

export default connect(null, { delConfig })(AddItem);
