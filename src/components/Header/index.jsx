import { DivElem, DivFather, ElemIcons } from "./style";

function Header() {
  return (
    <DivElem>
      <DivFather>
        <a href="#sobremim" className="link">
          Sobre mim
        </a>
        <a href="#projetos" className="link">
          Projetos
        </a>
      </DivFather>
      <div>{"<Eduardo/>"}</div>
      <ElemIcons>
        <a href="#contatos" className="link">
          Contatos
        </a>
        <a href="#qualifications" className="link">
          Qualificações
        </a> 
      </ElemIcons>
    </DivElem>
  );
}
export default Header;
