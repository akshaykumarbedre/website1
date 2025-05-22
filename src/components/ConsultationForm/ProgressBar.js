import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const progress = ((currentStep) / (totalSteps - 1)) * 100;
  
  return (
    <div className="mb-4 sm:mb-8">
      <div className="flex justify-between mb-2 text-xs sm:text-sm">
        <span className="font-medium text-green-600">Step {currentStep + 1} of {totalSteps}</span>
        <span className="font-medium text-gray-500">{Math.round(progress)}% Complete</span>
      </div>
      <div className="w-full h-1.5 sm:h-2 bg-gray-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-green-500 transition-all duration-300 ease-in-out" 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
