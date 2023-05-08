import port from "../../../assets/BioPage/portfolio.png";
import behence from "../../../assets/BioPage/behence.png";
import zap from "../../../assets/BioPage/zap.png";
import { Link } from 'react-router-dom'
import "./botoes.scss"

function Botoes() {
  return (
    <section className="buttons d-flex">
      <Link to="/" data-aos="zoom-in" data-aos-duration="2000">
        <img src={port} alt="porfolio" id="port" />
      </Link>
      <Link to="https://www.behance.net/elyasdsgn" target={"_blank"} data-aos="zoom-in" data-aos-duration="2500">
        <img src={behence} alt="behence" id="behas" />
      </Link>
      <Link to="https://wa.me/98988149744?text=Olá, quero fazer um orçamento!!" data-aos="zoom-in" data-aos-duration="3000">
        <img src={zap} alt="zap" id="zap" />
      </Link>
    </section>
  );
}

export default Botoes;
