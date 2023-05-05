import eu from "../../../assets/BioPage/eu.png" 
import "./hero.scss"

function Hero() {
  return (
    <div className="fotoHero d-flex">
      <img src={eu} alt="Foto Elyas" />
      <h1>Elyas Rodrigues</h1>
      <p>Alguns links quem podem ser uteis!!</p>
    </div>
  );
}

export default Hero;
