import Head from "next/head";
import Projeto2 from "../../components/Projeto2";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Curso Web Design - Projeto 2</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <Projeto2 />
    </>
  );
};

export default Home;
