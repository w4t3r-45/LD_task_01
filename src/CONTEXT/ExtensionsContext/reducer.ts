import { ReducerActionType } from "../../@types/ReducerActionType";
import { ExtensionContextType } from "../../@types/ExtensionContextType";

import {
  EXTS__DATA_FETCHED,
  EXTS__DATA_FETCHING,
  EXTS__FETCH_FAILED,
} from "./constants";

export const INIT_STATE = {
  INIT_STATE: {
    ext__is_data_fetched: false,
    ext__fetch_failed: false,
    ext__data: null,
  },
  dispatch: () => {},
};

export const ExtensionReducer = (
  state = INIT_STATE,
  action: ReducerActionType
): ExtensionContextType => {
  switch (action.type) {
    case EXTS__DATA_FETCHING:
      return {
        ...state,
        INIT_STATE: {
          ...state.INIT_STATE,
          ext__is_data_fetched: false,
        },
      };
    case EXTS__DATA_FETCHED:
      return {
        ...state,
        INIT_STATE: {
          ...state.INIT_STATE,
          ext__is_data_fetched: true,
          ext__fetch_failed: false,
          ext__data: [...action.payload!] as any,
        },
      };
    case EXTS__FETCH_FAILED:
      return {
        ...state,
        INIT_STATE: {
          ...state.INIT_STATE,
          ext__fetch_failed: true,
        },
      };
    default:
      return state;
  }
};
