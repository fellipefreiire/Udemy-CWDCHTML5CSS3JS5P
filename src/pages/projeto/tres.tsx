import Head from "next/head";
import Projeto3 from "../../components/Projeto3";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Curso Web Design - Projeto 3</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Projeto3 />
    </>
  );
};

export default Home;
