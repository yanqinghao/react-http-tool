import { ADD_CONFIG, SET_CONFIG, DEL_CONFIG, SEND_CONFIG } from "./actionTypes";
import { ConfigType } from "../../utils/types";
import { v4 as uuidv4 } from "uuid";

export const addConfig = () => ({
  type: ADD_CONFIG,
  payload: {
    id: uuidv4(),
  },
});

export const setConfig = (id: string, content: ConfigType) => ({
  type: SET_CONFIG,
  payload: { id, content },
});

export const delConfig = (id: string) => ({
  type: DEL_CONFIG,
  payload: { id },
});

export const sendConfig = () => ({
  type: SEND_CONFIG,
  payload: {},
});
