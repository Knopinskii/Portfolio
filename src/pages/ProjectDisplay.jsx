import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import { FaGithub } from "react-icons/fa";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl text-white text-center pt-10 pb-10">
        {project.name}
      </h1>
      <img src={project.image} className="rounded-xl max-w-3xl" />
      <p className="text-white mt-10 text-3xl">Skills: {project.skills}</p>
      <FaGithub className="text-white mt-10 mb-10 size-12" />
    </div>
  );
}

export default ProjectDisplay;
