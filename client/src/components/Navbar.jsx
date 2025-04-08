"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-screen-xl px-4 py-4 md:py-5 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold text-white">
          tyci
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-x-8">
          <a
            href="#about"
            className="text-xl font-bold hover:text-primary text-white"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-xl font-bold  hover:text-primary text-white"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="text-xl font-bold hover:text-primary text-white"
          >
            Skills
          </a>
          <a
            href="#contact"
            className="text-xl font-bold hover:text-primary text-white"
          >
            Contact
          </a>
        </nav>

        <div className="flex md:hidden gap-4 items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-md bg-secondary"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[65px] z-50 bg-background border-t border-border md:hidden">
            <nav className="flex flex-col p-6 space-y-6">
              <a
                href="#about"
                className="text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
