import React from 'react';
import { useFormContext } from 'react-hook-form';
import { Check } from 'lucide-react';

const StepThree = () => {
  const { register, watch, formState: { errors } } = useFormContext();
  const watchOther = watch('chatbotObjectives.other', false);

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium text-gray-900 mb-4">What are your chatbot objectives?</h3>
      
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select all that apply:
        </label>
        
        <div className="space-y-3">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="customerSupport"
              className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary"
              {...register('chatbotObjectives.customerSupport')}
            />
            <label htmlFor="customerSupport" className="ml-3 text-gray-700">
              Customer Support & FAQ Automation
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="leadGeneration"
              className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary"
              {...register('chatbotObjectives.leadGeneration')}
            />
            <label htmlFor="leadGeneration" className="ml-3 text-gray-700">
              Lead Generation & Sales
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="appointmentBooking"
              className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary"
              {...register('chatbotObjectives.appointmentBooking')}
            />
            <label htmlFor="appointmentBooking" className="ml-3 text-gray-700">
              Appointment Booking & Scheduling
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              type="checkbox"
              id="other"
              className="h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary"
              {...register('chatbotObjectives.other')}
            />
            <label htmlFor="other" className="ml-3 text-gray-700">
              Other
            </label>
          </div>
        </div>
        
        {watchOther && (
          <div className="mt-3 pl-8">
            <input
              type="text"
              {...register('otherObjective', {
                required: watchOther ? 'Please specify your objective' : false
              })}
              className="w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary transition-all"
              placeholder="Please specify your objective"
            />
            {errors.otherObjective && (
              <p className="mt-1 text-red-600 text-sm">{errors.otherObjective.message}</p>
            )}
          </div>
        )}
        
        {errors.chatbotObjectives && (
          <p className="mt-1 text-red-600 text-sm">Please select at least one objective</p>
        )}
      </div>
    </div>
  );
};

export default StepThree;
