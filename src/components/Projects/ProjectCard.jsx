import "./Projects.css";

function ProjectCard({
  image,
  title,
  description,
  tags,
  liveDemo,
  github,
}) {
  return (
    <article className="project-card">
      <img src={image} alt={title} />

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="project-tags">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>

      <div className="project-links">
        <a
          href={liveDemo}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>

        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;