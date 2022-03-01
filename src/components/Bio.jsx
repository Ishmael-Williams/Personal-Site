import "./Bio.css";

function Bio() {
  return (
    <div className={"Bio"}>
      <text className={"Bio-name-text"}>Ishmael Williams</text>
      <p className={"Bio-tagline-text"}></p>
      <a
        className={"anchor"}
        href="https://docs.google.com/document/d/14EadMnSbemHrlYOAvImE9T-dNGwOvCHw/edit?usp=sharing&ouid=103907712850444278130&rtpof=true&sd=true"
        target="_blank"
        rel="noreferrer noopener"
      >
        <button className={"btn1"}>Resume</button>
      </a>
      <a
        className={"anchor"}
        href="https://www.linkedin.com/in/ishmael-williams/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <button className={"btn1"}>LinkedIn</button>
      </a>
      <a
        className={"anchor"}
        href="https://github.com/Ishmael-Williams"
        target="_blank"
        rel="noreferrer noopener"
      >
        <button className={"btn1"}>GitHub </button>
      </a>
    </div>
  );
}

export default Bio;
