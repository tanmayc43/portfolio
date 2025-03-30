import { useState } from "react";
import { useTheme } from "./theme-provider"; // Use relative path
import Switch from "./Switch";
import Button from "./Button"; // Use your custom Button component

export default function Header() {
  const [state, setState] = useState(false);
  const { theme } = useTheme();
  
  const navigation = [
    { title: "Home", targetId: "home" },
    { title: "About", targetId: "about" },
    { title: "Projects", targetId: "projects" },
    { title: "Education", targetId: "education" },
    { title: "Contact", targetId: "contact" },
  ];

  const scrollToSection = (targetId) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setState(false); // Close mobile menu if open
    }
  };

  return (
    <nav className="w-full border-b md:border-0 md:static font-sfpro">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <a href="/">
            <h2 style={{color: theme === "dark" ? "white" : "black"}} className="text-[32px] font-bold font-sfmono tracking-tight transition-colors duration-300">
              tyci
            </h2>
          </a>
          <div className="md:hidden">
            <Button
              onClick={() => setState(!state)}
              variant={state ? "outline" : "default"}
              size="icon"
              className="text-black dark:text-white"
            >
              {state ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </Button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-7 md:flex md:space-x-9 md:space-y-0">
            {navigation.map((item, idx) => (
              <li
                key={idx}
                className="text-sm md:text-base font-bold text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={() => scrollToSection(item.targetId)}
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <Switch />
        </div>
      </div>
    </nav>
  );
}
