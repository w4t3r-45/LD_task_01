import {
  EXTS__DATA_FETCHED,
  EXTS__DATA_FETCHING,
  EXTS__FETCH_FAILED,
} from "./constants";
import { useExtensionContext } from "./context";
import { API__1_FETCH_DATA } from "../../API_REQUESTORS/API__1";

export const useExtensionAction = () => {
  const { INIT_STATE, dispatch } = useExtensionContext();
  console.log("❤️❤️❤️❤️", dispatch);
  // fetchi data
  const Exts__data_fetch = async () => {
    dispatch({
      type: EXTS__DATA_FETCHING,
    });
    const response = await API__1_FETCH_DATA();
    console.log("🤣🤣🤣", response);
    dispatch({
      type: EXTS__DATA_FETCHED,
      payload: response.data,
    });
  };
  return {
    Exts__data_fetch,
  };
};
