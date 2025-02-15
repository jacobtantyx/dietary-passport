import React from 'react';
import { usePassportStore } from '../store';
import { dietTypes } from '../data';
import type { DietType } from '../types';
import { Utensils, Leaf, Carrot, Egg } from 'lucide-react';

const dietIcons = {
  no_restrictions: Utensils,
  vegetarian: Leaf,
  vegan: Carrot,
  lacto_ovo: Egg,
};

const StepThree = () => {
  const { language, dietType, setDietType, setStep } = usePassportStore();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {language === 'en' ? 'Select Your Diet Type' : '选择饮食类型'}
      </h2>
      <div className="space-y-4 mb-6">
        {(Object.keys(dietTypes) as DietType[]).map((type) => {
          const Icon = dietIcons[type];
          return (
            <button
              key={type}
              onClick={() => setDietType(type)}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                dietType === type
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-start gap-3">
                <Icon className="w-6 h-6 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">
                    {language === 'en' ? dietTypes[type].nameEn : dietTypes[type].nameZh}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {language === 'en'
                      ? dietTypes[type].descriptionEn
                      : dietTypes[type].descriptionZh}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => setStep(2)}
          className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          {language === 'en' ? 'Back' : '返回'}
        </button>
        <button
          onClick={() => setStep(4)}
          disabled={!dietType}
          className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          {language === 'en' ? 'Next' : '下一步'}
        </button>
      </div>
      <footer className="mt-8 text-center text-sm text-gray-500">
        Developed by Jacob, Contact: <a href="https://jacoblh.notion.site/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">https://jacoblh.notion.site/</a>
      </footer>
    </div>
  );
};

export default StepThree;