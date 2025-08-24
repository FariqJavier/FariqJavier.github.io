import React from "react";

const Welcome: React.FC = () => {
  return (
    <section className="bg-gray-600 text-white py-16">
      <div className="max-w-screen-lg mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio!</h1>
        <h3 className="text-xl font-medium">Explore my projects and experience in AI and Robotics.</h3>
        <div className="mt-8">
          <button className="bg-transparent border-2 border-white text-white px-6 py-2 rounded-lg hover:bg-white hover:text-gray-900">
            Contact Me
          </button>
          <button className="bg-black text-white px-6 py-2 rounded-lg ml-4 hover:bg-gray-800">
            View My Work
          </button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
