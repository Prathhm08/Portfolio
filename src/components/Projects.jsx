import "./Projects.css";
import projectData from "./Projects";
export default function Projects() {
  return (
    <div className="projects" id="projets">
      <h1>Projects</h1>
      <section className="p-container">
        {projectData.map((project, index) => (
          <div key={index} className="p-card">
            <div
              className={`card-img car-${index + 1}`}
            ></div>
            <h2>{project.name}</h2>
            <p>{project.desc}</p>
            <a href={project.link}>Visit</a>
          </div>
        ))}
      </section>
    </div>
  );
}
