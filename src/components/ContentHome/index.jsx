import Perfil from "../../assets/Perfil.jpg"
import { ContentDiv } from "./style";
import Typewriter from 'typewriter-effect';


function ContentHome() {
  
  return (
    <ContentDiv>
      <div className="introduct">
      <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Olá mundo")
                  .pauseFor(1000)
                  .start()
                  .typeString(", meu nome é Eduardo")
                  .pauseFor(2000)
                  .start()
              }}
            />
        <div className='TextIntroduct'>DESENVOLVEDOR</div>
        <div>Full Stack (Java, Python, Javascript, PHP)</div>
      </div>
      <div class="aboutToMe">
        <img src={Perfil} alt={Perfil} className="imgToMe"/>
        <div>
          Gestão da Tecnologia da Informação na Universidade Estacio de Sá. Gosto do mercado de programação, pelos avanços proporcionadas por ele, fazendo com que tenhamos, melhor qualidade de vida como um todo e facilitar tarefas diárias, que custariam muito tempo e esforço para serem feitas, por isso tenho interesse em trabalhar com tecnologia.
        </div>
      </div>
    </ContentDiv>
  );
}

export default ContentHome;
