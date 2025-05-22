'use client';

import React from 'react';
import ConsultationForm from '../../components/ConsultationForm';
import Link from 'next/link';

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <Link href="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
          {/* <h1 className="mt-4 text-3xl font-bold text-gray-900">
            Schedule Your Free Consultation
          </h1> */}
          {/* <p className="mt-2 text-lg text-gray-600">
            Let us know about your business needs and we'll help you create the perfect chatbot solution.
          </p> */}
        </div>
        
        <ConsultationForm />
      </div>
    </div>
  );
}
