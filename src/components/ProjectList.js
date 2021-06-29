import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const renderPorjects = projects.map((card) => {
    return (
      <ProjectItem
        key={card.id}
        name={card.name}
        about={card.about}
        technologies={card.technologies}
      />
    );
  });
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{renderPorjects}</div>
    </div>
  );
}

export default ProjectList;
