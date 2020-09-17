import { ADD_CONFIG, SET_CONFIG, DEL_CONFIG } from "./actionTypes";
import { ConfigType } from "./reducers/configs";

let nextConfigId = 0;

export const addConfig = (content: ConfigType) => ({
  type: ADD_CONFIG,
  payload: {
    id: ++nextConfigId,
    content,
  },
});

export const setConfig = (id: number, content: ConfigType) => ({
  type: SET_CONFIG,
  payload: { id, content },
});

export const delConfig = (id: number) => ({
  type: DEL_CONFIG,
  payload: { id },
});
