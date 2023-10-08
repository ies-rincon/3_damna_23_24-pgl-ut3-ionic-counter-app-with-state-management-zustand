import { create } from "zustand";

export const useCounterStore = create<CounterStoreType>((set) => ({
  clickCounter: 0,
  handleRefresh: () => set((_) => ({ clickCounter: 0 })),
  handleIncrement: () =>
    set((state) => ({ clickCounter: state.clickCounter + 1 })),
  handleDecrement: () =>
    set((state) => ({ clickCounter: state.clickCounter - 1 })),
}));
