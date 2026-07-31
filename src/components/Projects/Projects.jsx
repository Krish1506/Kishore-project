import { useState } from 'react'
import "./Projects.css";
import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    {
      id: 1,
      image: "/weather app.png",
      title: "🌦 Weather App",
      description:
        "Real-time weather forecasting application built using HTML, CSS, JavaScript and OpenWeather API.",
      tags: ["HTML", "CSS", "JavaScript", "API"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 2,
      image: "/calculator app.png",
      title: "🧮 Calculator App",
      description:
        "A responsive calculator supporting all arithmetic operations with a modern user interface.",
      tags: ["HTML", "CSS", "JavaScript"],
      liveDemo: "#",
      github: "#",
    },
    {
      id: 3,
      image: "/snake game.png",
      title: "🐍 Snake Game",
      description:
        "A classic Snake Game featuring keyboard controls, score tracking, smooth animation and responsive gameplay.",
      tags: ["HTML", "CSS", "JavaScript"],
      liveDemo: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            tags={project.tags}
            liveDemo={project.liveDemo}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;