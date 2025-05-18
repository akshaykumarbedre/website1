'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const ChatbotWidget = ({ chatbotUrl = "/chatbot" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if the device is mobile
    useEffect(() => {
        const checkIfMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        
        // Initial check
        checkIfMobile();
        
        // Listen for window resize events
        window.addEventListener('resize', checkIfMobile);
        
        // Clean up
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen ? (
                <div 
                    className="animate-fadeIn bg-white rounded-lg shadow-xl overflow-hidden flex flex-col" 
                    style={{ 
                        width: isMobile ? '100vw' : '375px', 
                        height: isMobile ? '100vh' : '600px',
                        maxHeight: isMobile ? '100vh' : '80vh',
                        position: isMobile ? 'fixed' : 'relative',
                        top: isMobile ? '0' : 'auto',
                        right: isMobile ? '0' : 'auto',
                        bottom: isMobile ? '0' : 'auto',
                        left: isMobile ? '0' : 'auto',
                        zIndex: isMobile ? '9999' : 'auto',
                        borderRadius: isMobile ? '0' : '0.5rem'
                    }}
                >
                    <div className="bg-primary p-3 text-white flex justify-between items-center">
                        <h3 className="font-medium">Agentic Flow Assistant</h3>
                        <button 
                            onClick={toggleChatbot}
                            className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="flex-grow relative">
                        <iframe 
                            src={chatbotUrl}
                            title="Agentic Flow Chatbot"
                            className="absolute top-0 left-0 w-full h-full border-0"
                            allow="microphone; camera"
                        />
                    </div>
                </div>
            ) : (
                <button 
                    onClick={toggleChatbot}
                    aria-label="Open chatbot"
                    className="bg-primary text-white w-14 h-14 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                    <MessageCircle className="h-6 w-6" />
                </button>
            )}
        </div>
    );
};

export default ChatbotWidget;
