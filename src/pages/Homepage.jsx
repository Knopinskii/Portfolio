import NavBar from "../components/NavBar";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

function Homepage() {
  return (
    <div>
      <NavBar />

      <div className="text-white pt-16 pb-[20rem] text-center">
        <h1 className="text-5xl font-light">Hi, my name is Vladimir</h1>

        <h2 className="text-white pt-8 text-lg">
          A beginner software developer with a passion of learning and creating
        </h2>

        <div className="text-white flex items-center justify-center gap-2 text-xl pt-12">
          <IoLogoLinkedin />
          <FaGithubSquare />
          <MdEmail />
        </div>
      </div>
    </div>
  );
}

export default Homepage;
