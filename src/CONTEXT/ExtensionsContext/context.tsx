import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  ReducerWithoutAction,
} from "react";
import { ExtensionContextType } from "../../@types/ExtensionContextType";
import { ExtensionReducer, INIT_STATE } from "./reducer";

const ExtensionContext = createContext<ExtensionContextType>(INIT_STATE);

export const useExtensionContext = () => {
  const context = useContext(ExtensionContext);
  return context;
};

export const ExtensionsContextProvider = ({ children }: any) => {
  const [ExtensionState, dispatch] = useReducer(
    ExtensionReducer as ReducerWithoutAction<any>,
    INIT_STATE
  );
  // memoizing state value to prevent children from re-rendering
  const StateValue = useMemo(() => {
    return {
      INIT_STATE: { ...ExtensionState.INIT_STATE },
      dispatch: dispatch,
    };
  }, [ExtensionState]);
  return (
    <ExtensionContext.Provider
      // value={{ INIT_STATE: { ...INIT_STATE.INIT_STATE }, dispatch: dispatch }}
      value={StateValue}
    >
      {children}
    </ExtensionContext.Provider>
  );
};
