import React from 'react';
import { useFormContext } from 'react-hook-form';

const StepBudget = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium text-gray-900 mb-4">Project Details</h3>
      
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
          What's your budget range? (₹)
        </label>
        <select
          id="budget"
          {...register('budget', { required: 'Please select a budget range' })}
          className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white"
        >
          <option value="">Select your budget range</option>
          <option value="under-50k">Under ₹50,000</option>
          <option value="50k-100k">₹50,000 - ₹1,00,000</option>
          <option value="100k-300k">₹1,00,000 - ₹3,00,000</option>
          <option value="above-300k">Above ₹3,00,000</option>
        </select>
        {errors.budget && (
          <p className="mt-1 text-red-600 text-sm">{errors.budget.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-1">
          What's your expected timeline?
        </label>
        <select
          id="timeline"
          {...register('timeline', { required: 'Please select a timeline' })}
          className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white"
        >
          <option value="">Select your timeline</option>
          <option value="asap">As soon as possible</option>
          <option value="1-month">Within 1 month</option>
          <option value="3-months">Within 3 months</option>
          <option value="flexible">Flexible</option>
        </select>
        {errors.timeline && (
          <p className="mt-1 text-red-600 text-sm">{errors.timeline.message}</p>
        )}
      </div>
    </div>
  );
};

export default StepBudget;
