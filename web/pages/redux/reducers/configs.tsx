import { ADD_CONFIG, DEL_CONFIG, SET_CONFIG } from "../actionTypes";

enum AuthType {
  HTTPBasicAuth = "HTTPBasicAuth",
  HTTPDigestAuth = "HTTPDigestAuth",
  OAuth1 = "OAuth1",
}

interface KeyValueType {
  key: string;
  value: string;
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

interface stateConfigs {
  allIds: number[];
  configsbyId: ConfigType[];
}

const initialState: stateConfigs = {
  allIds: [0],
  configsbyId: [
    {
      id: 0,
      method: "",
      url: "",
    },
  ],
};

export default function (state = initialState, action: any) {
  switch (action.type) {
    case ADD_CONFIG: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
          },
        },
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
