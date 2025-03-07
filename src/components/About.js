import React from "react";
import "../App.css";

const About = () => {
  const educationTimeline = [
    {
      year: "2018",
      title: "High School",
      institution: "Your School Name",
      description: "Completed my 10th grade with a strong foundation in Science and Mathematics.",
    },
    {
      year: "2020",
      title: "Higher Secondary",
      institution: "Your School Name",
      description: "Completed my 12th grade with a focus on Physics, Chemistry, and Mathematics.",
    },
    {
      year: "2023 - Present",
      title: "B.Tech in Computer Science",
      institution: "Avantika University, Ujjain",
      description: "Currently pursuing my Bachelor's degree in Computer Science and Engineering.",
    },
  ];

  return (
    <section className="about">
      <div className="container">
        <h2 className="about__title">About Me</h2>
        <p className="about__intro">
          I am a Second-year B.Tech student pursuing Computer Science at Avantika University, Ujjain.
        </p>

        <div className="education">
          <h3 className="education__title">Education Timeline</h3>
          <div className="timeline">
            {educationTimeline.map((item, index) => (
              <div key={index} className="timeline__item">
                <span className="timeline__year">{item.year}</span>
                <div className="timeline__content">
                  <h4 className="timeline__heading">{item.title}</h4>
                  <p className="timeline__institution">{item.institution}</p>
                  <p className="timeline__description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;