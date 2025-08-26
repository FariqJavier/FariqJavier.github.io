import React, { useState, useEffect } from "react";

interface ProfileProps {
  nickname: string;
  profileIconUrl: string;
}

const Header: React.FC = () => {
  const [profileData, setProfile] = useState<ProfileProps | null>(null);
  
      useEffect(() => {
          fetch("/assets/portfolio_profile_data.json")
          .then((res) => res.json())
          .then((data) => {
              // Pick only what you need
              const { nickname, profileIconUrl } = data;
              setProfile({ nickname, profileIconUrl });
          })
          .catch((err) => console.error("Error loading profile data:", err));
      }, []);
  
      if (!profileData) return <p>Loading...</p>;

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
            <li><a href="#projects" className="hover:text-gray-500 hover:bg-gra font-semibold">Projects</a></li>
            <li><a href="#skills" className="hover:text-gray-500 font-semibold">Skills</a></li>
            <li><a href="#certifications" className="hover:text-gray-500 font-semibold">Certifications</a></li>
            <li><a href="#contact" className="hover:text-gray-500 font-semibold">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

