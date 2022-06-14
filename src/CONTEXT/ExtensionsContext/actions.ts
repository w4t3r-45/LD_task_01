import {
  EXTS__DATA_FETCHED,
  EXTS__DATA_FETCHING,
  EXTS__FETCH_FAILED,
} from "./constants";
import { useExtensionContext } from "./context";
import { API__1_FETCH_DATA } from "../../API_REQUESTORS/API__1";

const { INIT_STATE, dispatch } = useExtensionContext();

export const Exts__data_fetch = async () => {
  const response = await API__1_FETCH_DATA();
};
