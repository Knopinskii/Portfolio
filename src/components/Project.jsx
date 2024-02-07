import ProjectItems from "./ProjectItems";

import { ProjectList } from "../helpers/ProjectList";

function Project() {
  return (
    <div>
      <h1>My Personal Projects</h1>

      <div className="grid grid-cols-3 gap-2 items-center justify-center">
        {ProjectList.map((project, index) => (
          <ProjectItems
            id={index}
            name={project.name}
            image={project.image}
            key={project.name}
            href={project.href}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
