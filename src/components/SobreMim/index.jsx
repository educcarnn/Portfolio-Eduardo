import Perfil from "../../assets/Perfil.jpg";
import { ContentDiv } from "./style";
import Typewriter from "typewriter-effect";

function SobreMim() {
  return (
    <ContentDiv id='sobremim'>
      <div className="introduct">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Olá mundo")
              .pauseFor(1000)
              .start()
              .typeString(", meu nome é Eduardo")
              .pauseFor(2000)
              .start();
          }}
        />

        <div className="TextIntroduct">DESENVOLVEDOR</div>
        <div>Front-end com foco no ecossistema do JavaScript</div>
      </div>
      <div class="aboutToMe">
        <img src={Perfil} alt={Perfil} className="imgToMe" />
        <div>
          Gestão da Tecnologia da Informação na Universidade Estacio de Sá e
          formado em desenvolvimento web Front - End pela Kenzie Academy. Gosto
          do mercado de programação, pelos avanços proporcionados por ela,
          fazendo com que tenhamos, melhor qualidade de vida como um todo e
          facilitar tarefas diárias, que custariam muito tempo e esforço para
          serem feitas, por isso tenho interesse em trabalhar com tecnologia.
        </div>
      </div>
    </ContentDiv>
  );
}

export default SobreMim;
