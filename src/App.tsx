import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';

const App: React.FC = () => {
  const projects = [
    {
      title: "AI Robotics Arm",
      description: "A machine learning-based robotic arm that picks up objects with precision.",
      link: "#",
    },
    {
      title: "Autonomous Drone",
      description: "A drone that uses AI to navigate obstacles and deliver packages.",
      link: "#",
    },
    {
      title: "AI Chatbot",
      description: "A conversational AI chatbot that can assist in tech support tasks.",
      link: "#",
    },
  ];

  return (
    <div className="font-sans text-gray-800">
      <Header />
      <section id="projects" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>
      <section id="about" className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4">About Me</h2>
          <p className="text-lg text-gray-600">
            I'm a robotics enthusiast with a passion for artificial intelligence. I develop projects that push the boundaries of what's possible with AI and robotics.
          </p>
        </div>
      </section>
      <section id="contact" className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4">Contact</h2>
          <p className="text-lg text-gray-600">Feel free to reach out for collaborations or inquiries.</p>
        </div>
      </section>
    </div>
  );
};

export default App;
