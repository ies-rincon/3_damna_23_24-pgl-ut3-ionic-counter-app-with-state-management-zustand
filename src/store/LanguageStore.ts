import { create } from "zustand";

export const useLanguageStore = create<LanguageStoreType>((set, get) => ({
  languageApp: "es",
  changeLanguageApp: () => {
    const { languageApp } = get();
    if (languageApp === "es") {
      set({ languageApp: "en" });
    } else {
      set({ languageApp: "es" });
    }
  },
}));
