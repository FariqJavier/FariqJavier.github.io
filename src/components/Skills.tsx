import React from "react";

interface SkillProps {
  skill: string;
  proficiency: string;
}

const SkillCard: React.FC<SkillProps> = ({ skill, proficiency }) => {
  const proficiencyValue = parseInt(proficiency.replace('%', ''));

  let proficiencyColor = '';
  if (proficiencyValue >= 85) {
    proficiencyColor = 'bg-green-500';
  } else if (proficiencyValue >= 60) {
    proficiencyColor = 'bg-yellow-500';
  } else {
    proficiencyColor = 'bg-red-500';
  }

  return (
    <div className="border-gray-300 border-x-2 rounded-md shadow-md hover:shadow-xl transition-all p-4">
      <h3 className="text-xl font-semibold">{skill}</h3>
      <div className="relative mt-2">
        <div
          className={`h-4 rounded-full ${proficiencyColor}`}
          style={{ width: proficiency }}
        ></div>
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white text-xs font-semibold"
        >
          {proficiency}
        </div>
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const skillsData = [
    { skill: "Python", proficiency: "90%" },
    { skill: "Javascript", proficiency: "85%" },
    { skill: "Robotics", proficiency: "85%" },
    { skill: "Machine Learning", proficiency: "90%" },
    { skill: "Docker", proficiency: "80%" },
    { skill: "Computer Vision", proficiency: "75%" },
    { skill: "Web Development", proficiency: "80%" },
    { skill: "Internet of Things", proficiency: "70%" },
    { skill: "Data Analysis", proficiency: "75%" },
    { skill: "Project Management", proficiency: "80%" },
    { skill: "SDLC", proficiency: "75%" }
  ];

  return (
    <section id="skills" className="py-16">
      <div className="max-w-screen-xl mx-5 text-center">
        <h2 className="text-4xl font-semibold mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skillData, index) => (
            <SkillCard key={index} skill={skillData.skill} proficiency={skillData.proficiency} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
