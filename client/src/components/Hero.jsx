"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full pt-20 md:pt-32 lg:pt-40 xl:pt-48 min-h-[80vh]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-white">Hey there,</span>
              <br />
              <span className="text-white"> I'm</span>
              <span
                className="text-blue-600 font-bold"
                style={{ fontFamily: "'Inter'" }}
              >
                {" "}
                Tanmay
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-light text-white max-w-[600px]">
              Full-stack developer, CS Sophomore <br /> and an AI/ML enthusiast
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-md font-bold text-primary-foreground shadow hover:bg-white hover:text-black transition:all duration-300 ease-in-out"
                >
                  Get in touch
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-2"
                  >
                    <path d="m5 12 14 0"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              </button>
              <button>
                <a
                  href="#projects"
                  className="inline-flex items-center justify-center rounded-md border border-input bg-white px-6 py-3 text-md font-bold shadow-sm hover:bg-gray-300 transition:all duration-300 ease-in-out"
                >
                  View projects
                </a>
              </button>
            </div>

            <div className="pt-6 flex items-center space-x-4">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary text-foreground hover:text-primary"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary text-foreground hover:text-primary"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary text-foreground hover:text-primary"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
