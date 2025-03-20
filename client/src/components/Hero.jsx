import { InteractiveGridPattern } from "./magicui/interactive-grid-pattern";
import { cn } from "../lib/utils";

const Hero = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Pattern */}
      <div className="absolute inset-0 flex items-center justify-center">
        <InteractiveGridPattern
          className={cn(
            "w-screen",
            "[mask-image:radial-gradient(800px_circle_at_center,white,transparent)]"
          )}
          width={40}
          height={40}
          squares={[80, 80]}
          squaresClassName="hover:fill-blue-500"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-2xl font-medium mb-2">Hello there, I'm Tanmay</h2>
          <h1 className="text-4xl font-bold mb-6">Software Developer and Designer</h1>
          
          <div className="flex gap-4 justify-center mb-8">
            <button 
              className="btn btn-color-2"
              onClick={() => window.open('./assets/resume.pdf')}
            >
              Résumé
            </button>
            <button 
              className="btn btn-color-1"
              onClick={() => document.getElementById('contact').scrollIntoView()}
            >
              Contact Info
            </button>
          </div>

          <div className="flex gap-6 justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img
                  src={link.icon}
                  alt={`${link.name} profile`}
                  className="w-8 h-8"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Social links data
const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/tanmay43',
    icon: './assets/linkedin.png'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/tanmayc43',
    icon: './assets/github.png'
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/tanmay43/',
    icon: './assets/leetcode.png'
  },
  {
    name: 'CodeForces',
    url: 'https://codeforces.com/profile/tyci',
    icon: './assets/codeforces.png'
  }
];

export default Hero;