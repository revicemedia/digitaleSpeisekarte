import { createContext, useContext } from "react";
import { useContentful } from "../contentful/setup";
import { allQuery } from "../graphql/all";
import { DATA2 } from "../interfaces/interfaces";

const MainContext = createContext<DATA2>({});

export function MainProvider({ children }: any) {
  let data = useContentful(allQuery);

  return <MainContext.Provider value={data}>{children}</MainContext.Provider>;
}

export function useMainContext() {
  const context = useContext(MainContext);

  if (!context) throw new Error("Doesn't work!");

  return context;
}
