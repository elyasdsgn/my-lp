import "./bio.scss";
import Header from "../../components/bio/Header";
import Hero from "../../components/bio/Hero";
import Botoes from "../../components/bio/Botoes";

function Bio() {
  return (
    <>
      <div className="bioPageSection d-flex">
        <Header />
        <main>
          <Hero />
          <Botoes />
        </main>
      </div>
    </>
  );
}

export default Bio;
