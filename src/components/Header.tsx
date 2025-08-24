import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white p-5">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-semibold">AI Robotics Portfolio</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#projects" className="hover:text-gray-400">Projects</a></li>
            <li><a href="#about" className="hover:text-gray-400">About Me</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
