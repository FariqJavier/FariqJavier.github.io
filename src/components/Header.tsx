import React from "react";
import profileIcon from "../assets/icon_fariq.png";

const Header: React.FC = () => {
  return (
    <header className="bg-white text-black p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src={profileIcon}
            alt="Fariq Javier"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-xl font-bold">Fariq Javier's Portfolio</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#projects" className="hover:text-gray-800 font-semibold">Projects</a></li>
            <li><a href="#skills" className="hover:text-gray-800 font-semibold">Skills</a></li>
            <li><a href="#certifications" className="hover:text-gray-800 font-semibold">Certifications</a></li>
            <li><a href="#contact" className="hover:text-gray-800 font-semibold">Profile</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

