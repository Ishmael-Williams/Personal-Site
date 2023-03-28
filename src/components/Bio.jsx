import "./Bio.css";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { FaGoogleDrive } from "react-icons/fa";
import { profilePic } from "../images/profile-pic.png";

function Bio() {
  return (
    <div className={"Bio"}>
      <text className={"Bio-name-text"}>Ishmael Williams</text>
      <p className={"Bio-tagline-text"}>KSU Computer Science Graduate</p>
      <p className={"Bio-tagline-text"}>ishmaelwilliams777@gmail.com</p>

      <a
        href={"https://drive.google.com/file/d/1Z5dsmzVmYgzq_em8c5JHuUykLh6llsC0/view?usp=sharing"}
        target="_blank"
        rel="noreferrer noopener"
      >
        <button className="portfolioBtn">
          <FaGoogleDrive className ="icon" size="1.7em"/>
          {"Resume"}
        </button>
      </a>

      <a
        href={"https://www.linkedin.com/in/ishmael-williams"}
        target="_blank"
        rel="noreferrer noopener"
      >
        <button className="portfolioBtn">
          <AiFillLinkedin className="icon" size="1.7em"/>
          {"LinkedIn"}
        </button>
      </a>

      <a
        href={"https://github.com/Ishmael-Williams"}
        target="_blank"
        rel="noreferrer noopener"
      >
        <button className="portfolioBtn">
          <AiOutlineGithub  className="icon" size="1.7em"/>
          {"GitHub"}
        </button>
      </a>

    </div>
  );
}

export default Bio;

