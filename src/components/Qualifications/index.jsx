import kenzie from "../../assets/images/Certificado - Eduardo Carneiro  - Front End - Português (1)_page-0001.jpg";
import hiring from "../../assets/images/HiringCodersConclusao.jpg";
import dio from "../../assets/images/DIOPensamentoComputacional_page-0001.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { QualificationsDiv } from "./style";

function Qualifications() {
  return (
    <div id="qualifications">
      <QualificationsDiv>
        <div>Certificados</div>
        <Carousel className="carousel">
          <div>
            <img src={kenzie} alt={kenzie} />
            <p className="legend">
              Curso de 1000(mil) horas de Desenvolvimento Web Front-End, que
              abrange as tecnologias necessárias para o Front-End como também
              soft skills necessárias para o mercado de trabalho. Entre as
              tecnologias e linguagens aprendidas estão: Git, HTML5, CSS3,
              JavaScript (ES6+), React, Redux, ContextAPI.
            </p>
          </div>
          <div>
            <img src={hiring} alt={hiring} />
            <p className="legend">
              Hiring Coders curso de 120 horas com aprofundamento de tecnologias
              em full stack de Front e Back End.
            </p>
          </div>
          <div>
            <img src={dio} alt={dio} />
            <p className="legend">
              Curso que aborda, um dos pilares da computação, que é o pensamento
              computacional. Importante para elaborar soluções para diferentes desafios.
            </p>
          </div>
        </Carousel>
      </QualificationsDiv>
    </div>
  );
}

export default Qualifications;
