import {
  EXTS__DATA_FETCHED,
  EXTS__DATA_FETCHING,
  EXTS__FETCH_FAILED,
} from "./constants";
import { useExtensionContext } from "./context";
import { API__1_FETCH_DATA } from "../../API_REQUESTORS/API__1";

export const useExtensionAction = () => {
  const { INIT_STATE, dispatch } = useExtensionContext();
  // fetchi data
  const Exts__data_fetch = async () => {
    dispatch({
      type: EXTS__DATA_FETCHING,
    });
    try {
      const response = await API__1_FETCH_DATA();
      console.log("🤣🤣🤣", response);
      dispatch({
        type: EXTS__DATA_FETCHED,
        payload: response.data,
      });
      console.log("😍😍😍", dispatch, INIT_STATE);
    } catch (err) {
      console.log(err);
      dispatch({
        type: EXTS__FETCH_FAILED,
      });
    }
  };
  return {
    Exts__data_fetch,
  };
};
