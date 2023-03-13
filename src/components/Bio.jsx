import "./Bio.css";
import BioButton from './BioButton.jsx';

function Bio() {
  return (
    <div className={"Bio"}>
      <text className={"Bio-name-text"}>Ishmael Williams</text>
      <p className={"Bio-tagline-text"}>KSU Computer Science Graduate</p>
      <p className={"Bio-tagline-text"}>ishmaelwilliams777@gmail.com</p>
      <BioButton 
        text={"Resume"}
        href={"https://drive.google.com/file/d/1Z5dsmzVmYgzq_em8c5JHuUykLh6llsC0/view?usp=sharing"}
      />
      <BioButton 
        text={"LinkedIn"}
        href={"https://www.linkedin.com/in/ishmael-williams"}
      />
      <BioButton 
        text={"GitHub"}
        href={"https://github.com/Ishmael-Williams"}
      />
    </div>
  );
}

export default Bio;

