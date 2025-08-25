import React from "react";

const Header: React.FC = () => {
  const profileData = {
    name: "Fariq Javier Nugraha",
    nickname: "Fariq",
    title: "Software Engineer",
    email: "fariqjavier@gmail.com",
    phone: "+6281908279388",
    profileIconUrl: "https://drive.google.com/uc?export=view&id=1NJJ0B7LWlDLzodtW4BvBBmOfNMSsR6wi"
  };

  return (
    <header className="bg-white text-black p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img
            src={profileData.profileIconUrl}
            alt="Profile Icon"
            className="w-10 h-10 rounded-full"
          />
          <h1 className="text-xl font-bold">{profileData.nickname}'s Portfolio</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#projects" className="hover:text-gray-800 font-semibold">Projects</a></li>
            <li><a href="#skills" className="hover:text-gray-800 font-semibold">Skills</a></li>
            <li><a href="#certifications" className="hover:text-gray-800 font-semibold">Certifications</a></li>
            <li><a href="#contact" className="hover:text-gray-800 font-semibold">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

