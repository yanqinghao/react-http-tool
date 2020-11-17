import store from "../pages/redux/store";

export interface KeyValueType {
  name: string;
  value: string;
}

export interface KeyValueList {
  values: KeyValueType[];
}

export interface URLString {
  url: string;
}

export interface TypeString {
  type: string;
}
export interface ParamType {
  data?: KeyValueType[];
  json?: KeyValueType[];
  params?: KeyValueType[];
  headers?: KeyValueType[];
  cookies?: KeyValueType[];
}
export interface ConfigType {
  method?: string;
  ip?: string;
  port?: number;
  endTag?: string;
  triggerInterval?: number;
}

export interface StateConfigs {
  allIds: string[];
  configsbyId: { [id: string]: ConfigType };
}

export type AppDispatch = typeof store.dispatch;
