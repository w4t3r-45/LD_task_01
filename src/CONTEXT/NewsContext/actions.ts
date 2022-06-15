import {
  NEWS__DATA_FETCHED,
  NEWS__DATA_FETCHING,
  NEWS__FETCH_FAILED,
} from "./constants";
import { useNewsContext } from "./context";
import { API__2_FETCH_DATA } from "../../API_REQUESTORS/API__2";

export const useExtensionAction = () => {
  const { INIT_STATE, dispatch } = useNewsContext();
  // fetchi data
  const News__data_fetch = async () => {
    dispatch({
      type: NEWS__DATA_FETCHING,
    });
    try {
      const response = await API__2_FETCH_DATA();
      dispatch({
        type: NEWS__DATA_FETCHED,
        payload: response?.data,
      });
    } catch (err) {
      console.log(err);

      dispatch({
        type: NEWS__FETCH_FAILED,
      });
    }
  };
  return {
    News__data_fetch,
  };
};
