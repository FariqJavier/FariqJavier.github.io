import React from "react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all flex-shrink-0 w-1/2 lg:w-1/4">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projectData = [
    {
      title: "Development Visual-Linguistic Perception based System using OVGNet via ROS",
      description: "Developed a system that integrates visual and linguistic information for robotic perception using ROS and machine learning model, OVGNet.",
      tags: ["Computer Vision", "Python", "Machine Learning", "Docker"],
    },
    {
      title: "Integration of Visual-Linguistic Perception based System to Universal Robot 5 (UR5) Robotic System via ROS",
      description: "Integrated the visual-linguistic perception system with the UR5 robotic arm system for enhanced human-robot interaction.",
      tags: ["Robotics", "Scripting", "Python", "Docker"],
    },
    {
      title: "Development of Web Interface for Visual-Linguistic Perception System",
      description: "Created a web interface for the visual-linguistic perception system to facilitate user interaction (text and speech) and visualization.",
      tags: ["Web Development", "JavaScript", "React", "Python"],
    },
    {
      title: "DemiWatch Back-End Version 2",
      description: "Developed the back-end services for DemiWatch, a smart watch application for dementia patients to monitoring their location.",
      tags: ["Back-End Development", "Nodejs", "Express", "REST API"],
    },
    {
      title: "Crazy Eight Playing Card Game Using Computer Vision and CNN",
      description: "Developed Crazy Eight card game using computer vision and CNN to detect card objects and classification using CNN to classify card types.",
      tags: ["Game Development", "Computer Vision", "CNN", "Python"],
    },
    {
      title: "Integration of OCR and NLP to EKSPENSI Mobile Application",
      description: "Integrated OCR and NLP machine learning model into EKSPENSI, a mobile application for expense tracking and management through Cloud Back-End.",
      tags: ["Mobile Development", "OCR", "NLP", "React Native"],
    },
    {
      title: "Development of Speeds E-Commerce features on Front-End",
      description: "Developed the front-end features for Speeds, an e-commerce application, using Vue, Nuxtjs, and Tailwind CSS.",
      tags: ["Front-End Development", "Vue", "Tailwind CSS", "Nuxtjs"],
    },
    {
      title: "Integration of OCR and NLP to EKSPENSI Mobile Application",
      description: "Integrated OCR and NLP machine learning model into EKSPENSI, a mobile application for expense tracking and management through Cloud Back-End.",
      tags: ["Mobile Development", "OCR", "NLP", "React Native"],
    },
    {
      title: "Development of Speeds E-Commerce features on Front-End",
      description: "Developed the front-end features for Speeds, an e-commerce application, using Vue, Nuxtjs, and Tailwind CSS.",
      tags: ["Front-End Development", "Vue", "Tailwind CSS", "Nuxtjs"],
    },
    {
      title: "Development of Speeds E-Commerce features on Back-End",
      description: "Developed the back-end features for Speeds, an e-commerce application, using Node.js, Express, and MySQL.",
      tags: ["Back-End Development", "Node.js", "Express", "MySQL"],
    },
    {
      title: "Development of Simple Weather Detection System",
      description: "Developed a simple weather detection system using C++, ESP32, MQTT, and several IoT sensors.",
      tags: ["C++", "ESP32", "MQTT", "IoT"]
    }
  ];

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">My Projects</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-8">
            {projectData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
