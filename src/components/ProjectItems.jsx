/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

function ProjectItems({ name, image, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-row items-center justify-center p-5 "
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div className="p-5 bg-gray-900 rounded-lg">
        <img
          src={`${image}`}
          alt="aaa"
          className="max-w-full max-h-full rounded-lg"
        />
        <h1 className="text-white text-center pt-5">{name}</h1>
      </div>
    </div>
  );
}

export default ProjectItems;
