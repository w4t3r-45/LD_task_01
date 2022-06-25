import { DRWR__SET_OPEN } from "./constants";
import { DrawerContextType } from "../../@types/DrawerContextType";

export const INIT_STATE = {
  isDrwrOpened: true,
  dispatch: () => {},
};

export const DrawerReducer = (
  state: DrawerContextType = INIT_STATE,
  action: {
    type: string;
    payload: boolean;
  }
): DrawerContextType => {
  switch (action.type) {
    case DRWR__SET_OPEN:
      const newValue = action.payload;
      return {
        ...state,
        isDrwrOpened: Boolean(newValue),
      };
    default:
      return state;
  }
};
