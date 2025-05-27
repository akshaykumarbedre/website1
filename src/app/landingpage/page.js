'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, Check, Menu, X, Smartphone, MessageCircle, Database, Shield, ArrowRight, Clock, TrendingUp, Users, HeartHandshake, Star, AlertCircle } from 'lucide-react';
import ChatbotWidget from '../../components/ChatbotWidget';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  
  // Handle scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeIn');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Features data - Reframed as outcomes
  const features = [
    {
      title: "Your Bot Gets Smarter Every Day",
      description: "Real customer feedback automatically improves your bot's responses—so you never miss sales due to poor answers. Stop losing leads to confusion.",
      icon: <Database className="h-12 w-12 text-primary" />
    },
    {
      title: "Test Without Risk, Scale With Confidence",
      description: "500 free sessions let you prove ROI before investing more. No guesswork—see exactly how much time and money you'll save.",
      icon: <MessageCircle className="h-12 w-12 text-primary" />
    },
    {
      title: "Respond Faster Than Your Competition",
      description: "While competitors take hours to reply, your customers get instant, accurate answers 24/7. Turn response speed into your competitive advantage.",
      icon: <ChevronRight className="h-12 w-12 text-primary" />
    },
    {
      title: "Turn Website Visitors Into Customers",
      description: "Engage visitors the moment they land on your site. Answer questions instantly and guide them to purchase—don't let them leave without converting.",
      icon: <Smartphone className="h-12 w-12 text-primary" />
    }
  ];
  
  // Pricing tiers - Enhanced with ROI taglines
  const pricingTiers = [
    {
      name: "Basic",
      tagline: "Perfect for small teams who need support automation without tech headaches",
      roiTagline: "Save 20+ hours/week on repetitive customer queries",
      description: "FAQ bot, simple rule-based or RAG",
      buildFee: "₹40,000",
      discountedFee: "₹32,000",
      discount: "20% OFF",
      limitedDeal: "⚡ Limited-Time: Next 5 customers get 20% off + free demo!",
     
      features: [
        "500 free sessions to prove ROI before you pay more",
        "Instant website integration—no developer needed",
        "Handle your top 10 FAQs automatically",
        "Email support to keep you moving",
        "Free 1-hour strategy call (worth ₹5,000)"
      ],
      guarantee: "🛡️ Zero-Risk Promise: Not happy? Full refund within 30 days—no questions asked.",
      callToAction: "Stop wasting time on repetitive questions. Automate your FAQs risk-free and reclaim your day!"
    },
    {
      name: "Growth",
      tagline: "Built for scaling businesses ready to plug into existing tools",
      roiTagline: "Reduce support tickets by 65% while increasing satisfaction",
      description: "Database/API integration, CRM sync",
      buildFee: "₹1,00,000",
      discountedFee: "₹89,000",
      discount: "10% OFF",
      bonus: "🎁 This Month Only: Free team training session (worth ₹20,000)!",

      features: [
        "500 free sessions to fuel your growth",
        "Sync customer data from your CRM automatically",
        "Connect to your existing tools without hassle",
        "Custom branding that matches your business",
        "Priority support—get help when you need it",
        "Free training to get your team up to speed"
      ],
      guarantee: "📈 Performance Promise: If your bot doesn't handle 1,000+ queries in month 1, we refund 50% of your build fee.",
      callToAction: "Scale your customer service without scaling your team. Connect everything seamlessly and watch productivity soar!",
      highlighted: true
    },
    {
      name: "Enterprise",
      tagline: "Built for brands with complex needs and high stakes",
      roiTagline: "Complete customer service transformation with dedicated support",
      description: "Admin panel, agent app, ERP/CRM",
      buildFee: "₹3,00,000",
      discountedFee: "₹2,55,000",
      discount: "15% OFF",

      features: [
        "500 free sessions to kick things off",
        "Full control with custom admin dashboard",
        "Empower your team with agent applications",
        "Seamless ERP/CRM integration",
        "Know what customers want with custom analytics",
        "Your brand front and center with white labeling",
        "24/7 support—we've got your back",
        "Dedicated success manager (worth ₹50,000)"
      ],
      guarantee: "⚡ Ironclad SLA: 99.9% uptime guaranteed—or we compensate you for every minute of downtime.",
      callToAction: "This isn't just software—it's a complete customer service transformation with a dedicated team ensuring your success."
    }
  ];
  
  // Platform integrations
  const platforms = [
    { name: "WhatsApp Business", fee: "₹12,000", logo: "/images/whatsapp-logo.png", hidden: true },
    { name: "Telegram", fee: "₹8,000", logo: "/images/telegram-logo.png" },
    { name: "Slack", fee: "₹10,000", logo: "/images/slack-logo.png" },
    { name: "Discord", fee: "₹10,000", logo: "/images/discord-logo.png" },
    { name: "Others (Teams, Line)", fee: "₹10,000–₹12,000", logo: "/images/others-logo.png" },
  ];
  
  // Tech stack
  const techStack = [
    { name: "Python/FastAPI", description: "Backend", logo: "/images/python-logo.png" },
    { name: "OpenAI GPT", description: "AI Engine", logo: "/images/openai-logo.png" },
    { name: "AWS", description: "Infrastructure", logo: "/images/aws-logo.png" },
    { name: "LangChain", description: "Orchestration", logo: "/images/langchain-logo.png" },
    { name: "Node.js", description: "Frontend", logo: "/images/nodejs-logo.png" },
    { name: "Qdrant", description: "Vector Store", logo: "/images/quadrant-logo.png" },
  ];
  
  // Target audiences
  const audiences = [
    "Small and medium enterprises seeking 24/7 web engagement",
    "Coaching institutes and edtech platforms",
    "E-commerce sites requiring customer support automation",
    "Healthcare and real estate appointment systems",
    "SaaS providers and startups automating user interaction"
  ];
  
  // Process steps
  const processSteps = [
    "Select your plan based on your needs.",
    "Receive 500 free sessions to pilot the chatbot.",
    "We build and deploy your chatbot within 7–21 days.",
    "Integrate on your website or preferred messaging channels.",
    "Enjoy two free optimization cycles post-launch.",
    "Pay only for what you use; no idle fees."
  ];
  
  // Testimonials - Enhanced with use case context
  const testimonials = [
    {
      quote: "We deployed their chatbot on our e-commerce site and saw customer support inquiries drop by 65% while maintaining high satisfaction scores.",
      author: "Priya Sharma",
      position: "CTO, RetailTech India",
      useCase: "E-commerce • Reduced Support Load",
      rating: 5
    },
    {
      quote: "The zero monthly fee model was perfect for our seasonal business. We only pay when customers are actually using the service.",
      author: "Rahul Mehta",
      position: "Founder, TravelBuddy",
      useCase: "Seasonal Business • Cost Optimization",
      rating: 5
    },
    {
      quote: "Integration was seamless and the two optimization rounds really helped fine-tune our chatbot's responses to match our brand voice.",
      author: "Ananya Patel",
      position: "Marketing Director, FinServe",
      useCase: "Financial Services • Brand Matching",
      rating: 4
    }
  ];
  
  // Benefits data - Reframed as outcomes
  const benefits = [
    {
      title: "Never Lose Another Lead to Slow Responses",
      description: "Instant 24/7 support means customers get answers immediately—turning more visitors into paying customers.",
      icon: <Clock className="h-12 w-12 text-primary" />
    },
    {
      title: "Turn More Visitors Into Paying Customers",
      description: "Personalized recommendations and instant question-answering guide prospects to purchase faster than ever.",
      icon: <TrendingUp className="h-12 w-12 text-primary" />
    },
    {
      title: "Cut Support Costs by 60%+ Overnight",
      description: "Handle dozens of conversations simultaneously while your team focuses on high-value work that grows your business.",
      icon: <Shield className="h-12 w-12 text-primary" />
    },
    {
      title: "Delight Customers With Consistent Excellence",
      description: "Every interaction is perfect—no bad days, no inconsistent answers, just reliable service that builds loyalty.",
      icon: <HeartHandshake className="h-12 w-12 text-primary" />
    },
    {
      title: "Know Exactly What Customers Want",
      description: "Stop guessing about customer needs. Get real insights into pain points and opportunities to improve your business.",
      icon: <Database className="h-12 w-12 text-primary" />
    },
    {
      title: "Handle Rush Periods Without Breaking",
      description: "Black Friday? Product launch? No problem. Scale instantly without hiring temporary staff or missing opportunities.",
      icon: <Users className="h-12 w-12 text-primary" />
    }
  ];
  
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header/App Bar */}
      <header className="fixed top-0 left-0 right-0 h-16 md:h-16 bg-white shadow-sm z-50 flex items-center justify-between px-6 md:px-12">
        <div className="flex items-center space-x-3">
          <img 
            src="/images/agentflow-logo.png" 
            alt="Agentic Flow Logo" 
            className="h-20 w-20 md:h-20 md:w-20 object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
            }}
          />
          <span className="text-lg md:text-xl font-medium text-gray-900">Agentic Flow</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-sm font-medium text-gray-700 hover:text-primary">Home</a>
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-primary">Features</a>
          <a href="#pricing" className="text-sm font-medium text-gray-700 hover:text-primary">Pricing</a>
          <a href="#tech" className="text-sm font-medium text-gray-700 hover:text-primary">Tech Stack</a>
          <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-primary">Contact</a>
        </nav>
        
        <Link href="/consultation" className="hidden md:block bg-primary text-white text-sm uppercase font-medium px-4 py-2 rounded-full hover:bg-blue-700 transition-colors">
          Book Free Strategy Call
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-700"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </header>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bottom-0 bg-white z-40 md:hidden flex flex-col p-6 space-y-6">
          <a href="#home" className="text-lg font-medium text-gray-900" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#features" className="text-lg font-medium text-gray-900" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#pricing" className="text-lg font-medium text-gray-900" onClick={() => setIsMenuOpen(false)}>Pricing</a>
          <a href="#tech" className="text-lg font-medium text-gray-900" onClick={() => setIsMenuOpen(false)}>Tech Stack</a>
          <a href="#contact" className="text-lg font-medium text-gray-900" onClick={() => setIsMenuOpen(false)}>Contact</a>
          <Link href="/consultation" className="bg-primary text-white text-sm uppercase font-medium px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-center" onClick={() => setIsMenuOpen(false)}>
            Book Free Strategy Call
          </Link>
        </div>
      )}
      
      {/* Risk-Free Banner */}
      <div className="fixed top-16 left-0 right-0 bg-green-600 text-white text-center py-2 px-4 z-40">
        <p className="text-sm font-medium">
          🛡️ Try Risk-Free: 30-Day Money-Back Guarantee • Next 5 consultations get a custom demo!
        </p>
      </div>
      
      {/* Hero Section */}
      <section id="home" className="pt-32 md:pt-40 pb-16 md:pb-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-red-800 font-medium">Your Customers Are Waiting.</p>
                  <p className="text-red-700 text-sm mt-1">You spend hours on the same 5 questions. You lose leads when you're offline. Your team is overwhelmed.</p>
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight">
              Stop Losing Sales to Slow Responses
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed">
              Automate customer support with AI chatbots that work 24/7—no idle costs, no hassle. Build once, pay only when customers actually use it.
            </p>
            <div className="mt-8 space-x-4 flex flex-wrap gap-4">
              <Link href="/consultation" className="bg-primary text-white text-sm uppercase font-medium px-6 py-3 rounded-full hover:bg-blue-700 transition-colors text-center flex items-center">
                Book Your Free Strategy Call
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
              <a href="#pricing" className="border border-primary text-primary text-sm uppercase font-medium px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-center">
                See How Much You'll Save
              </a>
            </div>
            
            <div className="mt-6 flex items-center text-sm text-gray-600">
              <Star className="h-4 w-4 text-yellow-500 mr-1" />
              <span className="font-medium mr-2">500+ businesses</span>
              <span>reduced support time by 65%</span>
            </div>
          </div>
          <div className="relative h-64 md:h-auto">
            <div className="bg-gray-100 rounded-2xl p-6 h-full flex items-center justify-center">
              {/* Placeholder for chatbot illustration */}
              <div className="relative w-full max-w-sm mx-auto">
                <div className="bg-white rounded-lg shadow-lg p-4 border border-gray-200">
                  <div className="h-8 bg-primary rounded-t-lg absolute top-0 left-0 right-0"></div>
                  <div className="pt-10">
                    <div className="space-y-3">
                      <div className="bg-gray-100 rounded-lg p-3 max-w-xs ml-auto">
                        <p className="text-sm">How can I assist you today?</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 max-w-xs">
                        <p className="text-sm">I need information about your services</p>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 max-w-xs ml-auto">
                        <p className="text-sm">I'd be happy to help! Our AI chatbots help businesses automate customer service with no monthly fees.</p>
                      </div>
                    </div>
                    <div className="mt-4 relative">
                      <input 
                        type="text" 
                        placeholder="Type your message..." 
                        className="w-full p-2 pr-10 border border-gray-300 rounded-full text-sm"
                      />
                      <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-primary">
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 text-center">Stop Wasting Time. Start Winning Customers.</h2>
          <p className="mt-4 text-center text-gray-700 max-w-2xl mx-auto">
            While your competition struggles with slow support, you'll be converting visitors into customers 24/7.
          </p>
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section id="tech" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 text-center">Our Technology Stack</h2>
          <p className="mt-4 text-center text-gray-700 max-w-2xl mx-auto">
            We leverage industry-leading tools and platforms to build scalable, secure chatbots:
          </p>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techStack.map((tech, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors">
                  {tech.logo ? (
                    <img 
                      src={tech.logo} 
                      alt={tech.name} 
                      className="w-16 h-16 object-contain"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<span class="text-2xl font-medium">${tech.name.charAt(0)}</span>`;
                      }}
                    />
                  ) : (
                    <span className="text-2xl font-medium">{tech.name.charAt(0)}</span>
                  )}
                </div>
                <h3 className="mt-3 text-lg font-medium text-gray-900">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section id="pricing" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 text-center">Choose Your Customer Service Transformation</h2>
          <p className="mt-4 text-center text-gray-700 max-w-2xl mx-auto">
            Every plan includes 500 free sessions to prove ROI before you invest more. No hidden costs, no surprises.
          </p>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow animate-on-scroll opacity-0 ${tier.highlighted ? 'border-2 border-secondary relative' : ''} h-full flex flex-col`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-secondary text-white text-xs px-4 py-1 rounded-full uppercase font-medium">
                    Most Popular
                  </div>
                )}
                <div className={`${tier.highlighted ? 'bg-secondary' : 'bg-primary'} text-white py-4 px-6`}>
                  <h3 className="text-xl font-medium">{tier.name}</h3>
                  <p className="text-white text-opacity-90 mt-1 text-sm">{tier.tagline}</p>
                  <p className="text-white text-opacity-90 mt-2 font-medium">{tier.roiTagline}</p>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  {tier.limitedDeal && (
                    <div className="mb-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <p className="text-sm font-medium text-yellow-800">{tier.limitedDeal}</p>
                    </div>
                  )}
                  
                  {tier.bonus && (
                    <div className="mb-4 bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-sm font-medium text-blue-800">{tier.bonus}</p>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm uppercase tracking-wide">One-Time Investment</p>
                    <div className="flex items-end mt-1">
                      {tier.discountedFee ? (
                        <>
                          <p className="text-3xl font-medium text-gray-900">{tier.discountedFee}</p>
                          <p className="text-lg line-through text-gray-500 ml-2">{tier.buildFee}</p>
                          <span className="ml-2 bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded">{tier.discount}</span>
                        </>
                      ) : (
                        <p className="text-3xl font-medium text-gray-900">{tier.buildFee}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <p className="text-gray-600 text-sm uppercase tracking-wide">What You Get</p>
                    <div className="space-y-3 mt-3">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-800">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {tier.guarantee && (
                    <div className="mb-6 bg-green-50 border border-green-200 rounded-lg p-3">
                      <p className="text-sm font-medium text-green-800">{tier.guarantee}</p>
                    </div>
                  )}
                  
                  <p className="text-sm text-gray-700 mb-6">{tier.callToAction}</p>
                  
                  <Link href="/consultation" className={`w-full py-3 rounded-full text-sm uppercase font-medium ${tier.highlighted ? 'bg-secondary text-white' : 'bg-primary text-white'} hover:opacity-90 transition-opacity mt-auto block text-center`}>
                    Start Your Transformation
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Risk-Free Guarantee Section */}
          <div className="mt-16 bg-white rounded-xl p-8 shadow-lg border-2 border-green-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-medium text-gray-900 mb-4">Try It, Risk-Free</h3>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Not satisfied in 30 days? Get your money back. No questions asked. 
                Plus, use 500 free sessions to prove ROI before paying for more.
              </p>
              <div className="mt-6 grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span>30-day money-back guarantee</span>
                </div>
                <div className="flex items-center justify-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span>500 free sessions included</span>
                </div>
                <div className="flex items-center justify-center">
                  <Check className="h-4 w-4 text-green-600 mr-2" />
                  <span>No contracts or commitments</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* What Sets Us Apart */}
          <div className="mt-16">
            <h3 className="text-2xl font-medium text-gray-900 text-center">What Sets Us Apart?</h3>
            
            <div className="mt-8 grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg text-gray-900 mb-2">No Hidden Costs</h4>
                <p className="text-gray-700">Pay only for what you use with transparent pricing—no server fees, ever.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg text-gray-900 mb-2">Grow with Ease</h4>
                <p className="text-gray-700">Start small and upgrade later. Special Offer: Upgrade from Basic to Growth or Enterprise within 6 months and enjoy 10% off the build fee.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-medium text-lg text-gray-900 mb-2">Zero Risk</h4>
                <p className="text-gray-700">Every plan comes with guarantees, so you can try us worry-free.</p>
              </div>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-medium text-gray-900">Ready to Stop Losing Customers?</h3>
            <p className="mt-2 text-gray-700 max-w-2xl mx-auto">
              Your competitors are answering customer questions slowly. You'll be converting them 24/7. 
              Limited spots for our free strategy call—book now!
            </p>
            <Link href="/consultation" className="mt-6 bg-secondary text-white text-sm uppercase font-medium px-8 py-4 rounded-full hover:bg-opacity-90 transition-colors inline-flex items-center">
              Book Your Free Strategy Call Now
              <ArrowRight className="h-4 w-4 ml-2" />
            </Link>
            <p className="mt-2 text-sm text-gray-600">⚡ Next 5 consultations include a custom demo</p>
          </div>
          
          {/* Integrations */}
          <div className="mt-16">
            <h3 className="text-2xl font-medium text-gray-900 text-center">Optional Platform Integrations</h3>
            <p className="mt-2 text-center text-gray-700">
              Add your chatbot to any of these channels with a one-time integration fee:
            </p>
            
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
              {platforms.filter(platform => !platform.hidden).map((platform, index) => (
                <div 
                  key={index} 
                  className="bg-white p-6 rounded-lg shadow-sm text-center animate-on-scroll opacity-0 flex flex-col items-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mb-3 flex items-center justify-center">
                    {platform.logo ? (
                      <img 
                        src={platform.logo} 
                        alt={platform.name} 
                        className="max-w-full max-h-full object-contain" 
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.style.display = 'none';
                          e.target.parentElement.innerHTML = `<div class="w-14 h-14 rounded-full bg-primary bg-opacity-20 flex items-center justify-center text-primary font-bold text-xl">${platform.name.charAt(0)}</div>`;
                        }}
                      />
                    ) : (
                      <div className="w-14 h-14 rounded-full bg-primary bg-opacity-20 flex items-center justify-center text-primary font-bold text-xl">
                        {platform.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <h4 className="font-medium text-gray-900">{platform.name}</h4>
                  <p className="text-primary mt-1">{platform.fee}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 text-center">Transform Your Business Results</h2>
          <p className="mt-4 text-center text-gray-700 max-w-2xl mx-auto">
            Stop competing on price. Start winning on service speed and quality.
          </p>
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-background rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 text-center">Real Results From Real Businesses</h2>
          
          <div className="mt-12 max-w-3xl mx-auto relative">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-6 shadow-md transition-opacity duration-500 ${activeTestimonial === index ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 right-0'}`}
              >
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-500' : 'text-gray-300'}`}>
                      ★
                    </div>
                  ))}
                </div>
                <div className="mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded">
                    {testimonial.useCase}
                  </span>
                </div>
                <p className="text-gray-800 italic">"{testimonial.quote}"</p>
                <div className="mt-4">
                  <p className="font-medium text-gray-900">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            ))}
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full ${activeTestimonial === index ? 'bg-primary' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Target Audience Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 text-center">Who This Is For</h2>
          
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {audiences.map((audience, index) => (
              <div 
                key={index} 
                className="bg-white p-5 rounded-lg shadow-sm flex items-start animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Check className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <span className="text-gray-800">{audience}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 text-center">How It Works</h2>
          
          <div className="mt-12 max-w-3xl mx-auto">
            {processSteps.map((step, index) => (
              <div 
                key={index} 
                className="flex items-start mb-8 animate-on-scroll opacity-0"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                  {index + 1}
                </div>
                <div>
                  <p className="text-lg text-gray-800">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    {/* CTA Section */}
<section id="contact" className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-primary text-white">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-medium">Stop Losing Customers. Start Today.</h2>
    <p className="mt-4 text-lg text-white text-opacity-90 max-w-2xl mx-auto">
      Book your free strategy call with Akshay Kumar BM and discover exactly how much time and money you'll save.
    </p>

    <div className="mt-8 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
      {/* Email */}
      <div className="bg-white rounded-lg p-6 flex flex-col items-center min-h-[100px]">
        <p className="font-medium text-gray-800 mb-1">Email</p>
        <p className="text-gray-600 text-sm break-all text-center">
          akshaykumarbedre.bm@gmail.com
        </p>
      </div>

      {/* Phone */}
      <div className="bg-white rounded-lg p-6 flex flex-col items-center min-h-[100px]">
        <p className="font-medium text-gray-800 mb-1">Phone</p>
        <p className="text-gray-600 text-sm text-center">
          +91-9164623536
        </p>
      </div>

      {/* Website */}
      <div className="bg-white rounded-lg p-6 flex flex-col items-center min-h-[100px]">
        <p className="font-medium text-gray-800 mb-1">Website</p>
        <p className="text-gray-600 text-sm break-all text-center">
          www.agentflow.studio
        </p>
      </div>
    </div>

    <Link href="/consultation" className="mt-10 inline-flex items-center bg-white text-primary text-sm uppercase font-medium px-8 py-4 rounded-full hover:bg-gray-100 transition-colors">
      Book Your Free Strategy Call Now
      <ArrowRight className="h-4 w-4 ml-2" />
    </Link>
    
    <p className="mt-3 text-white text-opacity-80 text-sm">
      ⚡ Limited: Next 5 calls include a custom demo • 30-day money-back guarantee
    </p>
  </div>
</section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 lg:px-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">Agentic Flow</h3>
            <p className="text-gray-400">
              AI-powered chatbots with zero idle costs. Built for ROI-focused Indian businesses.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#tech" className="text-gray-400 hover:text-white transition-colors">Tech Stack</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">akshaykumarbedre.bm@gmail.com</li>
              <li className="text-gray-400">+91-9164623536</li>
              <li className="text-gray-400">Bangalore, India</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-white bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="bg-white bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="bg-white bg-opacity-10 w-10 h-10 rounded-full flex items-center justify-center hover:bg-opacity-20 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Agentic Flow. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
      
      {/* Chatbot Widget */}
      <ChatbotWidget />
      
      {/* Add CSS to handle animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .bg-primary {
          background-color: #1A73E8;
        }
        
        .text-primary {
          color: #1A73E8;
        }
        
        .border-primary {
          border-color: #1A73E8;
        }
        
        .bg-secondary {
          background-color: #E91E63;
        }
        
        .text-secondary {
          color: #E91E63;
        }
        
        .border-secondary {
          border-color: #E91E63;
        }
        
        .bg-background {
          background-color: #F5F5F5;
        }
      `}</style>
    </div>
  );
}