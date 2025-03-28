import React from 'react';
import { FaJs, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaPython, FaDatabase, FaGithub } from 'react-icons/fa';
import '../App.css';

const Skills = () => {
  const skillsList = [
    { name: 'Python', icon: <FaPython className="skill-icon" /> },
    { name: 'JavaScript', icon: <FaJs className="skill-icon" /> },
    { name: 'React', icon: <FaReact className="skill-icon" /> },
    { name: 'HTML5', icon: <FaHtml5 className="skill-icon" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="skill-icon" /> },
    { name: 'Node.js', icon: <FaNodeJs className="skill-icon" /> },
    { name: 'MySQL', icon: <FaDatabase className="skill-icon" /> },
    { name: 'Git/GitHub', icon: <FaGithub className="skill-icon" /> }
  ];

  return (
    <section className="skills">
      <div className="container">
        <h2 className="skills__title">My Skills</h2>
        <div className="skills__grid">
          {skillsList.map((skill, index) => (
            <div key={index} className="skill-item">
              {skill.icon}
              <p className="skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;