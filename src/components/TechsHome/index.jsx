import { TechsContent } from "./style";
import { DiReact, DiHtml5, DiCss3 } from "react-icons/di";
import { SiJavascript, SiRedux, SiStyledcomponents, SiTypescript } from "react-icons/si";
import Curriculo from "./../../assets/Currículo - Eduardo Carneiro.pdf";

function TechsHome() {

  return (
    <TechsContent>
      <div>TECNOLOGIAS</div>
      <div className="BlockIcons">
        <DiHtml5 className="icons" />
        <DiCss3 className="icons" />
        <SiJavascript className="icons" />
        <SiTypescript className="icons" />
        <DiReact className="icons" />
        <SiRedux className="icons" />
        <SiStyledcomponents className="icons" />
      </div>
      <a
        href={Curriculo}
        target="blank"
        download
      >
        <button className="ButtonPdf">Currículo(PDF)</button>
      </a>
    </TechsContent>
  );
}

export default TechsHome;
