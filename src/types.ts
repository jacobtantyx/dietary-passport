export type Language = 'en' | 'zh';

export interface UserInfo {
  name: string;
}

export interface Allergen {
  id: string;
  nameEn: string;
  nameZh: string;
  icon: string;
  examples: {
    en: string[];
    zh: string[];
  };
}

export type DietType = 'no_restrictions' | 'vegetarian' | 'vegan' | 'lacto_ovo';

export interface Preferences {
  dislikedIngredients: string[];
  likedIngredients: string[];
  dislikedCookingMethods: string[];
  likedCookingMethods: string[];
}

export interface PassportState {
  step: number;
  language: Language;
  userInfo: UserInfo;
  selectedAllergens: string[];
  dietType: DietType | null;
  preferences: Preferences;
  setStep: (step: number) => void;
  setLanguage: (lang: Language) => void;
  setUserInfo: (info: UserInfo) => void;
  toggleAllergen: (id: string) => void;
  setDietType: (type: DietType) => void;
  updatePreferences: (field: keyof Preferences, items: string[]) => void;
}