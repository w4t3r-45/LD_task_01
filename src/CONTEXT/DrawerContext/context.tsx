import { createContext, useContext, useReducer, useMemo } from "react";
import { DrawerContextType } from "../../@types/DrawerContextType";
import { DrawerReducer, INIT_STATE } from "./reducer";

const DrawerContext = createContext<DrawerContextType>(INIT_STATE);

export const useDrawerContext = () => {
  const context = useContext(DrawerContext);
  return context;
};

export const DrawerContextProvider = ({ children }: any) => {
  const [DrawerState, dispatch] = useReducer(DrawerReducer, INIT_STATE);

  const StateValue = useMemo(() => {
    return {
      ...DrawerState,
      dispatch: dispatch,
    };
  }, [DrawerState]);

  return (
    <DrawerContext.Provider value={StateValue}>
      {children}
    </DrawerContext.Provider>
  );
};
