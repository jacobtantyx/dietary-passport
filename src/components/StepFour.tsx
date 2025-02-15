import React, { useState } from 'react';
import { usePassportStore } from '../store';
import { Plus, X } from 'lucide-react';

const StepFour = () => {
  const { language, preferences, updatePreferences, setStep } = usePassportStore();
  const [newItems, setNewItems] = useState({
    dislikedIngredients: '',
    likedIngredients: '',
    dislikedCookingMethods: '',
    likedCookingMethods: '',
  });

  const handleAdd = (field: keyof typeof newItems) => {
    const value = newItems[field].trim();
    if (value) {
      updatePreferences(field, [...preferences[field], value]);
      setNewItems((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleRemove = (field: keyof typeof preferences, index: number) => {
    updatePreferences(
      field,
      preferences[field].filter((_, i) => i !== index)
    );
  };

  const renderSection = (
    field: keyof typeof preferences,
    titleEn: string,
    titleZh: string,
    placeholderEn: string,
    placeholderZh: string
  ) => (
    <div className="mb-6">
      <h3 className="font-medium mb-2">
        {language === 'en' ? titleEn : titleZh}
      </h3>
      <div className="flex gap-2 mb-2">
        <input
          type="text"
          value={newItems[field]}
          onChange={(e) => setNewItems((prev) => ({ ...prev, [field]: e.target.value }))}
          onKeyPress={(e) => e.key === 'Enter' && handleAdd(field)}
          placeholder={language === 'en' ? placeholderEn : placeholderZh}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
        <button
          onClick={() => handleAdd(field)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {preferences[field].map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 rounded-full"
          >
            {item}
            <button
              onClick={() => handleRemove(field, index)}
              className="hover:text-red-500"
            >
              <X className="w-4 h-4" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {language === 'en' ? 'Your Preferences' : '个人偏好'}
      </h2>
      {renderSection(
        'dislikedIngredients',
        'Ingredients You Dislike',
        '不喜欢的食材',
        'Enter ingredient',
        '输入食材'
      )}
      {renderSection(
        'likedIngredients',
        'Ingredients You Like',
        '喜欢的食材',
        'Enter ingredient',
        '输入食材'
      )}
      {renderSection(
        'dislikedCookingMethods',
        'Cooking Methods You Dislike',
        '不喜欢的烹饪方式',
        'Enter cooking method',
        '输入烹饪方式'
      )}
      {renderSection(
        'likedCookingMethods',
        'Cooking Methods You Like',
        '喜欢的烹饪方式',
        'Enter cooking method',
        '输入烹饪方式'
      )}
      <div className="flex gap-4">
        <button
          onClick={() => setStep(3)}
          className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          {language === 'en' ? 'Back' : '返回'}
        </button>
        <button
          onClick={() => setStep(5)}
          className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          {language === 'en' ? 'Next' : '下一步'}
        </button>
      </div>
    </div>
  );
};

export default StepFour;