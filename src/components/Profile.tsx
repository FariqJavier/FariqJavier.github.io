import React from "react";
import profileIcon from "../assets/icon_fariq.svg";

const Profile: React.FC = () => {
  return (
    <section className="bg-white text-black py-16" id="profile">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between">
        <div className="flex justify-end lg:w-1/3 mb-8 lg:mb-0">
            <img
                src={profileIcon}
                alt="Fariq Javier"
                className="rounded-full w-32 h-32 mt-2"
            />
        </div>
        <div className="flex flex-col lg:ml-6 lg:w-2/3 text-center lg:text-left">
            <h2 className="text-3xl font-bold ml-2">Fariq Javier Nugraha</h2>
            <div className="flex flex-wrap gap-2 mt-4 ml-2 justify-center lg:justify-start">
                <span className="bg-gray-200 py-1 px-5 rounded-full text-xs">Graduated 2025</span>
                <span className="bg-gray-200 py-1 px-5 rounded-full text-xs">AI/Robotics Enthusiast</span>
                <span className="bg-gray-200 py-1 px-5 rounded-full text-xs">Computer Engineering Major</span>
            </div>
            <p className="mt-4 ml-2 text-md lg:max-w-lg sm:max-w-sm">
                A Computer Engineering graduate from Sepuluh Nopember Institute of Technology with a focus on innovative AI/ML/Robotics applications.
            </p>
        </div>
        <div className="flex flex-col lg:w-1/3 text-center lg:text-left gap-4 lg:mt-0">
            <a
                href="https://www.linkedin.com"
                className="inline-block border-2 bg-transparent border-black text-black px-4 py-2 mx-16 mt-6 rounded-lg hover:bg-gray-300 hover:text-gray-900"
            >
                Connect on LinkedIn
            </a>
            <a
                href="resume-url"
                className="inline-block bg-black text-white px-4 py-2 mx-16 rounded-lg hover:bg-gray-800"
            >
                Download Resume
            </a>
        </div>
      </div>
    </section>
  );
};

export default Profile;
