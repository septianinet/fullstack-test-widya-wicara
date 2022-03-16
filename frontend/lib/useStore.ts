import create from "zustand";
import createProductSlice from "./createProductSlice";
const useStore = create<any>((set,get) => ({
  ...createProductSlice(set, get)
}))

export default useStore;