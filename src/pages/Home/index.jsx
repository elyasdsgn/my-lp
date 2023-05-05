import Bio from '../../components/home/Bio';
import Divisao from '../../components/home/Divisao';
import Faq from '../../components/home/Faq';
import Footer from '../../components/home/Footer';
import Hero from '../../components/home/Hero';
import Promessas from '../../components/home/Promessas';
import Trabalhos from '../../components/home/Trabalhos';

function Home() {
  return (
    <>
      <Hero />
      <main>
        <Divisao />
        <Promessas />
        <Bio />
        <Trabalhos />
        <Faq />
      </main>
      <Footer />
    </>
  );
}

export default Home