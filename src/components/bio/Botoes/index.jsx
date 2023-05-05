import port from "../../../assets/BioPage/portfolio.png";
import behence from "../../../assets/BioPage/behence.png";
import zap from "../../../assets/BioPage/zap.png";
import { Link } from 'react-router-dom'
import "./botoes.scss"

function Botoes() {
  return (
    <section className="buttons d-flex">
      <Link to="/" >
        <img src={port} alt="porfolio" id="port" />
      </Link>
      <Link to="https://www.behance.net/elyasdsgn" target={"_blank"}>
        <img src={behence} alt="behence" id="behas" />
      </Link>
      <Link to="https://wa.me/98988149744?text=Olá, quero fazer um orçamento!!">
        <img src={zap} alt="zap" id="zap" />
      </Link>
    </section>
  );
}

export default Botoes;
