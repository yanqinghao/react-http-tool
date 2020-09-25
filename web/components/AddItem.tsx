import React from "react";
import AddType from "./AddType";
import AddTabs from "./AddTabs";
import AddURL from "./AddURL";

export default function AddItem() {
  return (
    <div>
      <AddType />
      <AddURL />
      <AddTabs params={[]} auths={[]} />
    </div>
  );
}
