export interface KeyValueType {
  name: string;
  value: string;
}

export interface KeyValueList {
  values: KeyValueType[];
}

export interface AuthType {
  type: string;
  user: string;
  password: string;
}

export interface URLString {
  url: string;
}

export interface TypeString {
  type: string;
}

export interface ConfigType {
  id: number;
  method: string;
  url: string;
  data?: KeyValueType[];
  json?: KeyValueType[];
  params?: KeyValueType[];
  headers?: KeyValueType[];
  cookies?: KeyValueType[];
  auth?: AuthType;
  user?: string;
  password?: string;
}

export interface StateConfigs {
  allIds: number[];
  configsbyId: ConfigType[];
}
