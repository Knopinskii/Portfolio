import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="text-white flex items-center justify-center gap-5 text-5xl pt-10">
      <a href="https://github.com/Knopinskii">
        <FaGithubSquare />
      </a>
      <a href="https://www.facebook.com/vova.knopik">
        <FaFacebookSquare />
      </a>
      <a href="https://www.linkedin.com/in/vladimir-knopinskii-b90ba2198/">
        <FaLinkedin />
      </a>
      <a href="https://www.instagram.com/v.knopinskii/">
        <FaInstagram />
      </a>
    </div>
  );
}

export default Footer;
