import { Dispatch } from "react";
import { API_1_RESP, API_2_RESP, ReducerActionType } from "./ReducerActionType";

export type ExtensionContextType = {
  INIT_STATE: {
    ext__is_data_fetched: boolean;
    ext__fetch_failed: boolean;
    ext__data: Partial<API_1_RESP | API_2_RESP>[] | null;
  };
  dispatch: Dispatch<ReducerActionType>;
};
