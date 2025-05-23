import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import Script from 'next/script';

// Replace the placeholder with a real Calendly integration
const CalendlyEmbed = () => (
  <div className="border border-gray-300 rounded-md p-4 mt-6 bg-white h-[650px]">
    <div id="calendly-embed" className="h-full w-full">
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        onLoad={() => {
          if (window.Calendly) {
            window.Calendly.initInlineWidget({
              url: 'https://calendly.com/akshaykumarbm-aifx/30min',
              parentElement: document.getElementById('calendly-embed'),
              prefill: {},
              utm: {}
            });
          }
        }}
      />
    </div>
  </div>
);

const ThankYouView = ({ formData }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 text-center">
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
        <Check className="h-6 w-6 sm:h-8 sm:w-8 text-green-600" />
      </div>
      
      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-3 sm:mb-4">Thank You!</h2>
      
      <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">
        Your consultation request has been received. We'll contact you at <span className="font-medium text-primary">{formData.phoneNumber}</span> within 24 hours to schedule your free consultation.
      </p>
      
      <div className="bg-gray-50 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 text-left">
        <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-3">What to expect next:</h3>
        <ul className="space-y-2 sm:space-y-3">
          <li className="flex items-start">
            <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center text-white text-xs mr-3 mt-0.5">1</span>
            <span className="text-sm sm:text-base text-gray-700">You'll receive an email confirmation shortly.</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center text-white text-xs mr-3 mt-0.5">2</span>
            <span className="text-sm sm:text-base text-gray-700">Our team will review your requirements.</span>
          </li>
          <li className="flex items-start">
            <span className="flex-shrink-0 h-5 w-5 rounded-full bg-primary flex items-center justify-center text-white text-xs mr-3 mt-0.5">3</span>
            <span className="text-sm sm:text-base text-gray-700">We'll schedule a convenient time for your consultation.</span>
          </li>
        </ul>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium text-gray-900 mb-3">Or Schedule Your Call Now:</h3>
        <CalendlyEmbed />
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          If you have any questions, please email us at
          <a href="mailto:akshaykumarbedre.bm@gmail.com" className="text-primary ml-1">
            akshaykumarbedre.bm@gmail.com
          </a>
        </p>
      </div>

      <Link href="/" className="inline-block mt-4 bg-primary text-white font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-blue-700 transition-colors">
        Return to Homepage
      </Link>
    </div>
  );
};

export default ThankYouView;
