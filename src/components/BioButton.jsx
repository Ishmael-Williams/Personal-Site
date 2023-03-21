
export default function BioButton({className, text, href}){
  return(
    <a 
      href={href}
      target="_blank"
      rel="noreferrer noopener">
        <button className="portfolioBtn" href={href}>{text}</button>
    </a>
  );
}

