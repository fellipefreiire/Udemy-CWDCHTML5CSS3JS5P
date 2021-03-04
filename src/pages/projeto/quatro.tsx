import Head from "next/head";
import Projeto4 from "../../components/Projeto4";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Curso Web Design - Projeto 4</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Projeto4 />
    </>
  );
};

export default Home;
