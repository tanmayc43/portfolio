"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full pt-20 md:pt-32 lg:pt-40 xl:pt-36 min-h-[80vh] md:mb-15">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-2xl space-y-6 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-white">Hey there, </span>
              <br />
              <span className="text-white">I'm</span>
              <span
                className="text-blue-600 font-bold"
                style={{ fontFamily: "'Inter'" }}
              >
                {" "} 
                Tanmay
              </span>
            </h1>

            <p className="text-xl md:text-2xl font-light text-white max-w-[600px] mx-auto">
              Full-stack developer, CS Sophomore <br /> and an AI/ML enthusiast
            </p>

            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <button>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-md font-bold text-primary-foreground shadow hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
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
                  href="/assets/Tanmay_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-md font-bold shadow-sm hover:bg-blue-600 hover:text-white transition-all duration-300 ease-in-out"
                >
                  Resume
                </a>
              </button>
            </div>

            <div className="pt-6 flex items-center justify-center space-x-4">
              <a
                href="https://github.com/tanmayc43"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary text-foreground hover:text-primary transition-ease-in-out duration-300 will-change-transform hover:scale-115 "
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
                href="https://linkedin.com/in/tanmay43"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary text-foreground hover:text-primary transition-ease-in-out duration-300 will-change-transform hover:scale-115"
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
                href="https://leetcode.com/tanmay43"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary text-foreground hover:text-primary transition-ease-in-out duration-300 will-change-transform hover:scale-115"
                aria-label="Leetcode"
              >
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Leetcode--Streamline-Simple-Icons" height="24" width="24">
  <desc>
    Leetcode Streamline Icon: https://streamlinehq.com
  </desc>
  <title>LeetCode</title>
  <path d="M13.483 0a1.374 1.374 0 0 0 -0.961 0.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0 -1.209 2.104 5.35 5.35 0 0 0 -0.125 0.513 5.527 5.527 0 0 0 0.062 2.362 5.83 5.83 0 0 0 0.349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193 0.039 0.038c2.248 2.165 5.852 2.133 8.063 -0.074l2.396 -2.392c0.54 -0.54 0.54 -1.414 0.003 -1.955a1.378 1.378 0 0 0 -1.951 -0.003l-2.396 2.392a3.021 3.021 0 0 1 -4.205 0.038l-0.02 -0.019 -4.276 -4.193c-0.652 -0.64 -0.972 -1.469 -0.948 -2.263a2.68 2.68 0 0 1 0.066 -0.523 2.545 2.545 0 0 1 0.619 -1.164L9.13 8.114c1.058 -1.134 3.204 -1.27 4.43 -0.278l3.501 2.831c0.593 0.48 1.461 0.387 1.94 -0.207a1.384 1.384 0 0 0 -0.207 -1.943l-3.5 -2.831c-0.8 -0.647 -1.766 -1.045 -2.774 -1.202l2.015 -2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0 -1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38 -1.382 1.38 1.38 0 0 0 -1.38 -1.382z" fill="#000000" stroke-width="1"></path>
</svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
