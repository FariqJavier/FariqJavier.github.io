import React, { useState, useEffect } from "react";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  onClick?: () => void
};

interface DetailedProjectProps extends ProjectProps {
  detailedDescription: string;
  situationDescription: string;
  taskDescription: string;
  actionDescription: string;
  resultDescription: string;
  imageUrl: string;
}

interface ProjectsData {
  projects: DetailedProjectProps[];
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags, onClick }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all flex-shrink-0 justify-between w-1/2 lg:w-1/4 cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold line-clamp-2">{title}</h3>
      <p className="text-gray-600 mt-2 line-clamp-4">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="bg-gray-200 text-gray-800 py-1 px-3 rounded-full text-sm">{tag}</span>
        ))}
      </div>
    </div>
  );
};

const Modal: React.FC<{ project: DetailedProjectProps; onClose: () => void }> = ({ project, onClose }) => {
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
  const [selectedProject, setSelectedProject] = useState<DetailedProjectProps | null>(null);
  const [projectsData, setProjects] = useState<DetailedProjectProps[]>([]);

  const handleProjectClick = (project: DetailedProjectProps) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    fetch("/assets/portfolio_profile_data.json")
      .then((res) => res.json())
      .then((data: ProjectsData) => setProjects(data.projects))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  if (!projectsData.length) return <p>Loading projects...</p>;

  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">My Projects</h2>
        <div className="overflow-x-auto">
          <div className="flex gap-8">
            {projectsData.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
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
