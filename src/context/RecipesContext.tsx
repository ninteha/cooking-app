import { createContext, useContext } from "react";
export type GlobalContent = {
  filterValue: any;
  setFilterValue: (value: []) => void;
};
export const GlobalContext = createContext<GlobalContent>({
  filterValue: [],
  setFilterValue: () => {},
});
export const useGlobalContext = () => useContext(GlobalContext);
