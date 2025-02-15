import React from 'react';
import { usePassportStore } from '../store';
import { Languages } from 'lucide-react';

const LanguageSwitch = () => {
  const { language, setLanguage } = usePassportStore();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm hover:bg-gray-50 transition-colors"
    >
      <Languages className="w-4 h-4" />
      <span>{language === 'en' ? '中文' : 'English'}</span>
    </button>
  );
};

export default LanguageSwitch;