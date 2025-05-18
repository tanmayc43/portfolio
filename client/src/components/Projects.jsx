"use client";

import React from "react";
import { MagicCard } from "./magicui/magic-card";
import cropcreditImg from "../assets/crop-credit.png";
import lunarlanderImg from "../assets/lunar-lander.gif";
import portfolioImg from "../assets/portfolio.png";
import settleupImg from "../assets/settle-up.png";

const projects = [
  {
    title: "SettleUp (ongoing)",
    description: "SettleUp is a web app for easy shared expense tracking and group bill management. It features real-time splitting, balance tracking, and settlements. Built with Next.js and PostgreSQL for a full-stack, reliable experience.",
    image: settleupImg,
    github: "https://github.com/tanmayc43/settle-up",
  },
  {
    title: "CropCredit",
    description: "Crop Credit is a web app that helps farmers access credit by analyzing crop and financial data. It uses a predictive model for risk evaluation and loan recommendations. Built with Next.js and PostgreSQL for a smooth and secure experience.",
    image: cropcreditImg,
    github: "https://github.com/VemorPhose/CropCredit",
  },
  {
    title: "Smart Lunar Lander",
    description: "An AI agent trained using the PPO algorithm to efficiently land on the lunar surface. It demonstrates optimized control and decision-making in a simulated environment. Built with Python and reinforcement learning frameworks for training and evaluation.",
    image: lunarlanderImg,
    github: "https://github.com/tanmayc43/lunar-lander",
  },
  {
    title: "Portfolio",
    description: "A responsive portfolio website showcasing projects and skills, built with React and styled using Tailwind CSS v4 for a modern, clean design.",
    image: portfolioImg,
    github: "https://github.com/tanmayc43/portfolio",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto py-16">
      <div className="col-span-1 md:col-span-2 mb-10 w-full">
        <h2 className="text-3xl md:text-6xl font-medium text-white mb-6 text-center font-bold">Projects</h2>
      </div>
      {projects.map((project, idx) => (
        <MagicCard
          key={idx}
          className="bg-[#18181b] hover:bg-white transition-colors duration-300 rounded-xl shadow-lg p-8 flex flex-col items-center group cursor-pointer min-h-[480px]"
        >
          <div className="w-full h-60 flex items-center justify-center bg-black rounded-xl mb-6">
            <img
              src={project.image}
              alt={project.title}
              className="max-h-full max-w-full object-contain rounded-xl"
              style={{ background: "#18181b" }}
            />
          </div>
          <div className="flex items-center gap-2 mb-4">
            <h3 className="text-2xl font-bold text-white group-hover:text-black transition-colors duration-300">
              {project.title}
            </h3>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-white hover:text-black group-hover:text-black transition-colors"
                title="View on GitHub"
              >
                {/* GitHub Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="inline-block align-middle"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.262.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .318.192.694.801.576C20.565 21.796 24 17.297 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
            )}
          </div>
          <p className="text-lg text-gray-300 group-hover:text-gray-700 text-left transition-colors duration-300">
            {project.description}
          </p>
        </MagicCard>
      ))}
    </section>
  );
}