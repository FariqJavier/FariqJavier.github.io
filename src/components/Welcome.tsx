import React, { useState, useEffect, useRef } from "react";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

interface ContactProps {
    linkedInUrl: string;
    instagramUrl: string;
    githubUrl: string;
}

const Welcome: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contactData, setContact] = useState<ContactProps | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
      fetch("/assets/portfolio_profile_data.json")
      .then((res) => res.json())
      .then((data) => {
          // Pick only what you need
          const { linkedInUrl, instagramUrl, githubUrl } = data;
          setContact({ linkedInUrl, instagramUrl, githubUrl });
      })
      .catch((err) => console.error("Error loading profile data:", err));
  }, []);

  // Close dropdown if click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!contactData) return <p>Loading...</p>;

  return (
    <section className="bg-gray-600 text-white py-16">
      <div className="max-w-screen-lg mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <h3 className="text-xl font-medium">Explore my projects and skills in AI, ML, Robotics, and many more!</h3>
        <div className="mt-8 flex justify-center">
          <div ref={dropdownRef} className="relative inline-block text-left">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition w-48"
            >
              Contact Me
            </button>

            {isOpen && (
              <div
                className="absolute left-0 w-full rounded-lg bg-white shadow-lg ring-1 ring-black/5 z-10"
              >
                <ul className="py-2 text-gray-800">
                  <li>
                    <a
                      href={contactData.linkedInUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-4 py-2 hover:bg-gray-100"
                    >
                      <FaLinkedin className="mr-2 text-blue-600" /> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href={contactData.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-4 py-2 hover:bg-gray-100"
                    >
                      <FaInstagram className="mr-2 text-pink-500" /> Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href={contactData.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center px-4 py-2 hover:bg-gray-100"
                    >
                      <FaGithub className="mr-2 text-gray-800" /> GitHub
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <a 
            href="#projects"
            className="bg-black text-white px-6 py-2 rounded-lg ml-4 hover:bg-gray-800 transition"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
