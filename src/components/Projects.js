import React from 'react';
import '../App.css';

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      text: "This is a description of project one.",
      label: "Learn More",
      src: "https://via.placeholder.com/150"
    },
    {
      title: "Project Two",
      text: "This is a description of project two.",
      label: "View Details",
      src: "https://via.placeholder.com/150"
    },
    {
      title: "Project Three",
      text: "This is a description of project three.",
      label: "View Details",
      src: "https://via.placeholder.com/150"
    }
  ];

  return (
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
  );
};

export default Projects;