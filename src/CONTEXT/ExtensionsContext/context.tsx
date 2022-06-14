import { createContext, useContext, useReducer } from "react";
import { ExtensionContextType } from "../../@types/ExtensionContextType";
import { ExtensionReducer, INIT_STATE } from "./reducer";

const ExtensionContext = createContext<ExtensionContextType>(INIT_STATE);

export const useExtensionContext = () => {
  const context = useContext(ExtensionContext);
  return context;
};

export const ExtensionsContextProvider = ({ children }: any) => {
  const [ExtensionState, dispatch] = useReducer(
    ExtensionReducer as any,
    INIT_STATE
  );
  return (
    <ExtensionContext.Provider
      value={{ INIT_STATE: { ...INIT_STATE.INIT_STATE }, dispatch: dispatch }}
    >
      {children}
    </ExtensionContext.Provider>
  );
};
