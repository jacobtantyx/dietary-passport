import React from 'react';
import { usePassportStore } from '../store';
import { allergens } from '../data';

const StepTwo = () => {
  const { language, selectedAllergens, toggleAllergen, setStep } = usePassportStore();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {language === 'en' ? 'Select Your Allergens' : '选择过敏原'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {allergens.map((allergen) => {
          const Icon = allergen.icon;
          const isSelected = selectedAllergens.includes(allergen.id);
          return (
            <button
              key={allergen.id}
              onClick={() => toggleAllergen(allergen.id)}
              className={`p-4 rounded-lg border-2 transition-all ${
                isSelected
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <div className="flex items-center gap-3">
                <Icon className="w-6 h-6" />
                <div className="text-left">
                  <h3 className="font-medium">
                    {language === 'en' ? allergen.nameEn : allergen.nameZh}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {language === 'en'
                      ? allergen.examples.en.join(', ')
                      : allergen.examples.zh.join('、')}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => setStep(1)}
          className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          {language === 'en' ? 'Back' : '返回'}
        </button>
        <button
          onClick={() => setStep(3)}
          className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {language === 'en' ? 'Next' : '下一步'}
        </button>
      </div>
    </div>
  );
};

export default StepTwo;