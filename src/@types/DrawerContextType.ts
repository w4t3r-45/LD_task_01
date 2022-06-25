import { Dispatch } from "react";

export type DrawerContextType = {
  isDrwrOpened: boolean;
  dispatch: Dispatch<{
    type: string;
    payload: boolean;
  }>;
};
