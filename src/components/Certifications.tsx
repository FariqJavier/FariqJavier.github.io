import React from "react";

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-16 bg-gray-200">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-8">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Google Data Analytics Professional Certification</h3>
            <p className="text-gray-600 mt-2">Issued by Google</p>
            <p className="text-gray-600 mt-2">Issued Date: Mar 2024 - Present</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Machine Learning Specialization Certification</h3>
            <p className="text-gray-600 mt-2">Issued by Stanford University and DeepLearning.AI</p>
            <p className="text-gray-600 mt-2">Issued Date: Jan 2024 - Present</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">DeepLearning.AI TensorFlow Developer Professional Certification</h3>
            <p className="text-gray-600 mt-2">Issued by DeepLearning.AI</p>
            <p className="text-gray-600 mt-2">Issued Date: May 2024 - Present</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Code Generation and Optimization Using IBM Granite Certification</h3>
            <p className="text-gray-600 mt-2">Issued by IBM</p>
            <p className="text-gray-600 mt-2">Issued Date: Aug 2025 - Present</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">TEFL Certification: 517</h3>
            <p className="text-gray-600 mt-2">Issued by Sepuluh Nopember Institute of Technology Global Center</p>
            <p className="text-gray-600 mt-2">Issued Date: Aug 2021 - Aug 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
