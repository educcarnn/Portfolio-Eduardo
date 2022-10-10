import { SiGmail } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { ContatosDiv } from "./style";

function Contatos() {
  return (
    
    
    <ContatosDiv id="contatos">
      <div className="ContantName">CONTATOS</div>
      <div>
        <div className="DivSpace">
          <SiGmail />
          <div>educcarnn@gmail.com</div>
        </div>
    

        <a
          href="https://www.linkedin.com/in/eduardo-carneiiiro/"
          target="blank"
          className="link"
        >
          <div className="DivSpace">
            <BsLinkedin />
            <div>linkedin.com/in/eduardo-carneiiiro</div>
          </div>
        </a>
        <a href="https://github.com/educcarnn" target="blank" className="link">
          <div className="DivSpace">
            <VscGithub />
            <div>github.com/educcarnn</div>
          </div>
        </a>
      </div>
    </ContatosDiv>
  );
}

export default Contatos;
