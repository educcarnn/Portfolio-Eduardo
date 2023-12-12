import Perfil from "../../assets/Perfil.jpg";
import { ContentDiv } from "./style";
import Typewriter from "typewriter-effect";

function SobreMim() {
  return (
    <ContentDiv id="sobremim">
      <div className="introduct">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Olá")
              .pauseFor(1000)
              .start()
              .typeString(", meu nome é Eduardo")
              .pauseFor(2000)
              .start();
          }}
        />

        <div className="TextIntroduct">DESENVOLVEDOR</div>
        <div>
          <p>Full Stack (Js, Java, PHP/Laravel, Python) </p>
        </div>
      </div>
      <div class="aboutToMe">
        <img src={Perfil} alt={Perfil} className="imgToMe" />
        <div>
          Atualmente, estou cursando Gestão da Tecnologia da Informação na
          Universidade Estácio de Sá e tenho formação em Desenvolvimento Web
          Front-End pela Kenzie Academy. Sou apaixonado pelo mercado de
          programação, pois acredito que as soluções tecnológicas avançadas
          podem nos proporcionar uma melhor qualidade de vida e simplificar
          tarefas diárias que antes exigiam muito tempo e esforço. Tenho grande
          interesse em trabalhar com tecnologia e contribuir para a criação de
          projetos inovadores e impactantes.
        </div>
      </div>
    </ContentDiv>
  );
}

export default SobreMim;
