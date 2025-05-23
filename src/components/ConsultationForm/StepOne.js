import React from 'react';
import { useFormContext } from 'react-hook-form';

const StepOne = () => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="space-y-4 sm:space-y-6">
      <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-3 sm:mb-4">Tell us about yourself</h3>
      
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
          id="fullName"
          type="text"
          {...register('fullName', { required: 'Full name is required' })}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          placeholder="Enter your full name"
        />
        {errors.fullName && (
          <p className="mt-1 text-red-600 text-xs sm:text-sm">{errors.fullName.message}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          placeholder="Enter your email address"
        />
        {errors.email && (
          <p className="mt-1 text-red-600 text-xs sm:text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          id="phoneNumber"
          type="tel"
          {...register('phoneNumber', { 
            required: 'Phone number is required',
            pattern: {
              value: /^[+]?[\d\s\-\(\)]+$/,
              message: 'Please enter a valid phone number'
            }
          })}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary transition-all"
          placeholder="Enter your phone number"
        />
        {errors.phoneNumber && (
          <p className="mt-1 text-red-600 text-xs sm:text-sm">{errors.phoneNumber.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="bestTimeToCall" className="block text-sm font-medium text-gray-700 mb-1">
          Best time to call
        </label>
        <select
          id="bestTimeToCall"
          {...register('bestTimeToCall', { required: 'Please select your preferred time' })}
          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white"
        >
          <option value="">Select your preferred time</option>
          <option value="morning">Morning (9 AM - 12 PM)</option>
          <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
          <option value="evening">Evening (5 PM - 8 PM)</option>
          <option value="anytime">Anytime</option>
        </select>
        {errors.bestTimeToCall && (
          <p className="mt-1 text-red-600 text-xs sm:text-sm">{errors.bestTimeToCall.message}</p>
        )}
      </div>
    </div>
  );
};

export default StepOne;
