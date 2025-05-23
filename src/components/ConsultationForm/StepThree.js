import React from 'react';
import { useFormContext } from 'react-hook-form';

const StepThree = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium text-gray-900 mb-4">Operations & Team</h3>
      
      <div>
        <label htmlFor="timeWastingTask" className="block text-sm font-medium text-gray-700 mb-1">
          Current biggest time-wasting task
        </label>
        <textarea
          id="timeWastingTask"
          {...register('timeWastingTask', { 
            required: 'Please describe your biggest time-wasting task',
            minLength: {
              value: 10,
              message: 'Please provide at least 10 characters'
            }
          })}
          rows={4}
          className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          placeholder="Describe the repetitive or time-consuming task that AI could help automate (e.g., answering customer queries, scheduling appointments, data entry...)"
        />
        {errors.timeWastingTask && (
          <p className="mt-1 text-red-600 text-sm">{errors.timeWastingTask.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-1">
          Team size
        </label>
        <select
          id="teamSize"
          {...register('teamSize', { required: 'Please select your team size' })}
          className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white"
        >
          <option value="">Select your team size</option>
          <option value="1-5">1-5 employees</option>
          <option value="6-20">6-20 employees</option>
          <option value="21-50">21-50 employees</option>
          <option value="51-100">51-100 employees</option>
          <option value="100+">100+ employees</option>
        </select>
        {errors.teamSize && (
          <p className="mt-1 text-red-600 text-sm">{errors.teamSize.message}</p>
        )}
      </div>
    </div>
  );
};

export default StepThree;
