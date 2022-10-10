
import Header from "../../components/Header";
import TechsHome from "../../components/TechsHome";
import Projetos from "../../components/Projetos";
import Contatos from "../../components/Contatos";
import SobreMim from "../../components/SobreMim";

import { Content } from "./style"
import Qualifications from "../../components/Qualifications";


function Home() {
  return (
    <div>
      <Header />
      <Content>
        <SobreMim/>
        <TechsHome />
      </Content>
      <Projetos/>
      <Qualifications/>
      <Contatos/>
    </div>
  );
}

export default Home;