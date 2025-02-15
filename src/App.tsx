import React from 'react';
import { usePassportStore } from './store';
import StepOne from './components/StepOne';
import StepTwo from './components/StepTwo';
import StepThree from './components/StepThree';
import StepFour from './components/StepFour';
import StepFive from './components/StepFive';
import ProgressBar from './components/ProgressBar';
import LanguageSwitch from './components/LanguageSwitch';

function App() {
  const { step } = usePassportStore();

  const renderStep = () => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree />;
      case 4:
        return <StepFour />;
      case 5:
        return <StepFive />;
      default:
        return <StepOne />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <div className="flex justify-end mb-4">
          <LanguageSwitch />
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <ProgressBar />
          {renderStep()}
        </div>
      </div>
    </div>
  );
}

export default App;