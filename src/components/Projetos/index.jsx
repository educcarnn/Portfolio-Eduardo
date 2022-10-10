import uniqid from "uniqid";
import { projectos } from "../../services/db";
import "./style.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchIcon from "@material-ui/icons/Launch";

const Projetos = () => {
  const ProjectContainer = ({ project }) => (
    <div className="project">
      <h3>{project.name}</h3>

      <p className="project__description">{project.description}</p>
      {project.stack && (
        <ul className="project__stack">
          {project.stack.map((item) => (
            <li key={uniqid()} className="project__stack-item">
              {item}
            </li>
          ))}
        </ul>
      )}

      {project.sourceCode && (
        <a
          href={project.sourceCode}
          aria-label="source code"
          className="link link--icon"
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          href={project.livePreview}
          aria-label="live preview"
          className="link link--icon"
        >
          <LaunchIcon />
        </a>
      )}
    </div>
  );

  return (
    <div id="projetos" className="section projects">
      <h2 className="section__title">Projetos</h2>

      <div className="projects__grid">
        {projectos.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projetos;
