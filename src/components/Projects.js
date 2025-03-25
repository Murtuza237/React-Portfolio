import React from 'react';
import '../App.css';
import Image1 from "../Images/engineering-computer-science-algorithms-design-analysis_soe-ycsalgorithms.png";
import Image2 from "../Images/6-Reasons-why-you-should-learn-Programming-1280x720.png";
import Image3 from "../Images/1_pMcr7T1bXh_adr_-4ve7Tw.gif";

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      text: "This is a description of project one.",
      label: "Learn More",
      src: Image1
    },
    {
      title: "Project Two",
      text: "This is a description of project two.",
      label: "View Details",
      src: Image2
    },
    {
      title: "Project Three",
      text: "This is a description of project three.",
      label: "View Details",
      src: Image3
    }
  ];

  return (
    <section className="projects">
      <div className="container">
        <h2 className="projects__title">My Projects</h2>
        <div className="card-container">
          {projects.map((item, index) => (
            <div key={index} className="card">
              <img className="card-img" src={item.src} alt={item.title} />
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
                <button className="card-button">{item.label}</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;