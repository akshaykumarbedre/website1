import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "YourChatbotCo - Smarter AI Chatbots for Indian Businesses",
  description: "Build once. Only pay when used. No monthly charges if idle – perfect for ROI-focused companies and startups in India.",
  keywords: "AI chatbot, no monthly fees, Indian businesses, ROI focused, customer service automation",
  openGraph: {
    title: "YourChatbotCo - Smarter AI Chatbots for Indian Businesses",
    description: "Build once. Only pay when used. No monthly charges if idle – perfect for ROI-focused companies and startups in India.",
    url: "https://www.yourchatbotdomain.in",
    siteName: "YourChatbotCo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YourChatbotCo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "YourChatbotCo - Smarter AI Chatbots for Indian Businesses",
    description: "Build once. Only pay when used. No monthly charges if idle – perfect for ROI-focused companies and startups in India.",
    images: ["/twitter-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1A73E8" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}