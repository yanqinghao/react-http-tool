export interface KeyValueType {
  name: string;
  value: string;
}

export interface KeyValueList {
  value: KeyValueType[];
}

export interface AuthType {
  user: string;
  password: string;
}
