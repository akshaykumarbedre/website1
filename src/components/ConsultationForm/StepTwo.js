import React from 'react';
import { useFormContext } from 'react-hook-form';

const StepTwo = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium text-gray-900 mb-4">Tell us about your business</h3>
      
      <div>
        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">
          Business Name
        </label>
        <input
          id="businessName"
          type="text"
          {...register('businessName', { required: 'Business name is required' })}
          className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          placeholder="Enter your business name"
        />
        {errors.businessName && (
          <p className="mt-1 text-red-600 text-sm">{errors.businessName.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="businessDescription" className="block text-sm font-medium text-gray-700 mb-1">
          What does your business do?
        </label>
        <textarea
          id="businessDescription"
          {...register('businessDescription', { 
            required: 'Business description is required',
            minLength: {
              value: 20,
              message: 'Please provide at least 20 characters'
            }
          })}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          placeholder="Briefly describe your business, products, or services..."
        />
        {errors.businessDescription && (
          <p className="mt-1 text-red-600 text-sm">{errors.businessDescription.message}</p>
        )}
      </div>
    </div>
  );
};

export default StepTwo;
