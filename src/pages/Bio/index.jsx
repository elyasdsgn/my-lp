import "./bio.scss";
import Header from "../../components/bio/Header";
import Hero from "../../components/bio/Hero";
import Botoes from "../../components/bio/Botoes";
import lua from "../../assets/BioPage/lua.png"

function Bio() {
  document.title = "Links | Elyas"

  return (
    <>
      <div className="bioPageSection d-flex">
        <img src={lua} alt="Lua" className="lua"/>
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
