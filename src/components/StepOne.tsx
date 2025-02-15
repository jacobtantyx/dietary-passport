import React from 'react';
import { usePassportStore } from '../store';
import { Import as Passport } from 'lucide-react';

const StepOne = () => {
  const { language, userInfo, setUserInfo, setStep } = usePassportStore();

  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <Passport className="w-16 h-16 text-indigo-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          {language === 'en' ? 'Dietary Passport' : '饮食护照'}
        </h1>
        <p className="text-gray-600">
          {language === 'en' 
            ? 'Your personal dining communication tool'
            : '您的个人用餐沟通工具'}
        </p>
      </div>
      <h2 className="text-2xl font-bold mb-2 text-gray-800">
        {language === 'en' ? 'What should we call you?' : '怎么称呼您？'}
      </h2>
      <p className="text-gray-600 mb-6">
        {language === 'en' 
          ? '(Nickname is fine, no need for real name)'
          : '（昵称即可，无需真实姓名）'}
      </p>
      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            {language === 'en' ? 'Your Name' : '您的称呼'}
          </label>
          <input
            type="text"
            id="name"
            value={userInfo.name}
            onChange={(e) => setUserInfo({ name: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder={language === 'en' ? 'Enter your name' : '请输入您的称呼'}
          />
        </div>
        <button
          onClick={() => setStep(2)}
          disabled={!userInfo.name.trim()}
          className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
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

export default StepOne;