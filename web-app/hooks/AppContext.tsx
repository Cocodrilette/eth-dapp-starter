import {
  useState,
  useRef,
  useEffect,
  createContext,
  useMemo,
  useContext,
} from "react";
import { providers } from "ethers";
import Web3Modal from "web3modal";

export interface AppContext {}

export const AppContext = createContext<AppContext | null>(null);

export const AppContextProvider = ({ children }: any) => {
  useEffect(() => {});

  const values: AppContext = useMemo(() => ({}), []);

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  const appContext = useContext(AppContext);

  if (!appContext) {
    return console.error({ error: "ERROR_DEPLOYING_ETHEREUM_CONTEXT" });
  }

  return appContext;
}

export default useAppContext;
