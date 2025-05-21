import React from 'react';
import { useFormContext } from 'react-hook-form';

const StepFour = () => {
  const { register } = useFormContext();

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium text-gray-900 mb-4">Additional Information</h3>
      
      <div>
        <label htmlFor="additionalComments" className="block text-sm font-medium text-gray-700 mb-1">
          Any additional information or specific requirements?
        </label>
        <textarea
          id="additionalComments"
          {...register('additionalComments')}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          placeholder="Share any other details that would help us understand your needs better..."
        />
      </div>
      
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-800">
        <p className="font-medium mb-1">Almost done!</p>
        <p>Click the Submit button below to complete your consultation request. We'll get back to you within 24 hours to schedule your free consultation session.</p>
      </div>
    </div>
  );
};

export default StepFour;
