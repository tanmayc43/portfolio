"use client";
import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-6xl font-medium text-white mb-12 text-center">
            Contact <span className="text-blue-600 font-bold">Me</span>
          </h2>

          <div className="max-w-4xl w-full">
            {/* Card Container */}
            <div className="bg-[#18181b] backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-secondary/50 hover:border-primary/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row items-center justify-center">
                {/* Content Section */}
                <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                  <p className="text-white/80 mb-4">
                    You can reach me via email or connect with me on LinkedIn. I'm happy to hear from you regarding relevant projects, collaborations, or professional inquiries.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <a
                      href="mailto:ctanmay043@gmail.com"
                      className="flex items-center gap-3 text-blue-500 hover:underline"
                    >   
                      {/* Email Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="text-blue-500"
                      >
                        <rect x="2" y="5" width="20" height="14" rx="2" />
                        <path d="M22 5 12 13 2 5" stroke="currentColor" strokeWidth="2" fill="none"/>
                      </svg>
                      ctanmay043@gmail.com
                    </a>
                    <a
                      href="https://www.linkedin.com/in/tanmay43"
                      className="flex items-center gap-3 text-blue-500 hover:underline"
                      target="_blank" rel="noopener noreferrer"
                    >
                      {/* LinkedIn Icon */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="text-blue-500"
                      >
                        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z"/>
                      </svg>
                      tanmay43
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}