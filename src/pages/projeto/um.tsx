import Head from "next/head";
import Projeto1 from "../../components/Projeto1";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Curso Web Design - Projeto 1</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Projeto1 />
    </>
  );
};

export default Home;
