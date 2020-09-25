import { ADD_CONFIG, DEL_CONFIG, SET_CONFIG } from "../actionTypes";
import { StateConfigs } from "../../../utils/types";
import { v4 as uuidv4 } from "uuid";

let id = uuidv4();
const initialState: StateConfigs = {
  allIds: [id],
  configsbyId: [
    {
      id: id,
      method: "",
      url: "",
    },
  ],
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case ADD_CONFIG: {
      const { id } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: [
          ...state.configsbyId,
          {
            id: 0,
            method: "",
            url: "",
          },
        ],
      };
    }
    case SET_CONFIG: {
      const { id, content } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    case DEL_CONFIG: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    default:
      return state;
  }
}
