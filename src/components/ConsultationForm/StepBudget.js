import React from 'react';
import { useFormContext } from 'react-hook-form';

const StepBudget = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium text-gray-900 mb-4">Budget & Timeline</h3>
      
      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
          Budget for AI solutions
        </label>
        <select
          id="budget"
          {...register('budget', { required: 'Please select a budget range' })}
          className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white"
        >
          <option value="">Select your budget range</option>
          <option value="10K-30K">₹10K-30K</option>
          <option value="30K-1L">₹30K-1L</option>
          <option value="1L+">₹1L+</option>
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
