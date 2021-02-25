import Header from "./Header";
import Portfolio from "./Portfolio";
import Gallery from "./Gallery";
import About from "./About";
import Contact from "./Contact";
import Maps from "./Maps";
import Footer from "./Footer";

import * as S from "./styles";

const Projeto2: React.FC = () => {
  return (
    <S.Principal>
      <Header />
      <Portfolio />
      <Gallery />
      <About />
      <Contact />
      <Maps />
      <Footer />
    </S.Principal>
  );
};

export default Projeto2;
