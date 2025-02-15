import { create } from 'zustand';
import { Language, PassportState, Preferences } from './types';

const initialPreferences: Preferences = {
  dislikedIngredients: [],
  likedIngredients: [],
  dislikedCookingMethods: [],
  likedCookingMethods: [],
};

export const usePassportStore = create<PassportState>((set) => ({
  step: 1,
  language: 'en',
  userInfo: { name: '' },
  selectedAllergens: [],
  dietType: null,
  preferences: initialPreferences,

  setStep: (step) => set({ step }),
  setLanguage: (language) => set({ language }),
  setUserInfo: (userInfo) => set({ userInfo }),
  toggleAllergen: (id) =>
    set((state) => ({
      selectedAllergens: state.selectedAllergens.includes(id)
        ? state.selectedAllergens.filter((a) => a !== id)
        : [...state.selectedAllergens, id],
    })),
  setDietType: (dietType) => set({ dietType }),
  updatePreferences: (field, items) =>
    set((state) => ({
      preferences: {
        ...state.preferences,
        [field]: items,
      },
    })),
}));