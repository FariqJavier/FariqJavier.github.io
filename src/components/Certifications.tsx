import React from "react";

interface CertificationProps {
  name: string;
  issuer: string;
  issuedDate: string;
}

const CertificationCard: React.FC<CertificationProps> = ({ name, issuer, issuedDate }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all ">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600 mt-2">Issued by {issuer}</p>
      <p className="text-gray-600 mt-2">Issued Date: {issuedDate}</p>
    </div>
  );
};

const Certifications: React.FC = () => {
  const certificationsData = [
    { name: "Google Data Analytics Professional Certification", issuer: "Google", issuedDate: "Mar 2024 - Present" },
    { name: "Machine Learning Specialization Certification", issuer: "Stanford University and DeepLearning.AI", issuedDate: "Jan 2024 - Present" },
    { name: "DeepLearning.AI TensorFlow Developer Professional Certification", issuer: "DeepLearning.AI", issuedDate: "May 2024 - Present" },
    { name: "Code Generation and Optimization Using IBM Granite Certification", issuer: "IBM", issuedDate: "Aug 2025 - Present" },
    { name: "TEFL Certification: 517", issuer: "Sepuluh Nopember Institute of Technology Global Center", issuedDate: "Aug 2021 - Aug 2023" }
  ];

  return (
    <section id="certifications" className="py-16 bg-gray-200">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">My Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((certification, index) => (
            <CertificationCard
              key={index}
              name={certification.name}
              issuer={certification.issuer}
              issuedDate={certification.issuedDate}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
