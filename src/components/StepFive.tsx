import React, { useState } from 'react';
import { usePassportStore } from '../store';
import { allergens, dietTypes } from '../data';
import { AlertTriangle, Download, Languages } from 'lucide-react';
import html2canvas from 'html2canvas';

const languages = [
  { code: 'es', name: 'Spanish', localName: 'Español' },
  { code: 'fr', name: 'French', localName: 'Français' },
  { code: 'de', name: 'German', localName: 'Deutsch' },
  { code: 'it', name: 'Italian', localName: 'Italiano' },
  { code: 'pt', name: 'Portuguese', localName: 'Português' },
  { code: 'ru', name: 'Russian', localName: 'Русский' },
  { code: 'ja', name: 'Japanese', localName: '日本語' },
  { code: 'ko', name: 'Korean', localName: '한국어' },
  { code: 'ar', name: 'Arabic', localName: 'العربية' },
  { code: 'hi', name: 'Hindi', localName: 'हिन्दी' },
];

const StepFive = () => {
  const { language, userInfo, selectedAllergens, dietType, preferences, setStep } = usePassportStore();
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const selectedAllergensData = allergens.filter((a) => selectedAllergens.includes(a.id));

  const handleSaveImage = async () => {
    const element = document.getElementById('passport-content');
    if (element) {
      const canvas = await html2canvas(element);
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `dietary-passport-${userInfo.name}.png`;
      link.href = dataUrl;
      link.click();
    }
  };

  return (
    <div className="space-y-6">
      <div id="passport-content" className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {language === 'en' ? 'Dietary Passport' : '饮食护照'}
          </h2>
          <p className="text-gray-600">
            {language === 'en' ? `For ${userInfo.name}` : `为 ${userInfo.name}`}
          </p>
        </div>

        {selectedAllergensData.length > 0 && (
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4">
            <div className="flex items-center gap-2 text-red-700 mb-2">
              <AlertTriangle className="w-5 h-5" />
              <h3 className="font-bold">
                {language === 'en' ? 'Allergen Warning' : '过敏警告'}
              </h3>
            </div>
            <div className="space-y-2">
              {selectedAllergensData.map((allergen) => (
                <div key={allergen.id}>
                  <span className="font-medium">
                    {language === 'en' ? allergen.nameEn : allergen.nameZh}
                  </span>
                  <span className="text-sm text-gray-600 block">
                    {language === 'en'
                      ? allergen.examples.en.join(', ')
                      : allergen.examples.zh.join('、')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {dietType && (
          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-lg p-4">
            <h3 className="font-bold text-indigo-700 mb-2">
              {language === 'en' ? 'Diet Type' : '饮食类型'}
            </h3>
            <p className="font-medium">
              {language === 'en' ? dietTypes[dietType].nameEn : dietTypes[dietType].nameZh}
            </p>
            <p className="text-gray-600">
              {language === 'en'
                ? dietTypes[dietType].descriptionEn
                : dietTypes[dietType].descriptionZh}
            </p>
          </div>
        )}

        {Object.entries(preferences).some(([_, values]) => values.length > 0) && (
          <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4">
            <h3 className="font-bold text-gray-700 mb-4">
              {language === 'en' ? 'Preferences' : '个人偏好'}
            </h3>
            {preferences.dislikedIngredients.length > 0 && (
              <div className="mb-3">
                <p className="font-medium text-red-600">
                  {language === 'en' ? 'Please avoid:' : '请避免：'}
                </p>
                <p>{preferences.dislikedIngredients.join(', ')}</p>
              </div>
            )}
            {preferences.likedIngredients.length > 0 && (
              <div className="mb-3">
                <p className="font-medium text-green-600">
                  {language === 'en' ? 'I like:' : '我喜欢：'}
                </p>
                <p>{preferences.likedIngredients.join(', ')}</p>
              </div>
            )}
            {preferences.dislikedCookingMethods.length > 0 && (
              <div className="mb-3">
                <p className="font-medium text-red-600">
                  {language === 'en' ? 'Cooking methods to avoid:' : '请避免的烹饪方式：'}
                </p>
                <p>{preferences.dislikedCookingMethods.join(', ')}</p>
              </div>
            )}
            {preferences.likedCookingMethods.length > 0 && (
              <div>
                <p className="font-medium text-green-600">
                  {language === 'en' ? 'Preferred cooking methods:' : '偏好的烹饪方式：'}
                </p>
                <p>{preferences.likedCookingMethods.join(', ')}</p>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="border-t pt-6">
        <div className="flex items-center gap-2 mb-4">
          <Languages className="w-5 h-5 text-indigo-600" />
          <h3 className="font-medium">
            {language === 'en' ? 'Translate to Local Language' : '翻译成当地语言'}
          </h3>
        </div>
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">
            {language === 'en' ? 'Select language' : '选择语言'}
          </option>
          {languages.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.name} ({lang.localName})
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => setStep(4)}
          className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          {language === 'en' ? 'Back' : '返回'}
        </button>
        <button
          onClick={handleSaveImage}
          className="flex-1 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
        >
          <Download className="w-5 h-5" />
          {language === 'en' ? 'Save as Image' : '保存图片'}
        </button>
      </div>
      <p className="text-center text-sm text-gray-500">
        {language === 'en' ? 'You can also use screenshot to save' : '也可截屏保存'}
      </p>

      <footer className="mt-8 text-center text-sm text-gray-500">
        Developed by Jacob, Contact: <a href="https://jacoblh.notion.site/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-700">https://jacoblh.notion.site/</a>
      </footer>
    </div>
  );
};

export default StepFive;