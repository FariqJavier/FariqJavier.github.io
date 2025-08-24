import React from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";

const App: React.FC = () => {
  return (
    <div className="font-sans text-gray-800">
      <Header />
      <Welcome />
      <Profile />
      <Projects />
      <Certifications />
      <Skills />
    </div>
  );
};

export default App;
