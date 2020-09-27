import { ADD_CONFIG, DEL_CONFIG, SET_CONFIG } from "../actionTypes";
import { StateConfigs, ConfigType } from "../../../utils/types";
import { v4 as uuidv4 } from "uuid";

let id = uuidv4();
const initialState: StateConfigs = {
  allIds: [id],
  configsbyId: {
    [id]: {},
  },
};

export default function (
  state = initialState,
  action: { type: string; payload: { id: string; content?: ConfigType } }
) {
  switch (action.type) {
    case ADD_CONFIG: {
      const { id } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        configsbyId: {
          ...state.configsbyId,
          [id]: {},
        },
      };
    }
    case SET_CONFIG: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds],
        configsbyId: {
          ...state.configsbyId,
          [id]: { ...state.configsbyId[id], content },
        },
      };
    }
    case DEL_CONFIG: {
      const { id } = action.payload;
      const { [id]: _, ...filteredData } = state.configsbyId;
      return {
        ...state,
        allIds: [...state.allIds.filter((item) => item !== id)],
        configsbyId: {
          ...filteredData,
        },
      };
    }
    default:
      return state;
  }
}
