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
  config?: ConfigType;
  delConfig: () => void;
}

function AddItem(props: any) {
  const handleDelConfig = () => {
    props.delConfig(props.id);
    console.log(props);
  };
  return (
    <div>
      <AddType />
      <AddURL />
      <AddTabs params={[]} auths={[]} />
      <Button onClick={handleDelConfig}>-</Button>
    </div>
  );
}

export default connect(null, { delConfig })(AddItem);
