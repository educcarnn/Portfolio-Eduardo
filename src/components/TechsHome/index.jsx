import { TechsContent } from "./style";
import { DiReact, DiHtml5, DiCss3 } from "react-icons/di";
import {
  SiJavascript,
  SiRedux,
  SiStyledcomponents,
  SiTypescript,
  SiNextdotjs, 
  SiPython,
  SiPhp
} from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";

import Curriculo from "./../../assets/Currículo - Eduardo Carneiro.pdf";

function TechsHome() {
  return (
    <TechsContent>
      <div>TECNOLOGIAS</div>
      <div className="BlockIcons">
        <DiHtml5 className="icons" title="HTML5" />
        <DiCss3 className="icons" title="CSS3" />
        <SiNextdotjs className="icons" title="Next.js" />
        <SiJavascript className="icons" title="JavaScript" />
        <SiTypescript className="icons" title="TypeScript" />
        <DiReact className="icons" title="React" />
        <SiRedux className="icons" title="Redux" />
        <SiStyledcomponents className="icons" title="Styled Components" />
        <IoLogoNodejs className="icons" title="Node.js" />
        <SiPython className="icons" title="Python" />
        <SiPhp className="icons" title="PHP" />
      </div>
      <a href={Curriculo} target="blank" download>
        <button className="ButtonPdf">Currículo(PDF)</button>
      </a>
    </TechsContent>
  );
}

export default TechsHome;
