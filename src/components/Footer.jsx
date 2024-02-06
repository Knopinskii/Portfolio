import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="text-white flex items-center justify-center gap-5 text-5xl pt-10">
      <FaGithubSquare />
      <FaFacebookSquare />
      <FaLinkedin />
      <FaInstagram />
    </div>
  );
}

export default Footer;
