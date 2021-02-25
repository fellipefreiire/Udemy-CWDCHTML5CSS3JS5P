import Head from "next/head";
import Index from "../components/Index";

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Curso Web Design</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <main>
        <Index />
      </main>
    </>
  );
};

export default Home;
