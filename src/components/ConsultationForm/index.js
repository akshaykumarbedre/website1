import React, { useState, useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import StepBudget from './StepBudget';
import StepFour from './StepFour';
import ThankYouView from './ThankYouView';
import ProgressBar from './ProgressBar';

const ConsultationForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  const methods = useForm({
    mode: 'onChange',
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      bestTimeToCall: '',
      businessName: '',
      industry: '',
      monthlyRevenue: '',
      timeWastingTask: '',
      teamSize: '',
      budget: '',
      timeline: '',
      additionalComments: ''
    }
  });

  const steps = [
    <StepOne key="step1" />,
    <StepTwo key="step2" />,
    <StepThree key="step3" />,
    <StepBudget key="step4" />,
    <StepFour key="step5" />
  ];

  const trackFormCompletion = useCallback(() => {
    // This would be replaced with actual analytics tracking
    console.log('Form completed and submitted');
  }, []);

  const handleNext = useCallback(async () => {
    const fieldsToValidate = {
      0: ['fullName', 'email', 'phoneNumber', 'bestTimeToCall'],
      1: ['businessName', 'industry', 'monthlyRevenue'],
      2: ['timeWastingTask', 'teamSize'],
      3: ['budget', 'timeline']
    };

    const isValid = await methods.trigger(fieldsToValidate[currentStep]);
    
    if (isValid) {
      if (currentStep < steps.length - 1) {
        setCurrentStep(prevStep => prevStep + 1);
      }
    }
  }, [currentStep, methods, steps.length]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prevStep => prevStep - 1);
    }
  }, [currentStep]);

  const handleSubmit = methods.handleSubmit(async (data) => {
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      const response = await fetch('http://localhost:8000/api/consultations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || 'Failed to submit form');
      }

      const result = await response.json();
      console.log('Form data submitted successfully:', result);
      trackFormCompletion();
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  });

  if (isSubmitted) {
    return <ThankYouView formData={methods.getValues()} />;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 border border-gray-100 w-full">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mb-4 sm:mb-6 text-center">
        Get Your Free Consultation
      </h2>
      
      <ProgressBar currentStep={currentStep} totalSteps={steps.length} />
      
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit}>
          <div className="mt-4 sm:mt-6 min-h-[280px]">
            {steps[currentStep]}
          </div>
          
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
            {submitError && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                {submitError}
              </div>
            )}
            
            <button
              type="button"
              onClick={handleBack}
              disabled={currentStep === 0 || isSubmitting}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-sm font-medium transition-all w-full sm:w-auto order-2 sm:order-1 ${
                currentStep === 0 || isSubmitting
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-primary border border-primary hover:bg-blue-50'
              }`}
            >
              Back
            </button>
            
            {currentStep < steps.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={isSubmitting}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-primary text-white font-medium rounded-full hover:bg-blue-700 transition-colors shadow-md border border-primary w-full sm:w-auto order-1 sm:order-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-secondary text-white font-medium rounded-full hover:bg-opacity-90 transition-colors shadow-md border border-secondary w-full sm:w-auto order-1 sm:order-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </button>
            )}
          </div>
        </form>
      </FormProvider>

      {/* Add specific CSS to ensure the Next/Submit button is always visible */}
      <style jsx>{`
        button {
          opacity: 1 !important;
        }
        button:hover {
          opacity: 0.9 !important;
        }
        button[type="button"]:last-of-type,
        button[type="submit"] {
          background-color: #1A73E8;
          color: white;
        }
        button[type="submit"] {
          background-color: #E91E63;
        }
        
        @media (max-width: 640px) {
          form {
            padding: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default ConsultationForm;
