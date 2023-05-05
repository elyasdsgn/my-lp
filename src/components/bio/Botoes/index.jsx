import port from "../../../assets/BioPage/portfolio.png";
import behence from "../../../assets/BioPage/behence.png";
import zap from "../../../assets/BioPage/zap.png";
import "./botoes.scss"

function Botoes() {
  return (
    <section className="buttons d-flex">
      <a href="#">
        <img src={port} alt="porfolio" id="port" />
      </a>
      <a href="#">
        <img src={behence} alt="behence" id="behas" />
      </a>
      <a href="#">
        <img src={zap} alt="zap" id="zap" />
      </a>
    </section>
  );
}

export default Botoes;
