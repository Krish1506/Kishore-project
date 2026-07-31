import { useState } from 'react'
import "./Skills.css";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];

  return (
    <section id="skills" className="skill-section">
      <h2>My Skills</h2>

      <div className="skill-grid">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;