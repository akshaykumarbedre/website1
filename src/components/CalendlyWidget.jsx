'use client';

import { useEffect } from 'react';
import Script from 'next/script';

export default function CalendlyWidget() {
  useEffect(() => {
    // Initialize Calendly widget after component mounts and script is loaded
    if (window.Calendly) {
      window.Calendly.initBadgeWidget({ 
        url: 'https://calendly.com/akshaykumarbm-aifx/30min', 
        text: 'Book Free Call Instantly', 
        color: '#0069ff',   
        textColor: '#ffffff' 
      });
    }
  }, []);

  return (
    <>
      <link 
        href="https://assets.calendly.com/assets/external/widget.css" 
        rel="stylesheet"
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        onLoad={() => {
          if (window.Calendly) {
            window.Calendly.initBadgeWidget({ 
              url: 'https://calendly.com/akshaykumarbm-aifx/30min', 
              text: 'Book Free Call Instantly', 
              color: '#0069ff', 
              textColor: '#ffffff' 
            });
          }
        }}
      />
    </>
  );
}
