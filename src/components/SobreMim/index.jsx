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
          Graduando em Gestão da Tecnologia da Informação na Estácio de Sá.
          Minha trajetória é marcada pela paixão e dedicação ao
          dinâmico universo da programação. Acredito fervorosamente no poder
          transformador das soluções tecnológicas avançadas. Enxergo a
          tecnlogia como uma aliada fundamental para proporcionar não apenas
          inovação, mas uma significativa melhoria na qualidade de vida. Estou
          pronto para contribuir efetivamente para o desenvolvimento de soluções
          que transcenderão as expectativas do mercado, colocando-me à
          disposição para explorar novos horizontes e desafios na área
          tecnológica.
        </div>
      </div>
    </ContentDiv>
  );
}

export default SobreMim;
