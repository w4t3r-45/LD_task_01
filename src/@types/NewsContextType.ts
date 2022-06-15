import { Dispatch } from "react";
import { API_2_RESP, ReducerActionType } from "./ReducerActionType";

export type NewsContextType = {
  INIT_STATE: {
    news__is_data_fetched: boolean;
    news__fetch_failed: boolean;
    news__data: API_2_RESP[] | null;
  };
  dispatch: Dispatch<ReducerActionType>;
};
