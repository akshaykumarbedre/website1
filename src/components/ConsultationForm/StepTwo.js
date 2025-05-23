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
        <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
          Industry
        </label>
        <input
          id="industry"
          type="text"
          {...register('industry', { required: 'Industry is required' })}
          className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          placeholder="e.g., E-commerce, Healthcare, Education, Real Estate"
        />
        {errors.industry && (
          <p className="mt-1 text-red-600 text-sm">{errors.industry.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="monthlyRevenue" className="block text-sm font-medium text-gray-700 mb-1">
          Monthly Revenue Range
        </label>
        <select
          id="monthlyRevenue"
          {...register('monthlyRevenue', { required: 'Please select your monthly revenue range' })}
          className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white"
        >
          <option value="">Select your monthly revenue range</option>
          <option value="0-1L">₹0-1L</option>
          <option value="1L-5L">₹1L-5L</option>
          <option value="5L-20L">₹5L-20L</option>
          <option value="20L+">₹20L+</option>
        </select>
        {errors.monthlyRevenue && (
          <p className="mt-1 text-red-600 text-sm">{errors.monthlyRevenue.message}</p>
        )}
      </div>
    </div>
  );
};

export default StepTwo;
