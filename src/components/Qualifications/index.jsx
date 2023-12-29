import kenzie from "../../assets/images/Certificado - Eduardo Carneiro  - Front End - Português (1)_page-0001.jpg";
import hiring from "../../assets/images/HiringCodersConclusao.jpg";
import dio from "../../assets/images/DIOPensamentoComputacional_page-0001.jpg";
import aws from "../../assets/images/AWSNexa.jpg";
import estgest from "../../assets/images/ESTGest.jpg";
import cripto from "../../assets/images/IPEDCripto.jpg"
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
            <img src={estgest} alt={estgest} />
            <p className="legend">
              264 horas com compreensão profunda sobre aspectos essenciais do
              gerenciamento de projetos de tecnologia. Explorando estratégias de
              governança, gestão de riscos empresariais, conformidade ética nos
              negócios e requisitos legais com desafios em constante evolução do
              gerenciamento de projetos e serviços de TI com programas que
              oferecem uma visão prática e abrangente.
            </p>
          </div>
          <div>
            <img src={hiring} alt={hiring} />
            <p className="legend">
              120 horas com aprofundamento de tecnologias em full stack de Front
              e Back End, focado no ecosistema de Javascript, como React e
              NodeJs. Mas também em banco de dados como SQL E NoSQL, sendo
              bastante didático e prático sobre esses assuntos e boas práticas
              que devem ser seguidas em projetos agéis.
            </p>
          </div>
          <div>
            <img src={cripto} alt={cripto} />
            <p className="legend">
              Em 80 horas, pude compreender e esclarecer o extenso mundo das
              criptomoedas. O impacto causado no dia a dia, principalmente na
              mudança econômica, modificando conceitos clássicos inerentes à
              sociedade, como a descentralização da moeda e o blockchain. Que
              também afeta a maneira como navegaremos na internet futuramente,
              devido à forma como as informações serão gravadas através dela.
              Esses e outros conceitos foram abordados no curso.
            </p>
          </div>
          <div>
            <img src={dio} alt={dio} />
            <p className="legend">
              Aborda um dos pilares da computação, que é o pensamento
              computacional. Importante para elaborar soluções para diferentes
              desafios.
            </p>
          </div>
          <div>
            <img src={aws} alt={aws} />
            <p className="legend">
              Este curso abrange desde os fundamentos até os aspectos avançados
              da nuvem, proporcionando um amplo conhecimento da plataforma AWS
            </p>
          </div>
        </Carousel>
      </QualificationsDiv>
    </div>
  );
}

export default Qualifications;
