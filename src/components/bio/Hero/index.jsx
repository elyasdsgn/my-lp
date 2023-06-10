import eu from "../../../assets/BioPage/eu-bio.png" 
import brilho from "../../../assets/BioPage/brilho.png" 
import "./hero.scss"

function Hero() {
  return (
    <section className="fotoHero d-flex">
      <span>Eleve o padrão da sua marca! 🔥🚀</span>
      <div className="imagem d-flex">
      <img src={eu} alt="Foto Elyas" />
      <img src={brilho} alt="brilho" className="brilho-1" />
      <img src={brilho} alt="brilho" className="brilho-2" />
      </div>
      <h1>Elyas Rodrigues</h1>
      
      <p>Alguns links que podem ser úteis!!</p>
    </section>
  );
}

export default Hero;
