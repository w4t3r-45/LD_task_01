import {
  createContext,
  useContext,
  useReducer,
  ReducerWithoutAction,
} from "react";
import { ExtensionContextType } from "../../@types/ExtensionContextType";
import { ExtensionReducer, INIT_STATE } from "./reducer";

const ExtensionContext = createContext<ExtensionContextType>(INIT_STATE);
// const ExtensionContext = createContext(INIT_STATE);

export const useExtensionContext = () => {
  const context = useContext(ExtensionContext);
  return context;
};

export const ExtensionsContextProvider = ({ children }: any) => {
  const [ExtensionState, dispatch] = useReducer(
    ExtensionReducer as ReducerWithoutAction<any>,
    INIT_STATE
  );
  console.log("🔥🔥🔥🔥🔥", ExtensionState);
  return (
    <ExtensionContext.Provider
      // value={{ INIT_STATE: { ...INIT_STATE.INIT_STATE }, dispatch: dispatch }}
      value={{
        INIT_STATE: { ...ExtensionState.INIT_STATE },
        dispatch: dispatch,
      }}
    >
      {children}
    </ExtensionContext.Provider>
  );
};
