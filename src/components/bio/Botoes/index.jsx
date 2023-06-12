import port from "../../../assets/BioPage/portfolio.jpg";
import behas from '../../../assets/BioPage/behas.jpg'
import zap from "../../../assets/BioPage/zap.jpg";
import instagram from "../../../assets/BioPage/instagram.jpg";
import { Link } from 'react-router-dom'
import "./botoes.scss"

function Botoes() {
  return (
    <section className="buttons d-flex">
      <Link to="https://wa.me/98988149744?text=Olá, quero fazer um orçamento!!" data-aos="zoom-in" data-aos-duration="2000">
        <img src={zap} alt="zap"  className="cardBio"/>
      </Link>
      <Link to="https://www.behance.net/elyasdsgn" target={"_blank"} data-aos="zoom-in" data-aos-duration="1500">
        <img src={behas} alt="behance" className="cardBio"/>
      </Link>
      <Link to="https://www.instagram.com/dsgn.elyas/" data-aos="zoom-in" data-aos-duration="1250" >
        <img src={instagram} alt="porfolio"  className="cardBio"/>
      </Link>
      <Link to="/" data-aos="zoom-in" data-aos-duration="1000" >
        <img src={port} alt="porfolio"  className="cardBio"/>
      </Link>
    </section>
  );
}

export default Botoes;
