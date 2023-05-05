import eu from "../../../assets/BioPage/eu.png" 
import "./hero.scss"

function Hero() {
  return (
    <section className="fotoHero d-flex">
      <img src={eu} alt="Foto Elyas" />
      <h1>Elyas Rodrigues</h1>
      <p>Alguns links quem podem ser uteis!!</p>
    </section>
  );
}

export default Hero;
