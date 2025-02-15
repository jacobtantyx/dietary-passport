import React from 'react';
import { usePassportStore } from '../store';

const steps = [
  { numberEn: '1', numberZh: '一', titleEn: 'Name', titleZh: '称呼' },
  { numberEn: '2', numberZh: '二', titleEn: 'Allergens', titleZh: '过敏原' },
  { numberEn: '3', numberZh: '三', titleEn: 'Diet Type', titleZh: '饮食类型' },
  { numberEn: '4', numberZh: '四', titleEn: 'Preferences', titleZh: '个人偏好' },
  { numberEn: '5', numberZh: '五', titleEn: 'Passport', titleZh: '护照' },
];

const ProgressBar = () => {
  const { step, language } = usePassportStore();

  return (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        {steps.map((s, i) => (
          <div key={i} className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center mb-2
                ${
                  i + 1 <= step
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
            >
              {language === 'en' ? s.numberEn : s.numberZh}
            </div>
            <span className="text-sm text-gray-600">
              {language === 'en' ? s.titleEn : s.titleZh}
            </span>
          </div>
        ))}
      </div>
      <div className="relative mt-2">
        <div className="absolute top-0 h-1 bg-gray-200 w-full rounded"></div>
        <div
          className="absolute top-0 h-1 bg-indigo-600 rounded transition-all duration-300"
          style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;