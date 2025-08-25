import React, { useState, useEffect, act } from "react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  detailedDescription: string;
  situationDescription: string;
  taskDescription: string;
  actionDescription: string;
  resultDescription: string;
  imageUrl: string;
  onClick?: () => void
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags, detailedDescription, imageUrl, situationDescription, taskDescription, actionDescription, resultDescription, onClick }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all flex-shrink-0 w-1/2 lg:w-1/4 cursor-pointer"
      onClick={onClick}
    >
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

const Modal: React.FC<{ project: ProjectProps; onClose: () => void }> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-6 text-2xl font-extrabold text-gray-200">X</button>
        <img src={project.imageUrl} alt={project.title} className="w-full mt-4 rounded-lg" />
        <h2 className="text-3xl text-justify font-semibold">{project.title}</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm">{tag}</span>
          ))}
        </div>
        <div className="mt-4 text-justify gap-2">
          <h4 className="text-md font-bold mb-2">Detailed Description:</h4>
          <p className="text-md text-gray-700">{project.detailedDescription}</p>
        </div>
        <div className="mt-4 text-justify gap-2">
          <h4 className="text-md font-bold">Situation:</h4>
          <p className="text-md text-gray-700">{project.situationDescription}</p>
          <h4 className="text-md font-bold">Task:</h4>
          <p className="text-md text-gray-700">{project.taskDescription}</p>
          <h4 className="text-md font-bold">Action:</h4>
          <p className="text-md text-gray-700">{project.actionDescription}</p>
          <h4 className="text-md font-bold">Result:</h4>
          <p className="text-md text-gray-700">{project.resultDescription}</p>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectProps | null>(null);

  const projectData = [
    {
      title: "Development Visual-Linguistic Perception based System using OVGNet via ROS",
      description: "Developed a system that integrates visual and linguistic information for robotic perception using ROS and machine learning model, OVGNet.",
      tags: ["Computer Vision", "Python", "Machine Learning", "Docker"],
      detailedDescription: "This project involved the development of a robotic perception system that combines visual and linguistic data to improve understanding and interaction with the environment, especially the target object. The system was built using ROS (Robot Operating System) and a machine learning model called OVGNet, which was trained to process and interpret both visual inputs from cameras and linguistic inputs from user commands to generate the target object position and orientation.",
      situationDescription: "The Universal Robot 5 (UR5) needed to do Pick-and-Place on target object automatically, but UR5 didn't have the natural ability to understand its environment, moreover the target object.",
      taskDescription: "The task was to develop a perception system that could effectively improve the UR5's ability to understand and interact with the target object.",
      actionDescription: "Implemented a pipeline that captures target object visual data from cameras and linguistic data from user commands, processing them through the OVGNet model, and calculate the target object's position and orientation relative to robot.",
      resultDescription: "The result was a perception system that could generate the target object position and orientation based on visual and linguistic context. This output was then used to inform the UR5's actions during the Pick-and-Place task.",
      imageUrl: "https://example.com/image1.jpg"
    },
    {
      title: "Development of Pick-and-Place Robotic System using Visual-Linguistic Perception for Universal Robot 5 (UR5) via ROS",
      description: "Integrated the visual-linguistic perception system with the UR5 robotic arm system for enhanced human-robot interaction.",
      tags: ["Robotics", "Scripting", "Python", "Docker"],
      detailedDescription: "This project focused on integrating the visual-linguistic perception system with the UR5 robotic arm to enable more intuitive human-robot interaction. By leveraging the capabilities of both systems, I aimed to create a seamless robotic system to perform Pick-and-Place using natural language and visual cues.",
      situationDescription: "The perception system has been able to generate the target object position and orientation, but it needed to be integrated with the UR5's existing control architecture to allow for real-time robot motion based on visual and linguistic information.",
      taskDescription: "The task was to integrate the visual-linguistic perception system with the UR5 robotic arm to perform Pick-and-Place motion to the target object automatically.",
      actionDescription: "Integrated the perception system with the UR5's control architecture, generating the best robot grasping pose based on the target object position and orientation, allowing for seamless Pick-and-Place operations.",
      resultDescription: "The result was a more intuitive human-robot interaction model, where users could command the UR5 to perform Pick-and-Place actions to target objects using natural language commands and visual cues.",
      imageUrl: "https://example.com/image2.jpg"
    },
    {
      title: "Development of Web Interface for Visual-Linguistic Perception System",
      description: "Created a web interface for the visual-linguistic perception system to facilitate user interaction (text and speech) and visualization.",
      tags: ["Web Development", "JavaScript", "React", "Python"],
      detailedDescription: "This project involved the development of a web interface that allows users to interact with the visual-linguistic perception system through text and speech. The interface provides a comfortable and responsive medium to effectively communicate with the system.",
      situationDescription: "The perception system needed a medium to effectively communicate with users and collect the necessary information in an intuitive manner.",
      taskDescription: "The task was to develop a web interface that could facilitate user interaction with the perception system, allowing for both text and speech inputs.",
      actionDescription: "Developed a responsive web interface using React and Python backend that supports text and speech interactions, enabling users to easily communicate with the perception system.",
      resultDescription: "The result was a user-friendly web interface that allowed for seamless text and speech interaction with the visual-linguistic perception system.",
      imageUrl: "https://example.com/image3.jpg"
    },
    {
      title: "DemiWatch Back-End Version 2",
      description: "Developed the back-end services for DemiWatch, a smart watch application for dementia patients to monitoring their location.",
      tags: ["Back-End Development", "Nodejs", "Express", "REST API"],
      detailedDescription: "This project involved the development of the back-end services for DemiWatch, a smart watch application designed to help dementia patients by monitoring their location and providing real-time updates to caregivers. The back-end was built using Node.js and Express, with a focus on creating a secure and efficient REST API.",
      situationDescription: "The application required a robust back-end to handle real-time location tracking and communication with the smart watch and the DemiWatch mobile application.",
      taskDescription: "The task was to develop the back-end services that would support the location tracking and notification features of the DemiWatch application.",
      actionDescription: "Implemented RESTful APIs using Node.js and Express to manage user data, location updates, and caregiver notifications.",
      resultDescription: "The result was a reliable back-end system that enabled real-time location tracking and communication between dementia patients and their caregivers.",
      imageUrl: "https://example.com/image4.jpg"
    },
    {
      title: "Crazy Eight Playing Card Game Using Computer Vision and CNN",
      description: "Developed Crazy Eight card game using computer vision and CNN to detect card objects and classification using CNN to classify card types.",
      tags: ["Game Development", "Computer Vision", "CNN", "Python"],
      detailedDescription: "This project involved the development of a Crazy Eight card game that utilizes computer vision and convolutional neural networks (CNN) to detect and classify card objects. The system was designed to recognize different card types.",
      situationDescription: "The game required a robust computer vision system to accurately detect and classify playing cards in real-time to be able to play Crazy Eights Game on a computer using real cards against computer enemy.",
      taskDescription: "The task was to implement a computer vision system that could detect and classify playing cards in real-time.",
      actionDescription: "Developed a computer vision system using OpenCV to detect the cards placed on the table, then Keras library could created a CNN machine learning model to classify the playing cards in real-time.",
      resultDescription: "The result was a fully functional Crazy Eight card game that could accurately detect and classify playing cards using computer vision and CNN.",
      imageUrl: "https://example.com/image5.jpg"
    },
    {
      title: "OCR and NLP Integration of EKSPENSI Mobile Application",
      description: "Integrated OCR and NLP machine learning model into EKSPENSI, a mobile application for expense tracking and management through Cloud Back-End.",
      tags: ["Mobile Development", "OCR", "NLP", "React Native"],
      detailedDescription: "This project involved the integration of OCR (Optical Character Recognition) and NLP (Natural Language Processing) machine learning models into EKSPENSI, a mobile application designed for expense tracking and management. The integration allows users to scan receipts and documents to extract relevant information, which is then processed and categorized using NLP techniques.",
      situationDescription: "We want to make EKSPENSI a comprehensive solution for expense management and budgeting. But the traditional methods of expense tracking can be cumbersome and time-consuming. We want to integrate the latest technologies to streamline this process, using OCR and NLP to automate data extraction and categorization. But the challenge lies in the implementation of machine learning model into EKSPENSI Application.",
      taskDescription: "The task was to integrate OCR and NLP machine learning models into the EKSPENSI mobile application to enhance its expense tracking and management capabilities.",
      actionDescription: "Deployed OCR model compatible for the mobile application to extract text from scanned receipts and documents on the smartphone, and then deployed NLP model for the Cloud Back-End to categorize and analyze the expenses data then store it on the database.",
      resultDescription: "The result was a more efficient expense tracking process, allowing users to easily scan and categorize their expenses without manual input.",
      imageUrl: "https://example.com/image6.jpg"
    },
    {
      title: "Development of Speeds E-Commerce features on Front-End",
      description: "Developed the front-end features for Speeds, an e-commerce application, using Vue, Nuxtjs, and Tailwind CSS.",
      tags: ["Front-End Development", "Vue", "Tailwind CSS", "Nuxtjs"],
      detailedDescription: "This project involved the development of front-end features for Speeds, an e-commerce application. The front-end was built using Vue.js, Nuxt.js, and Tailwind CSS to create a responsive and user-friendly interface that enhances the shopping experience.",
      situationDescription: "The client wanted to add more feature for the E-Commerece application. They wanted to make a rating and review section related to the product to improve user engagement and feedback. They also wanted the user to be able to filter products based on rating that other user gave. And also they wanted to implement a section exclusive for best selling product and new arrival product.",
      taskDescription: "The task was to develop new features such as a product rating and review system, filtering options based on user ratings, and dedicated sections for best-selling and new arrival products.",
      actionDescription: "Utilized Vue.js and Nuxt.js to build the Front-End components and Tailwind CSS was used for styling and layout for both of the target features, then connected the Front-End with the new Back-End API services created for these features, and implemented the necessary logic for data fetching and state management.",
      resultDescription: "The result was a fully functional and visually appealing front-end for the new features, providing users with an enhanced shopping experience.",
      imageUrl: "https://example.com/image7.jpg"
    },
    {
      title: "Development of Speeds E-Commerce features on Back-End",
      description: "Developed the back-end features for Speeds, an e-commerce application, using Node.js, Express, and MySQL.",
      tags: ["Back-End Development", "Node.js", "Express", "MySQL"],
      detailedDescription: "This project involved the development of the back-end services for Speeds, an e-commerce application. The back-end was built using Node.js and Express, with a focus on creating a secure and efficient REST API.",
      situationDescription: "The client required a robust back-end system to support the new front-end features, including product reviews, filtering, and dynamic content delivery.",
      taskDescription: "The task was to develop the back-end API endpoints to handle product reviews, ratings, and filtering based on user preferences and store them to the existing database.",
      actionDescription: "Implemented RESTful API endpoints using Node.js and Express, with MySQL as the database to store product information, reviews, and user data, then ensured proper authentication and authorization mechanisms were in place, and integrated the new features with the existing system.",
      resultDescription: "The result was a secure and efficient back-end system that seamlessly integrated with the front-end, providing the necessary data and functionality for the new features.",
      imageUrl: "https://example.com/image4.jpg"
    },
    {
      title: "Development of Simple Weather Detection System",
      description: "Developed a simple weather detection system using C++, ESP32, MQTT, and several IoT sensors.",
      tags: ["C++", "ESP32", "MQTT", "IoT"],
      detailedDescription: "This project involved the development of a simple weather detection system that utilizes various IoT sensors to collect environmental data. The system was built using C++ and ESP32, with MQTT for efficient data transmission.",
      situationDescription: "My college subject required me to make an IoT group project in order to pass the subject. Our group decided to create a weather detection system using various sensors and the ESP32 microcontroller.",
      taskDescription: "The task was to develop the firmware for the ESP32 to read data from the sensors and publish it to an MQTT broker.",
      actionDescription: "Developed the firmware for the ESP32 using C++ to collect the data from various sensors (temperature, gas, and rain) then published the data to an MQTT broker and visualize the collected sensor data through a web dashboard, Node-Red.",
      resultDescription: "The result was a functional IoT system capable of real-time data monitoring and reporting from temperature, gas, and rain sensors that could be used to check the weather signs.",
      imageUrl: "https://example.com/image5.jpg"
    }
  ];

  const handleProjectClick = (project: ProjectProps) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (selectedProject) {
      // Disable body scroll
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable body scroll when modal is closed
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">My Projects</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-8">
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                onClick={() => handleProjectClick(project)}
              />
            ))}
          </div>
        </div>
      </div>
      {selectedProject && (
        <Modal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  );
};

export default Projects;
