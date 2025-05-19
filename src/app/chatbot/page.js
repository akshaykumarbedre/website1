'use client';

import { useState, useRef, useEffect } from 'react';
import { Bot, ArrowRight, Send, Loader2, ChevronLeft } from 'lucide-react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { motion, AnimatePresence } from 'framer-motion';


export default function ChatbotPage() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m your AI assistant. How can I help you today?',
      isMarkdown: false
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState(null);
  const messagesEndRef = useRef(null);

  // Initialize session ID on component mount
  useEffect(() => {
    // Check if we already have a session ID in localStorage
    let storedSessionId = localStorage.getItem('chatbot_session_id');
    
    // If no session ID exists, create one
    if (!storedSessionId) {
      // Generate a random session ID with timestamp and random string
      storedSessionId = `session-${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
      localStorage.setItem('chatbot_session_id', storedSessionId);
    }
    
    setSessionId(storedSessionId);
  }, []);

  // Auto scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (input.trim() === '' || !sessionId) return;

    const userMessage = input.trim();
    setInput('');
    
    // Add user message to chat
    setMessages((prev) => [
      ...prev,
      { role: 'user', content: userMessage },
    ]);
    
    // Set loading state
    setIsLoading(true);
    
    try {
      const response = await axios.post(
        'https://5ccgqo82ug.execute-api.us-east-1.amazonaws.com/Chatbot-for-website',
        { 
          inputText: userMessage,
          sessionId: sessionId
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          timeout: 15000 // 15 second timeout
        }
      );
      
      console.log('API Response:', response.data);
      
      // Extract the response string from the response object
      const assistantResponse = response.data.response || "I couldn't find a specific answer for that.";
      
      // Add assistant response to chat with markdown support
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: assistantResponse, isMarkdown: true },
      ]);
      
      // Optionally, if you want to show the retrieved contexts as well:
      if (response.data.retrieved_context && response.data.retrieved_context.length > 0) {
        // You could display this in the UI if desired, or just log it
        console.log('Context used:', response.data.retrieved_context);
      }
    } catch (error) {
      console.error('Error calling chatbot API:', error);
      
      // Provide specific error message based on error type
      let errorMessage = 'Sorry, I encountered an error. Please try again later.';
      
      if (error.code === 'ECONNABORTED') {
        errorMessage = 'The request timed out. The server might be experiencing high load.';
      } else if (error.response) {
        errorMessage = `Server error: ${error.response.status}. Please try again later.`;
      } else if (error.request) {
        errorMessage = 'Unable to connect to the chatbot service. Please check your internet connection.';
      }
      
      // Add error message to chat
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: errorMessage, isError: true },
      ]);
      
      // Provide a fallback response for better user experience
      setTimeout(() => {
        const fallbackResponse = getFallbackResponse(userMessage);
        setMessages((prev) => [
          ...prev,
          { role: 'assistant', content: `Demo mode: ${fallbackResponse}`, isMarkdown: true },
        ]);
      }, 1500);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Fallback responses when API is unavailable
  const getFallbackResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi')) {
      return "Hello! I'm currently in demo mode. How can I help you today?";
    }
    
    if (lowerQuery.includes('service') || lowerQuery.includes('offer')) {
      return "We offer AI chatbot development, system integrations with Slack and other platforms, and business process automation solutions. Which would you like to know more about?";
    }
    
    if (lowerQuery.includes('price') || lowerQuery.includes('cost')) {
      return "Our chatbot solutions start at ₹30,000, with system integrations from ₹25,000. The final price depends on your specific requirements. Would you like to discuss your project?";
    }
    
    if (lowerQuery.includes('contact') || lowerQuery.includes('talk')) {
      return "You can reach out through our contact form at the bottom of the home page. Would you like me to direct you there?";
    }
    
    return "I'm currently in demo mode. In a fully implemented version, I would connect to our knowledge base to answer this question. Would you like to learn more about our chatbot development services?";
  };

  // Function to render message content with or without markdown
  const renderMessageContent = (msg) => {
    if (msg.isMarkdown) {
      return (
        <div className="markdown-content">
          <ReactMarkdown
            components={{
              p: ({node, ...props}) => <p className="mb-3 last:mb-0" {...props} />,
              code: ({node, inline, ...props}) => 
                inline ? 
                  <code className="bg-opacity-5 bg-black px-1 py-0.5 rounded font-mono" {...props} /> :
                  <code className="block bg-opacity-5 bg-black p-3 rounded font-mono my-2 overflow-x-auto" {...props} />,
              pre: ({node, ...props}) => <pre className="bg-opacity-5 bg-black p-3 rounded overflow-x-auto my-2" {...props} />,
              ul: ({node, ...props}) => <ul className="ml-6 mb-3 list-disc" {...props} />,
              ol: ({node, ...props}) => <ol className="ml-6 mb-3 list-decimal" {...props} />,
              h1: ({node, ...props}) => <h1 className="text-xl font-semibold mt-4 mb-2" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-lg font-semibold mt-4 mb-2" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-base font-semibold mt-4 mb-2" {...props} />,
            }}
          >
            {msg.content}
          </ReactMarkdown>
        </div>
      );
    }
    return msg.content;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 text-slate-800">
      {/* Header */}
    



          {/* Chat Interface */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 mb-8">
            {/* Chat Messages */}
            <div className="h-[500px] overflow-y-auto p-4 md:p-6 bg-pattern">
              <div className="space-y-4 pb-4">
                {messages.length === 0 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col sm:flex-row items-start mb-6 bg-blue-50 p-3 sm:p-6 rounded-xl border border-blue-100"
                  >
                    <div className="flex-shrink-0 mb-3 sm:mb-0 sm:mr-4 flex justify-center w-full sm:w-auto">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center shadow-md">
                        <Bot className="h-7 w-7" />
                      </div>
                    </div>
                    <div className="w-full">
                      <h3 className="font-bold text-lg text-blue-800 mb-2">Welcome to AI Assistant!</h3>
                      <p className="text-gray-700 mb-3">How can I help you today?</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {[
                          "What are your business hours?",
                          "Tell me about your services",
                          "Do you offer custom solutions?",
                          "What special offers are available?"
                        ].map((suggestion, i) => (
                          <button 
                            key={i}
                            onClick={() => {
                              setInput(suggestion);
                              setTimeout(() => document.querySelector('form button[type="submit"]').click(), 100);
                            }}
                            className="text-left px-3 py-2 bg-white rounded-lg border border-blue-200 text-sm text-blue-600 hover:bg-blue-50 transition"
                          >
                            {suggestion}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
                
                <AnimatePresence>
                  {messages.map((message, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {message.role !== 'user' && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center mr-2 flex-shrink-0">
                          <Bot className="h-5 w-5" />
                        </div>
                      )}
                      <div 
                        className={`max-w-[80%] p-4 rounded-xl ${
                          message.role === 'user' 
                            ? 'bg-indigo-600 text-white rounded-tr-none' 
                            : message.isError 
                              ? 'bg-red-50 text-red-700 border border-red-200 rounded-tl-none'
                              : 'bg-slate-100 text-slate-800 rounded-tl-none'
                        } ${message.isMarkdown ? 'markdown-wrapper' : ''}`}
                      >
                        {renderMessageContent(message)}
                      </div>
                      {message.role === 'user' && (
                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center ml-2 flex-shrink-0">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                          </svg>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </AnimatePresence>
                
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 text-white flex items-center justify-center mr-2 flex-shrink-0">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div className="bg-slate-100 p-4 rounded-xl rounded-tl-none max-w-[80%] flex items-center">
                      <div className="flex space-x-2 items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="bg-slate-50 border-t border-slate-200 p-4">
              <div className="flex">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message here..."
                  className="flex-grow px-4 py-3 rounded-l-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={isLoading || input.trim() === ''}
                  className="bg-indigo-600 text-white px-6 rounded-r-xl hover:bg-indigo-700 transition disabled:bg-indigo-400 flex items-center justify-center"
                >
                  {isLoading ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </button>
              </div>
              {/* <div className="mt-3 flex flex-col sm:flex-row sm:justify-between items-center text-xs text-gray-500">
                <div className="mb-2 sm:mb-0 text-center sm:text-left">
                  Powered by WebAI • Your intelligent assistant
                </div>
                <div className="flex space-x-2 text-center">
                  <button className="hover:text-blue-600 transition">Help</button>
                  <span>•</span>
                  <button className="hover:text-blue-600 transition">Privacy</button>
                  <span>•</span>
                  <button className="hover:text-blue-600 transition">Feedback</button>
                </div>
              </div> */}
            </form>
          </div>
      
      
      <style jsx global>{`
        .bg-pattern {
          background-color: #f9fafc;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232563eb' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
        }
        
        .markdown-wrapper .markdown-content ul {
          list-style-type: disc;
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .markdown-wrapper .markdown-content ol {
          list-style-type: decimal;
          margin-left: 1.5rem;
          margin-bottom: 1rem;
        }
        
        .markdown-wrapper .markdown-content h1,
        .markdown-wrapper .markdown-content h2,
        .markdown-wrapper .markdown-content h3 {
          font-weight: 600;
          margin-top: 1rem;
          margin-bottom: 0.5rem;
        }
        
        .markdown-wrapper .markdown-content h1 {
          font-size: 1.25rem;
        }
        
        .markdown-wrapper .markdown-content h2 {
          font-size: 1.15rem;
        }
        
        .markdown-wrapper .markdown-content h3 {
          font-size: 1rem;
        }
        
        .markdown-wrapper .markdown-content p {
          margin-bottom: 0.75rem;
        }
        
        .markdown-wrapper .markdown-content code {
          background-color: rgba(0, 0, 0, 0.05);
          padding: 0.1rem 0.3rem;
          border-radius: 0.25rem;
          font-family: monospace;
        }
        
        .markdown-wrapper .markdown-content pre {
          background-color: rgba(0, 0, 0, 0.05);
          padding: 0.75rem;
          border-radius: 0.25rem;
          overflow-x: auto;
          margin: 0.5rem 0;
        }
        
        .markdown-wrapper .markdown-content a {
          color: #2563eb;
          text-decoration: c;
        }
      `}</style>
    </div>
  );
}