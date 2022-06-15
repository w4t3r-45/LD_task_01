import { ReducerActionType } from "../../@types/ReducerActionType";
import { NewsContextType } from "../../@types/NewsContextType";

import {
  NEWS__DATA_FETCHED,
  NEWS__DATA_FETCHING,
  NEWS__FETCH_FAILED,
} from "./constants";

export const INIT_STATE = {
  INIT_STATE: {
    news__is_data_fetched: false,
    news__fetch_failed: false,
    news__data: null,
  },
  dispatch: () => {},
};

export const NewsReducer = (
  state = INIT_STATE,
  action: ReducerActionType
): NewsContextType => {
  switch (action.type) {
    case NEWS__DATA_FETCHING:
      return {
        ...state,
        INIT_STATE: {
          ...state.INIT_STATE,
          news__is_data_fetched: false,
        },
      };
    case NEWS__DATA_FETCHED:
      return {
        ...state,
        INIT_STATE: {
          ...state.INIT_STATE,
          news__is_data_fetched: true,
          news__fetch_failed: false,
          news__data: [...action.payload!] as any,
        },
      };
    case NEWS__FETCH_FAILED:
      return {
        ...state,
        INIT_STATE: {
          ...state.INIT_STATE,
          news__fetch_failed: true,
        },
      };
    default:
      return state;
  }
};
