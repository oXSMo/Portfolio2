import { create } from "zustand";

export const useHoverSlice = create((set) => ({
  size: 1,
  setSize: (fn) =>
    set((state) => ({
      size: typeof fn === "function" ? fn(state.size) : fn,
    })),
}));
