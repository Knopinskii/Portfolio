import NavBar from "../components/NavBar";

function Skills() {
  return (
    <div>
      <NavBar />
      <div className="text-white pt-16 pb-[20rem] text-center">
        <h1 className="text-5xl ">Skills</h1>
        <div className="pt-10">
          <h2 className="text-2xl font-extralight">Front-End</h2>
          <p className="pt-6">
            HTML, CSS, ReactJS, Redux, React Native, NPM, Ionic, Taildwind CSS
          </p>
          <h2 className="pt-10 text-2xl font-extralight">Back-End</h2>
          <p className="pt-6">
            NodeJS, ExpressJS, GraphQL, MySQL, MongoDB, AWS
          </p>
          <h2 className="pt-10 text-2xl font-extralight">Languages</h2>
          <p className="pt-6">JavaSript, TypeScript, Python</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
