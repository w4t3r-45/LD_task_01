import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  ReducerWithoutAction,
} from "react";
import { NewsContextType } from "../../@types/NewsContextType";
import { NewsReducer, INIT_STATE } from "./reducer";

const NewsContext = createContext<NewsContextType>(INIT_STATE);

export const useNewsContext = () => {
  const context = useContext(NewsContext);
  return context;
};

export const NewsContextProvider = ({ children }: any) => {
  const [NewsState, dispatch] = useReducer(
    NewsReducer as ReducerWithoutAction<any>,
    INIT_STATE
  );
  // memoizing state value to prevent children from re-rendering
  const StateValue = useMemo(() => {
    return {
      INIT_STATE: { ...NewsState.INIT_STATE },
      dispatch: dispatch,
    };
  }, [NewsState]);
  return (
    <NewsContext.Provider value={StateValue}>{children}</NewsContext.Provider>
  );
};
