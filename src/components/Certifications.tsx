import React from "react";

interface CertificationProps {
  name: string;
  issuer: string;
  issuedDate: string;
  certificateUrl: string;
}

const CertificationCard: React.FC<CertificationProps> = ({ name, issuer, issuedDate, certificateUrl }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all ">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-600 mt-2">Issued by {issuer}</p>
      <p className="text-gray-600 mt-2">Issued Date: {issuedDate}</p>
      <a href={certificateUrl} className="text-blue-500 hover:underline mt-2 block">
        View Certificate
      </a>
    </div>
  );
};

const Certifications: React.FC = () => {
  const certificationsData = [
    { name: "Oracle Data Science Professional Certification", issuer: "Oracle", issuedDate: "Sep 2025 - Present", certificateUrl: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1569EF1CA3EE22D9F268B311DFEE1BBD924E4B4D5FCA5F4F33210B26DA1D4959" },
    { name: "Google Project Management Professional Certification", issuer: "Google", issuedDate: "Sep 2025 - Present", certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/EKFYJF0FYGAK" },
    { name: "Code Generation and Optimization Using IBM Granite Certification", issuer: "IBM", issuedDate: "Aug 2025 - Present", certificateUrl: "https://www.credly.com/badges/9fb0bb06-d427-49a6-bae5-596aa7cc1c0c/linked_in_profile" },
    { name: "Google Data Analytics Professional Certification", issuer: "Google", issuedDate: "Mar 2024 - Present", certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/9BXC6P6HF392" },
    { name: "Machine Learning Specialization Certification", issuer: "Stanford University and DeepLearning.AI", issuedDate: "Apr 2024 - Present", certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/SK7N3J57D3CK" },
    { name: "DeepLearning.AI TensorFlow Developer Professional Certification", issuer: "DeepLearning.AI", issuedDate: "May 2024 - Present", certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/Q7CN35PBQTA4" },
    { name: "TEFL Certification: 517", issuer: "Sepuluh Nopember Institute of Technology Global Center", issuedDate: "Aug 2021 - Aug 2023", certificateUrl: "https://drive.google.com/uc?export=view&id=12JLCnmkzLbqMNqaEFEjyNEtsqoW2ITD6" }
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
              certificateUrl={certification.certificateUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
