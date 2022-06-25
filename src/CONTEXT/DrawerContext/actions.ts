import { DRWR__SET_OPEN } from "./constants";

export const useDrawerActions = () => {
  const Drwr__set_open = (status: boolean) => {
    return {
      type: DRWR__SET_OPEN,
      payload: status,
    };
  };
  return { Drwr__set_open };
};
