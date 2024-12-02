import { create } from 'zustand';

type ThemeStore = {
  isDarkMode: boolean;
  language: 'en' | 'so';
  toggleDarkMode: () => void;
  setLanguage: (lang: 'en' | 'so') => void;
};

export const useThemeStore = create<ThemeStore>((set) => ({
  isDarkMode: false,
  language: 'en',
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
  setLanguage: (lang) => set({ language: lang }),
}));